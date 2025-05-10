import { useState, useEffect, useRef, useCallback, useContext } from 'react'
import { useSpring, animated } from 'react-spring'
import { useGesture, Vector2 } from '@use-gesture/react'

import {
  ViewerContextType, ContentType, Crop, Bounds, ViewerProps,
  WheelState, PinchState, DragState, ClickGestureState
} from './types'
import { ViewerContext } from './ViewerContext'

import styles from './Viewer.module.css'

const debugLogEvents = false

const Viewer = ({
  className = '',
  viewportContent,
  minimapContent,
}: ViewerProps) => {
  const {
    crop, setCrop, settings,
    setZoomIn, setZoomOut, setResetView, setCenterView, setToggleMinimap
  } = useContext<ViewerContextType>(ViewerContext)

  // console.log('Viewer')

  const cropRef = useRef(crop)

  // Adjust pinch-zoom
  const pinchSensitivity = 0.75
  const mouseWheelUnits = 100

  const viewerRef = useRef<HTMLDivElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const minimapRef = useRef<HTMLDivElement>(null)
  const viewportContentRef = useRef<HTMLDivElement>(null) // animated.div

  const AnimatedDivViewportContent = animated("div")

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
      onRest: () => { },
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

  const adjustCrop = (cropToAdjust: Crop, viewportBounds: Bounds, newBounds: Bounds) => {
    const widthOverhang = (newBounds.width - viewportBounds.width) / 2
    const heightOverhang = (newBounds.height - viewportBounds.height) / 2

    if (newBounds.width < viewportBounds.width) {
      cropToAdjust.pan[0] = 0 // Center horizontally if content is smaller than the viewport
    } else if (newBounds.left > viewportBounds.left) {
      cropToAdjust.pan[0] = Math.min(cropToAdjust.pan[0], widthOverhang) // Clamp to the left edge
    } else if (newBounds.right < viewportBounds.right) {
      cropToAdjust.pan[0] = Math.max(cropToAdjust.pan[0], viewportBounds.width - newBounds.width + widthOverhang) // Clamp to the right edge
    }

    if (newBounds.height < viewportBounds.height) {
      cropToAdjust.pan[1] = 0 // Center vertically if content is smaller than the viewport
    } else if (newBounds.top > viewportBounds.top) {
      cropToAdjust.pan[1] = Math.min(cropToAdjust.pan[1], heightOverhang) // Clamp to the top edge
    } else if (newBounds.bottom < viewportBounds.bottom) {
      cropToAdjust.pan[1] = Math.max(cropToAdjust.pan[1], viewportBounds.height - newBounds.height + heightOverhang) // Clamp to the bottom edge
    }

    return cropToAdjust
  }

  const transformBounds = useCallback((oldBounds: Bounds, cropToAdjust: Crop) => {
    // Calculate the new width and height by applying the zoom factor
    const width = oldBounds.width * cropToAdjust.zoom
    const height = oldBounds.height * cropToAdjust.zoom

    // Calculate the center of the element before any transformation
    const centerX = oldBounds.left + oldBounds.width / 2
    const centerY = oldBounds.top + oldBounds.height / 2

    // Apply the scaling to the center coordinates and then adjust by the pan
    const scaledCenterX = centerX * cropToAdjust.zoom - cropToAdjust.pan[0]
    const scaledCenterY = centerY * cropToAdjust.zoom - cropToAdjust.pan[1]

    // Calculate the amount of space that should be left on each side of the old bounds to center the zoomed element
    const horizontalPadding = (oldBounds.width - width) / 2
    const verticalPadding = (oldBounds.height - height) / 2

    // Calculate the distance from the scaled center to the new edge of the bounds (after zooming)
    const horizontalShift = scaledCenterX - width / 2
    const verticalShift = scaledCenterY - height / 2

    // Determine the new top-left corner based on the scaled center
    const left = horizontalPadding - horizontalShift
    const top = verticalPadding - verticalShift

    return {
      width: width,
      height: height,
      left: left,
      right: left + width,
      top: top,
      bottom: top + height,
    }
  }, [])

  const enforceCrop = useCallback((cropToAdjust: Crop) => {
    if (viewportRef.current == null || viewerRef.current == null) return cropToAdjust

    const viewportBounds = getBounds(viewportRef.current, viewerRef.current)

    // Get the bounds of the viewport
    const oldBounds: Bounds = {
      ...viewportBounds,
      width: viewportBounds.width,
      height: viewportBounds.height,
      left: viewportBounds.left,
      right: viewportBounds.right,
      top: viewportBounds.top,
      bottom: viewportBounds.bottom,
    }

    // Transform the bounds based on the current crop    
    const newBounds = transformBounds(oldBounds, cropToAdjust)

    // Adjust the crop to fit within the bounds of the viewport
    return adjustCrop(cropToAdjust, oldBounds, newBounds)
  }, [])

  // Get the bounds of an element based on its offset from the parent element (Viewer)
  const getBounds = (element: HTMLDivElement, parentElement: HTMLDivElement) => {
    const parentRect = parentElement.getBoundingClientRect()
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

    if (minimapRef.current == null || viewportRef.current == null) {
      return
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
    let newCrop: Crop = {
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
  const rubberband = useCallback((newCrop: Crop) => {
    const rubberbandedCrop = { pan: { ...newCrop.pan }, zoom: newCrop.zoom }
    const enforcedCrop = enforceCrop({ pan: { ...newCrop.pan }, zoom: newCrop.zoom })

    rubberbandedCrop.pan[0] = Math.max(rubberbandedCrop.pan[0], enforcedCrop.pan[0] - settings.spring.rubberbandDistance)
    rubberbandedCrop.pan[0] = Math.min(rubberbandedCrop.pan[0], enforcedCrop.pan[0] + settings.spring.rubberbandDistance)

    rubberbandedCrop.pan[1] = Math.max(rubberbandedCrop.pan[1], enforcedCrop.pan[1] - settings.spring.rubberbandDistance)
    rubberbandedCrop.pan[1] = Math.min(rubberbandedCrop.pan[1], enforcedCrop.pan[1] + settings.spring.rubberbandDistance)

    return rubberbandedCrop
  }, [settings, enforceCrop])

  const handleZoom = useCallback((
    gestureState: PinchState | WheelState | ClickGestureState,
    contentType: ContentType,
    memo: Crop | undefined
  ): Crop => {
    if (!settings.zoom.enabled) return memo || cropRef.current
    if (gestureState.last) return memo || cropRef.current
    if (!viewportRef.current || !viewerRef.current) return memo || cropRef.current

    memo ??= cropRef.current

    const viewportBounds = getBounds(viewportRef.current, viewerRef.current)

    let deltaZoom = 0
    const origin = [0, 0]

    if (gestureState.type === 'click') {
      // Button click
      const clickState = gestureState as ClickGestureState
      deltaZoom = Number(clickState.zoomChange) * settings.zoom.zoomButtonStep
    } else if (gestureState.type === 'pointermove' && gestureState.pinching) {
      // Touchscreen (mobile) pinch-zoom
      const pinchState = gestureState as PinchState
      deltaZoom = pinchState.delta[0]
      origin[0] = pinchState.origin[0] - viewportBounds.width / 2
      origin[1] = pinchState.origin[1] - viewportBounds.height / 2
    } else if (gestureState.type === 'wheel') {
      const wheelState = gestureState as WheelState
      const pinchState = gestureState as PinchState
      if (wheelState.ctrlKey && wheelState.pinching === true) {
        // Touchpad (laptop) pinch-zoom
        // This is a mess between pinchState and wheelState
        if (pinchState.axis === 'scale') {
          deltaZoom = pinchState.delta[0]
        } else if (wheelState.axis === 'x') {
          // ignore x
        } else if (wheelState.axis === 'y') {
          // ignore y
        }

        origin[0] = wheelState.event.clientX - viewportBounds.width / 2
        origin[1] = wheelState.event.clientY - viewportBounds.height / 2
      } else if (wheelState.axis === 'y' && (!('pinching' in wheelState) || wheelState.pinching === false)) {
        // Mouse wheel
        // The 'pinching' state must be either absent or set to false (which happens after a pinch on a touch laptop, for example)
        deltaZoom = -wheelState.delta[1] / mouseWheelUnits * settings.zoom.mouseWheelStep
        origin[0] = wheelState.event.clientX - viewportBounds.width / 2
        origin[1] = wheelState.event.clientY - viewportBounds.height / 2
      }
    }

    if (contentType == ContentType.Minimap) {
      origin[0] = 0
      origin[1] = 0
    }

    // Find new zoom and clamp
    const newZoom = Math.min(Math.max((memo.zoom + deltaZoom), settings.zoom.min), settings.zoom.max)

    // console.log(`type: ${gestureState.type}`, '\ndelta:', gestureState.delta, '\ndeltaZoom:', deltaZoom, '\nnewZoom:', newZoom, gestureState)

    // Correct the pan around the gesture's transform origin
    // Calculate the pan correction needed to keep the point under the cursor in the same place
    // For example, during a wheel gesture, the zoom uses the pointer position as the origin
    const zoomScaleRatio = newZoom / cropRef.current.zoom
    const newPan: [number, number] = [
      origin[0] + (cropRef.current.pan[0] - origin[0]) * zoomScaleRatio,
      origin[1] + (cropRef.current.pan[1] - origin[1]) * zoomScaleRatio,
    ]

    let newCrop: Crop = {
      ...cropRef.current,
      zoom: newZoom,
      pan: newPan,
    }
    newCrop = enforceCrop(newCrop)
    setCrop(newCrop)

    return newCrop
  }, [settings, setCrop, enforceCrop])

  const handleDrag = useCallback((
    gestureState: DragState,
    contentType: ContentType,
    memo: Crop | undefined
  ): Crop => {
    if (!settings.pan.enabled) return memo || cropRef.current
    if (gestureState.last) return memo || cropRef.current

    memo ??= cropRef.current

    const deltaScale = (contentType == ContentType.Viewport) ? 1 : -cropRef.current.zoom / minimapSize.scale

    const newPan: [number, number] = [
      memo.pan[0] + gestureState.delta[0] * deltaScale,
      memo.pan[1] + gestureState.delta[1] * deltaScale,
    ]

    let newCrop: Crop = {
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
    let newCrop: Crop = {
      ...cropRef.current,
    }
    newCrop = enforceCrop(newCrop)
    setCrop(newCrop)
  }, [setCrop, enforceCrop])

  // Viewer controls
  const zoomOut = useCallback(() => {
    const event: ClickGestureState = {
      type: 'click',
      zoomChange: -1,
      delta: [0, 0],
      last: false
    }
    handleZoom(event, ContentType.Minimap, cropRef.current)
  }, [handleZoom])

  const zoomIn = useCallback(() => {
    const event: ClickGestureState = {
      type: 'click',
      zoomChange: 1,
      delta: [0, 0],
      last: false
    }
    handleZoom(event, ContentType.Minimap, cropRef.current)
  }, [handleZoom])

  const resetView = useCallback(() => {
    const newCrop: Crop = {
      pan: [0, 0],
      zoom: settings.zoom.default,
    }
    setCrop(newCrop)
  }, [settings, setCrop])

  const centerView = useCallback(() => {
    const newCrop: Crop = {
      pan: [0, 0],
      zoom: cropRef.current.zoom,
    }
    setCrop(newCrop)
  }, [setCrop])

  const toggleMinimap = useCallback(() => {
    setMinimapVisible((v: boolean) => !v)
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
    const handleKeyDown = (event: KeyboardEvent) => {
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
      from: (): Vector2 => cropRef.current.pan,
      preventScroll: false, // Ignores vertical scrolling on touch devices
    },
    pinch: {
      enabled: settings.zoom.enabled,
      preventDefault: true,
      pinchOnWheel: true,
      angleBounds: { min: 0, max: 0, },
      from: (): Vector2 => [cropRef.current.zoom * pinchSensitivity, 0],
    },
    wheel: {
      enabled: settings.zoom.enabled,
      preventDefault: true,
      from: (): Vector2 => [0, -cropRef.current.zoom * mouseWheelUnits],
    },
    eventOptions: {
      passive: false,
    },
  }

  // Viewport gestures
  useGesture({
    onDrag: (state) => handleDrag(state, ContentType.Viewport, state.memo),
    onDragEnd: onGestureEnd,
    onPinch: (state) => handleZoom(state, ContentType.Viewport, state.memo),
    onPinchEnd: onGestureEnd,
    onWheel: (state) => handleZoom(state, ContentType.Viewport, state.memo),
    onWheelEnd: onGestureEnd,
  },
    {
      ...useGestureConfiguration,
      target: viewportRef,
    })

  // Minimap gestures
  useGesture({
    onDrag: (state) => handleDrag(state, ContentType.Minimap, state.memo),
    onDragEnd: onGestureEnd,
    onPinch: (state) => handleZoom(state, ContentType.Minimap, state.memo),
    onPinchEnd: onGestureEnd,
    onWheel: (state) => handleZoom(state, ContentType.Minimap, state.memo),
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
        <AnimatedDivViewportContent className={styles['viewer-viewport-content']} ref={viewportContentRef} style={viewportContentStyle}>
          {viewportContent}
        </AnimatedDivViewportContent>
      </div>
    </div>
  )
}

export { Viewer }
