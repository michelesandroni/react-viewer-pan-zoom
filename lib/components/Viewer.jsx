import { useState, useEffect, useRef, useCallback, useContext } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { useGesture } from '@use-gesture/react'
import PropTypes from 'prop-types'

import { ViewerUtils } from './ViewerUtils'
import { ViewerContext } from './ViewerContext'

import styles from './Viewer.module.css'

const debugLogEvents = false

const Viewer = ({ className = '', viewportContent, minimapContent }) => {
  const {
    crop, setCrop, settings,
    setZoomIn, setZoomOut, setResetView, setCenterView, setToggleMinimap
  } = useContext(ViewerContext)

  // console.log('Viewer')

  const cropRef = useRef(crop)

  // Adjust pinch-zoom
  const pinchSensitivity = 0.75
  const mouseWheelUnits = 100

  const viewerRef = useRef()
  const viewportRef = useRef()
  const viewportContentRef = useRef()
  const minimapRef = useRef()

  const minimapWidthRef = useRef(settings.minimap.width)
  const minimapHeightRef = useRef(160) // This will be re-calculated based on the aspect ratio
  const [minimapVisible, setMinimapVisible] = useState(settings.minimap.enabled)
  const [minimapSize, setMinimapSize] = useState({
    width: minimapWidthRef.current,
    height: minimapHeightRef.current,
    scale: 1,
  })

  // React spring transform
  const [springProps, springApi] = useSpring(() => {
    return {
      transform: `scale(${crop.zoom}) translate(${crop.pan[0] / crop.zoom}px, ${crop.pan[1] / crop.zoom}px)`,
      onRest: () => {
        // setTimeout(() => {
        //   console.log('After transformation (real values):', getBounds(viewportContentRef.current)
        // }, 0)
      },
      config: {
        tension: 170, // 170
        friction: 26, // 26
      },
    }
  })

  // Update 'cropRef' whenever the crop is updated
  useEffect(() => {
    if (crop !== cropRef.current) {
      cropRef.current = crop
      springApi.start({ transform: `scale(${crop.zoom}) translate(${crop.pan[0] / crop.zoom}px, ${crop.pan[1] / crop.zoom}px)` })
    }
  }, [crop, springApi])

  const adjustCrop = (cropToAdjust, viewportBounds, futureBounds) => {
    const widthOverhang = (futureBounds.width - viewportBounds.width) / 2
    const heightOverhang = (futureBounds.height - viewportBounds.height) / 2

    if (futureBounds.width < viewportBounds.width) {
      cropToAdjust.pan[0] = 0 // Center horizontally if content is smaller than the viewport
    } else if (futureBounds.left > viewportBounds.left) {
      cropToAdjust.pan[0] = Math.min(cropToAdjust.pan[0], widthOverhang) // Clamp to the left edge
    } else if (futureBounds.right < viewportBounds.right) {
      cropToAdjust.pan[0] = Math.max(cropToAdjust.pan[0], viewportBounds.width - futureBounds.width + widthOverhang) // Clamp to the right edge
    }

    if (futureBounds.height < viewportBounds.height) {
      cropToAdjust.pan[1] = 0 // Center vertically if content is smaller than the viewport
    } else if (futureBounds.top > viewportBounds.top) {
      cropToAdjust.pan[1] = Math.min(cropToAdjust.pan[1], heightOverhang) // Clamp to the top edge
    } else if (futureBounds.bottom < viewportBounds.bottom) {
      cropToAdjust.pan[1] = Math.max(cropToAdjust.pan[1], viewportBounds.height - futureBounds.height + heightOverhang) // Clamp to the bottom edge
    }

    return cropToAdjust
  }

  const enforceCrop = useCallback((cropToAdjust) => {
    const viewportBounds = ViewerUtils.getEditableRect(getBounds(viewportRef.current))

    // Predict the transformed bounds
    const futureBounds = ViewerUtils.transformBounds(viewportBounds, cropToAdjust)

    // console.log(`From: ${JSON.stringify(cropRef.current)}\nTo:   ${JSON.stringify(cropToAdjust)}`)
    // console.log('Current (real values):', getBounds(viewportContentRef.current))
    // console.log('Predicted (without crop adjust):', futureBounds)

    return adjustCrop(cropToAdjust, viewportBounds, futureBounds)
  }, [])

  // Get the bounds of an element based on its offset from the parent element (Viewer)
  const getBounds = (element) => {
    const parentRect = viewerRef.current.getBoundingClientRect()
    const rect = element.getBoundingClientRect()
    return {
      top: rect.top - parentRect.top,
      left: rect.left - parentRect.left,
      width: element.offsetWidth,
      height: element.offsetHeight,
      bottom: (rect.top - parentRect.top) + element.offsetHeight,
      right: (rect.left - parentRect.left) + element.offsetWidth,
    }
  }

  // Update the minimap
  const updateMinimapSize = useCallback(() => {
    if (debugLogEvents) {
      // console.log('updateMinimapSize')
    }

    // Width of the minimap
    const minimapWidth = minimapRef.current.offsetWidth
    // Viewport aspect ratio
    const aspectRatio = viewportRef.current.offsetWidth / viewportRef.current.offsetHeight
    // Height of the minimap based on the aspect ratio
    minimapHeightRef.current = minimapWidth / aspectRatio
    // Scale of the minimap based on the width of the viewport
    const minimapScale = minimapWidth / viewportRef.current.offsetWidth

    // Set the size of the minimap
    setMinimapSize(prevMinimapSize => ({
      ...prevMinimapSize,
      width: minimapWidthRef.current,
      height: minimapHeightRef.current,
      scale: minimapScale,
    }))

    // Adjust the crop when window is resized
    let newCrop = {
      ...cropRef.current
    }
    newCrop = enforceCrop(newCrop)
    setCrop(newCrop)
  }, [enforceCrop, setCrop])

  // Update the minimap size when viewport content changes
  useEffect(() => {
    if (viewportContentRef.current) {
      // Update if the viewport content is an image
      const imgElement = viewportContentRef.current.querySelector('img')
      if (imgElement) {
        // Already loaded ?
        if (imgElement.complete) {
          // If the image is complete
          updateMinimapSize()
        } else {
          // Add event listener for image load
          imgElement.onload = updateMinimapSize
        }
      }

      // Update if the viewport content is a video
      const videoElement = viewportContentRef.current.querySelector('video')
      if (videoElement) {
        // Already loaded ?
        if (videoElement.readyState >= 4) {
          // If the video is ready
          updateMinimapSize()
        } else {
          // Add event listener for video load
          videoElement.onloadeddata = updateMinimapSize
        }
      }
    }

    return () => { }
  }, [viewportContent, updateMinimapSize])

  // Update the minimap size when the minimap is toggled
  useEffect(() => {
    updateMinimapSize()
  }, [minimapVisible, updateMinimapSize])

  // Update the minimap size when the window is resized
  const onWindowResize = useCallback(() => {
    updateMinimapSize()
  }, [updateMinimapSize])

  // Add window resize listener
  useEffect(() => {
    if (debugLogEvents) {
      console.log('Resize event listener mounted')
    }
    // Add event listener for window resize
    window.addEventListener('resize', onWindowResize)

    // Remove event listener on component unmount
    return () => {
      if (debugLogEvents) {
        console.log('Resize event listener unmounted')
      }
      window.removeEventListener('resize', onWindowResize)
    }
  }, [onWindowResize])

  // Rubberband
  const rubberband = useCallback((newCrop) => {
    const rubberbandedCrop = { pan: { ...newCrop.pan }, zoom: newCrop.zoom }
    const enforcedCrop = enforceCrop({ pan: { ...newCrop.pan }, zoom: newCrop.zoom })

    rubberbandedCrop.pan[0] = Math.max(rubberbandedCrop.pan[0], enforcedCrop.pan[0] - settings.spring.rubberbandDistance)
    rubberbandedCrop.pan[0] = Math.min(rubberbandedCrop.pan[0], enforcedCrop.pan[0] + settings.spring.rubberbandDistance)

    rubberbandedCrop.pan[1] = Math.max(rubberbandedCrop.pan[1], enforcedCrop.pan[1] - settings.spring.rubberbandDistance)
    rubberbandedCrop.pan[1] = Math.min(rubberbandedCrop.pan[1], enforcedCrop.pan[1] + settings.spring.rubberbandDistance)

    return rubberbandedCrop
  }, [settings, enforceCrop])

  const handleZoom = useCallback((gestureState, viewportOrMinimap, memo) => {
    if (!settings.zoom.enabled) return memo
    if (gestureState.last) return memo

    memo ??= cropRef.current

    // console.log('Current (real values):', getBounds(viewportContentRef.current)
    const viewportBounds = getBounds(viewportRef.current)

    let deltaZoom = 0
    let origin = [0, 0]

    // let gestureSignal = 'IGNORED'

    if (gestureState.type === 'click') {
      // Button click
      deltaZoom = Number(gestureState.zoomChange) * settings.zoom.zoomButtonStep
      // gestureSignal = 'CLICK'
    } else if (gestureState.type === 'pointermove' && gestureState.pinching) {
      // Touchscreen (mobile) pinch-zoom
      deltaZoom = gestureState.delta[0]
      origin[0] = gestureState.origin[0] - viewportBounds.width / 2
      origin[1] = gestureState.origin[1] - viewportBounds.height / 2
      // gestureSignal = 'MOBILE PINCH'
    } else if (gestureState.type === 'wheel') {
      if (gestureState.ctrlKey && gestureState.pinching === true) {
        // Touchpad (laptop) pinch-zoom
        switch (gestureState.axis) {
          case 'scale':
            deltaZoom = gestureState.delta[0]
            // gestureSignal = 'TOUCHPAD PINCH'
            break
          case 'x':
            // ignore x
            break
          case 'y':
            // ignore y
            break
        }
        origin[0] = gestureState.event.clientX - viewportBounds.width / 2
        origin[1] = gestureState.event.clientY - viewportBounds.height / 2
      } else if (gestureState.axis === 'y' && (!('pinching' in gestureState) || gestureState.pinching === false)) {
        // Mouse wheel
        // The 'pinching' state must be either absent or set to false (which happens after a pinch on a touch laptop, for example)
        deltaZoom = -gestureState.delta[1] / mouseWheelUnits * settings.zoom.mouseWheelStep
        origin[0] = gestureState.event.clientX - viewportBounds.width / 2
        origin[1] = gestureState.event.clientY - viewportBounds.height / 2
        // gestureSignal = 'WHEEL'
      }
    }

    if (viewportOrMinimap == 'minimap') {
      origin[0] = 0
      origin[1] = 0
    }

    // Find new zoom and clamp
    const newZoom = Math.min(Math.max((memo.zoom + deltaZoom), settings.zoom.min), settings.zoom.max)

    // console.log(`gestureSignal: ${gestureSignal}, type: ${gestureState.type}`, '\ndelta:', gestureState.delta, '\ndeltaZoom:', deltaZoom, '\nnewZoom:', newZoom, gestureState)

    // Correct the pan around the gesture's transform origin
    // Calculate the pan correction needed to keep the point under the cursor in the same place
    // For example, during a wheel gesture, the zoom uses the pointer position as the origin
    const zoomScaleRatio = newZoom / cropRef.current.zoom
    const newPan = [
      origin[0] + (cropRef.current.pan[0] - origin[0]) * zoomScaleRatio,
      origin[1] + (cropRef.current.pan[1] - origin[1]) * zoomScaleRatio,
    ]

    let newCrop = {
      ...cropRef.current,
      zoom: newZoom,
      pan: newPan,
    }
    newCrop = enforceCrop(newCrop)
    setCrop(newCrop)

    return newCrop
  }, [settings, setCrop, enforceCrop])

  const handleDrag = useCallback((gestureState, viewportOrMinimap, memo) => {
    if (!settings.pan.enabled) return memo
    if (gestureState.last) return memo

    memo ??= cropRef.current

    const deltaScale = (viewportOrMinimap == 'viewport') ? 1 : -cropRef.current.zoom / minimapSize.scale

    const newPan = [
      memo.pan[0] + gestureState.delta[0] * deltaScale,
      memo.pan[1] + gestureState.delta[1] * deltaScale,
    ]

    let newCrop = {
      ...cropRef.current,
      pan: newPan,
    }
    if (settings.spring.rubberband) {
      newCrop = rubberband(newCrop)
    } else {
      newCrop = enforceCrop(newCrop)
    }
    setCrop(newCrop)

    return newCrop
  }, [settings, setCrop, enforceCrop, rubberband, minimapSize.scale])

  const onGestureEnd = useCallback(() => {
    let newCrop = {
      ...cropRef.current,
    }
    newCrop = enforceCrop(newCrop)
    setCrop(newCrop)
  }, [setCrop, enforceCrop])

  // Viewer controls
  const zoomOut = useCallback(() => {
    const event = { type: 'click', zoomChange: -1, }
    handleZoom(event, 'minimap', cropRef.current)
  }, [handleZoom])

  const zoomIn = useCallback(() => {
    const event = { type: 'click', zoomChange: 1, }
    handleZoom(event, 'minimap', cropRef.current)
  }, [handleZoom])

  const resetView = useCallback(() => {
    const newCrop = {
      pan: [0, 0],
      zoom: settings.zoom.default,
    }
    setCrop(newCrop)
  }, [settings, setCrop])

  const centerView = useCallback(() => {
    const newCrop = {
      pan: [0, 0],
      zoom: cropRef.current.zoom,
    }
    setCrop(newCrop)
  }, [setCrop])

  const toggleMinimap = useCallback(() => {
    setMinimapVisible(v => !v)
  }, [])

  useEffect(() => {
    // Setup the viewer controls
    setZoomOut(() => zoomOut)
    setZoomIn(() => zoomIn)
    setResetView(() => resetView)
    setCenterView(() => centerView)
    setToggleMinimap(() => toggleMinimap)

    if (debugLogEvents) {
      console.log('Viewer controls mounted')
    }

    return () => {
      if (debugLogEvents) {
        console.log('Viewer controls unmounted')
      }
    }
  }, [zoomOut, setZoomOut, zoomIn, setZoomIn, resetView, setResetView, centerView, setCenterView, toggleMinimap, setToggleMinimap])

  // Keyboard input
  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase()
      if (settings.resetView.enabled) {
        if (key === settings.resetView.keyboardShortcut) {
          resetView()
        }
      }
      if (settings.centerView.enabled) {
        if (key === settings.centerView.keyboardShortcut) {
          centerView()
        }
      }
      if (settings.minimap.enabled) {
        if (key === settings.minimap.keyboardShortcut) {
          toggleMinimap()
        }
      }
    }

    if (debugLogEvents) {
      console.log('Keyboard event listener mounted')
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      if (debugLogEvents) {
        console.log('Keyboard event listener unmounted')
      }
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [settings, resetView, centerView, toggleMinimap])

  // use-gesture configuration
  const useGestureConfiguration = {
    drag: {
      enabled: settings.pan.enabled,
      from: () => cropRef.current.pan,
      preventScroll: false, // Ignores vertical scrolling on touch devices
    },
    pinch: {
      enabled: settings.zoom.enabled,
      preventDefault: true,
      pinchOnWheel: true,
      angleBounds: { min: 0, max: 0, },
      from: () => [cropRef.current.zoom * pinchSensitivity, 0],
    },
    wheel: {
      enabled: settings.zoom.enabled,
      preventDefault: true,
      from: () => [0, -cropRef.current.zoom * mouseWheelUnits],
    },
    eventOptions: {
      passive: false,
    },
  }

  // Viewport gestures
  useGesture({
    onDrag: (state) => handleDrag(state, 'viewport', state.memo),
    onDragEnd: onGestureEnd,
    onPinch: (state) => handleZoom(state, 'viewport', state.memo),
    onPinchEnd: onGestureEnd,
    onWheel: (state) => handleZoom(state, 'viewport', state.memo),
    onWheelEnd: onGestureEnd,
  },
    {
      ...useGestureConfiguration,
      target: viewportRef,
    })

  // Minimap gestures
  useGesture({
    onDrag: (state) => handleDrag(state, 'minimap', state.memo),
    onDragEnd: onGestureEnd,
    onPinch: (state) => handleZoom(state, 'minimap', state.memo),
    onPinchEnd: onGestureEnd,
    onWheel: (state) => handleZoom(state, 'minimap', state.memo),
    onWheelEnd: onGestureEnd,
  }, {
    ...useGestureConfiguration,
    target: minimapRef,
  })

  // The minimap style
  const minimapStyle = {
    width: minimapWidthRef.current,
    height: minimapHeightRef.current,
    display: (minimapVisible && minimapContent) ? 'block' : 'none',
    outline: settings.minimap.outlineStyle,
  }

  // The minimap viewport area matches the area visible in the viewport
  let minimapViewportAreaStyle = {}

  if (viewportRef.current) {
    const scale = minimapSize.scale
    const minimapZoom = Math.max(crop.zoom, 1)
    minimapViewportAreaStyle = {
      // The order of transform matters! Scale first, then translate
      transform: `scale(${1 / minimapZoom}) translate(${-crop.pan[0] * scale}px, ${-crop.pan[1] * scale}px)`,
      width: `${viewportRef.current.offsetWidth * scale}px`,
      height: `${viewportRef.current.offsetHeight * scale}px`,
      outline: settings.minimap.viewportAreaOutlineStyle,
    }
  }

  // The content styles
  const viewportContentStyle = (settings.spring.enabled === true)
    ? springProps
    : { transform: `scale(${crop.zoom}) translate(${crop.pan[0] / crop.zoom}px, ${crop.pan[1] / crop.zoom}px)`, }

  let minimapContentStyle = {}
  if (viewportRef.current) {
    minimapContentStyle = {
      transformOrigin: '0% 0%',
      transform: `scale(${minimapSize.scale})`,
      width: `${viewportRef.current.offsetWidth}px`,
      height: `${viewportRef.current.offsetHeight}px`,
    }
  }

  const viewerClasses = [
    className,
    styles['viewer-main'],
    settings.fillHeight && styles['viewer-main-fill-height']
  ].filter(Boolean).join(' ')

  return (
    <div className={viewerClasses} ref={viewerRef}>
      <div className={styles['viewer-minimap']} ref={minimapRef} style={minimapStyle}>
        <div className={styles['viewer-minimap-content']} style={minimapContentStyle} >
          {minimapContent}
        </div>
        <div className={styles['viewer-minimap-viewport-area']} style={minimapViewportAreaStyle}></div>
      </div>
      <div className={styles['viewer-viewport']} ref={viewportRef}>
        {settings.guides.enabled &&
          <div className={styles['viewer-viewport-center-guide']}></div>
        }
        <animated.div className={styles['viewer-viewport-content']} ref={viewportContentRef} style={viewportContentStyle}>
          {viewportContent}
        </animated.div>
      </div>
    </div>
  )
}

Viewer.propTypes = {
  className: PropTypes.string,
  viewportContent: PropTypes.node,
  minimapContent: PropTypes.node,
}

export { Viewer }
