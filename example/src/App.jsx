import React, { useState, useContext, useEffect, useRef } from 'react'
import SVG from 'react-inlinesvg'

import { Viewer, ViewerContext, ViewerProvider } from 'react-viewer-pan-zoom'

const App = () => {

  // Example Layout #1: Full-window viewer
  const layoutStyle = {
    display: 'flex',
    flexDirection: 'column',
    userSelect: 'none',
    height: '100vh',
    // ⚠️ IMPORTANT: make sure that the main CSS file contains the following:
    // html, html body, #root { height: 100%; margin: 0; padding: 0; }
  }

  // // Example Layout #2: Fixed-size viewer
  // const layoutStyle = {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   userSelect: 'none',
  //   width: '800px',
  //   height: '600px'
  // }

  const contentStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'contain', // 'contain', 'cover', 'fill', 'scale-down', ...
    objectPosition: 'center', // 'center', 'left', 'right', ...
    border: '1px solid #ccc',
  }

  const contents = [
    <img key="1" style={contentStyle} draggable="false" src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Blank_world_map_Robinson_projection.svg" />,
    <SVG key="2" style={contentStyle} draggable="false" src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Knight%27s_tour_animation.svg"
      uniquifyIDs={true} />,
    <ExampleInlineSVG key="3" style={contentStyle} src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Trajans-Column-lower-animated.svg" />,
    <img key="4" style={contentStyle} draggable="false" src="https://picsum.photos/id/1048/1200/900" />,
    <img key="5" style={contentStyle} draggable="false" src="https://picsum.photos/id/1075/900/1200" />,
    <img key="6" style={contentStyle} draggable="false" src="https://picsum.photos/id/849/1200/1200" />,
    <img key="7" style={contentStyle} draggable="false" src="https://picsum.photos/id/431/1280/720" />,
    <img key="8" style={contentStyle} draggable="false" src="https://picsum.photos/id/1025/1200/1500" />,
    <img key="9" style={contentStyle} draggable="false" src="https://picsum.photos/id/744/2000/1000" />,
    <img key="10" style={contentStyle} draggable="false" src="https://picsum.photos/id/454/1200/800" />,
    <ExampleCanvas key="11" style={contentStyle} draggable="false" />,
    <ExampleHtmlElement key="12" style={contentStyle} draggable="false">
      <div style={{ padding: '1rem', border: '4px solid red', }}>
        <h1>Lorem ipsum</h1>
        <ul>
          {Array.from({ length: 3 }, (_, i) => {
            return <li key={i}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </li>
          })}
        </ul>
      </div>
    </ExampleHtmlElement>,
    // <video key="13" style={contentStyle} draggable="false" src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" autoPlay loop muted/>,
  ]

  const [selected, setSelected] = useState(0)

  const viewerSettings = {
    // pan: { enabled: true },
    // zoom: { enabled: true, default: 1, min: 1, max: 4, mouseWheelStep: 0.5, zoomButtonStep: 0.5, },
    // resetView: { enabled: true, keyboardShortcut: 'r', },
    // centerView: { enabled: false, keyboardShortcut: 'c', },
    // minimap: { enabled: true, width: '160px', keyboardShortcut: 'm', outlineStyle: '1px solid #ccc', viewportAreaOutlineStyle: '2px solid #333' },
    // spring: { enabled: true, rubberband: true, rubberbandDistance: 100, transition: 'transform 0.1s ease-out', },
    // guides: { enabled: false, },
    // fillHeight: true,
  }

  return <div style={layoutStyle}>
    <h1>react-viewer-pan-zoom | example</h1>
    <ViewerProvider settings={viewerSettings} >
      <Viewer viewportContent={contents[selected]} minimapContent={contents[selected]} />
      <nav>
        <Toolbar contents={contents} selected={selected} setSelected={setSelected} />
      </nav>
    </ViewerProvider>
  </div>
}

const Toolbar = ({ contents, selected, setSelected }) => {
  const { settings, zoomOut, zoomIn, resetView, centerView, toggleMinimap, crop } = useContext(ViewerContext)

  const prev = () => {
    resetView()
    setSelected(c => (c - 1 + contents.length) % contents.length)
  }

  const next = () => {
    resetView()
    setSelected(c => (c + 1) % contents.length)
  }

  const getComponentType = () => {
    if (React.isValidElement(contents[selected])) {
      if (typeof contents[selected].type === 'string') {
        return `<${contents[selected].type}>` // Built-in HTML elements (like 'img', 'div', etc.)
      } else if (typeof contents[selected].type === 'function') {
        return `<${contents[selected].type.displayName || 'Component'}>` // Components: default to 'Component' if no displayName
      }
    }
  }

  const getSrc = () => {
    if (contents[selected].props.src) {
      const src = contents[selected].props.src.replace('https://', '')
      return src.startsWith('picsum.photos') ? src : src.split('/').pop()
    }
    return ''
  }

  return (
    <>
      <span>
        <button onClick={() => prev()}>Prev</button>
        <h3 style={{ color: '#367D5D', display: 'inline', fontFamily: 'monospace' }}>{selected + 1} / {contents.length}</h3>
        <button onClick={() => next()}>Next</button>
        <h3 style={{ fontFamily: 'monospace' }}><span style={{ color: '#367D5D', }}>{getComponentType()}</span> {getSrc()}</h3>
      </span>
      <span>
        {settings.zoom.enabled && (
          <>
            <button onClick={() => zoomOut()}>-</button>
            {<strong>{(crop.zoom * 100).toFixed(0)}%</strong>}
            <button onClick={() => zoomIn()}>+</button>
            {(settings.resetView.enabled) && <button onClick={() => resetView()}>Reset</button>}
            {(settings.centerView.enabled) && <button onClick={() => centerView()}>Center</button>}
            {(settings.minimap.enabled) && <button onClick={() => toggleMinimap()}>Minimap</button>}
          </>
        )}
      </span>
    </>
  )
}

const ExampleHtmlElement = ({ children, style }) => {
  const [scale, setScale] = useState(1)
  const [translate, setTranslate] = useState([0, 0])
  const containerRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const fit = () => {
      if (!contentRef.current) return

      const contentWidth = contentRef.current.offsetWidth
      const contentHeight = contentRef.current.offsetHeight

      const parent = containerRef.current.parentElement
      const parentWidth = parent.offsetWidth
      const parentHeight = parent.offsetHeight

      const scaleX = parentWidth / contentWidth
      const scaleY = parentHeight / contentHeight

      const finalScale = Math.min(scaleX, scaleY)
      setScale(finalScale)

      const offsetX = (parentWidth - contentWidth * finalScale) / 2
      const offsetY = (parentHeight - contentHeight * finalScale) / 2
      setTranslate([offsetX, offsetY])
    }

    fit()

    window.addEventListener('resize', fit)

    return () => {
      window.removeEventListener('resize', fit)
    }
  }, [])

  return (
    <div ref={containerRef} style={{
      ...style,
      transformOrigin: 'top left',
    }}>
      <div ref={contentRef} style={{
        display: 'inline-block',
        transformOrigin: 'top left',
        transform: `translate(${translate[0]}px, ${translate[1]}px) scale(${scale})`,
      }}>
        {children}
      </div>
    </div>
  )
}

// ⚠️ WARNING - For demonstration purposes only.
// Do not use this component in production.
// This is a proof of concept SVG importer to inline animated, interactive SVGs.
// Use 'react-inlinesvg' instead.
const ExampleInlineSVG = ({ src, style }) => {
  const [svgContent, setSvgContent] = useState(null)
  const [svgProps, setSvgProps] = useState({})

  useEffect(() => {
    const fetchSVG = async () => {
      try {
        const response = await fetch(src)
        if (!response.ok) {
          throw new Error(`Failed to fetch SVG: ${response.status} ${response.statusText}`)
        }
        const responseText = await response.text()
        const parser = new DOMParser()
        const svgDocument = parser.parseFromString(responseText, 'image/svg+xml').documentElement

        // Collect SVG properties
        const props = {}
        Object.values(svgDocument.attributes).forEach((attribute) => {
          if (!attribute.name.startsWith('xmlns:')) {
            props[attribute.name] = attribute.value
          }
        })

        // Generate a unique string
        const uniqueString = `${Math.random().toString(36).substring(2, 9)}`

        // Uniquify IDs and references
        const uniquifyIDs = (node) => {
          if (node.hasAttribute('id')) {
            const oldID = node.getAttribute('id')
            const newID = `${oldID}_${uniqueString}`
            node.setAttribute('id', newID)
            // Update references to the old ID
            svgDocument.querySelectorAll('*').forEach((refNode) => {
              ['href', 'begin', 'style', 'xlink:href', 'clip-path', 'fill', 'filter', 'mask', 'marker-start', 'marker-mid', 'marker-end'].forEach((attr) => {
                if (refNode.hasAttribute(attr)) {
                  let attrValue = refNode.getAttribute(attr)
                  if (attrValue.includes(oldID)) {
                    // Replace only whole word matches of oldID to prevent unintended replacements
                    attrValue = attrValue.replace(new RegExp(`\\b${oldID}\\b`, 'g'), newID)
                    refNode.setAttribute(attr, attrValue)
                  }
                }
              })
            })
          }

          Object.values(node.children).forEach((childNode) => {
            uniquifyIDs(childNode)
          })
        }

        uniquifyIDs(svgDocument)

        setSvgProps(props)
        // setSvgContent(svgDocument.innerHTML)
        setSvgContent(new XMLSerializer().serializeToString(svgDocument))
      } catch (error) {
        console.error('Error fetching SVG:', error)
      }
    }
    fetchSVG()
  }, [src])

  return svgContent ? (
    <div style={{ ...style, pointerEvents: 'none' }}>
      <svg {...svgProps} style={{ ...style, pointerEvents: 'auto' }} dangerouslySetInnerHTML={{ __html: svgContent }} />
    </div>
  ) : null
}

const ExampleCanvas = ({ style }) => {
  const [canvasInitialized, setCanvasInitialized] = useState(false)
  const [width, height] = [1500, 1500]
  const s = 200
  const c = 255

  const handleCanvasDraw = (canvas) => {
    if (canvas && !canvasInitialized) {
      const ctx = canvas.getContext('2d')
      Array.from({ length: 200 }, (
        // _, i
      ) => {
        ctx.beginPath()
        ctx.arc(Math.random() * width, Math.random() * height, Math.random() * s, 0, 2 * Math.PI)
        ctx.fillStyle = 'rgba(' + Math.floor(Math.random() * c) + ', ' + Math.floor(Math.random() * c) + ', ' + Math.floor(Math.random() * c) + ', 1)'
        ctx.fill()
      })
      setCanvasInitialized(true)
    }
  }

  return (<canvas width={width} height={height} style={style} ref={handleCanvasDraw}></canvas>)
}

ExampleHtmlElement.displayName = 'ExampleHtmlElement'
ExampleInlineSVG.displayName = 'ExampleInlineSVG'
ExampleCanvas.displayName = 'ExampleCanvas'
SVG.displayName = 'react-inlinesvg'

export default App
