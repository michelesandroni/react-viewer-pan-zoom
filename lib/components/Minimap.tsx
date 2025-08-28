import { memo, useMemo, useContext } from 'react'
import { ViewerContext } from './ViewerContext'
import { ViewerContextType } from './types'
import styles from './Viewer.module.css'

interface MinimapProps {
  minimapContent: React.ReactNode
  minimapRef: React.RefObject<HTMLDivElement | null>
  minimapVisible: boolean
  minimapSize: { width: number | string; height: number; scale: number }
  viewportRef: React.RefObject<HTMLDivElement | null>
}

const Minimap = memo(({
  minimapContent,
  minimapRef,
  minimapVisible,
  minimapSize,
  viewportRef
}: MinimapProps) => {
  const { crop, settings } = useContext<ViewerContextType>(ViewerContext)

  // Keep minimap style memoized (no transitions here)
  const minimapStyle = useMemo(() => ({
    width: minimapSize.width,
    height: minimapSize.height,
    display: (minimapVisible && minimapContent) ? 'block' : 'none',
    outline: settings.minimap.outlineStyle,
  }), [minimapSize.width, minimapSize.height, minimapVisible, minimapContent, settings.minimap.outlineStyle])

  // Don't memoize this - minimap viewport area needs fresh object for smooth updates
  const minimapViewportAreaStyle = (() => {
    if (!viewportRef.current) return {}

    const scale = minimapSize.scale
    const minimapZoom = Math.max(crop.zoom, 1)
    return {
      transform: `scale(${1 / minimapZoom}) translate(${-crop.pan[0] * scale}px, ${-crop.pan[1] * scale}px)`,
      width: `${viewportRef.current.offsetWidth * scale}px`,
      height: `${viewportRef.current.offsetHeight * scale}px`,
      outline: settings.minimap.viewportAreaOutlineStyle,
      // Firefox-specific optimizations https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/CSS
      willChange: 'transform, width, height'
    }
  })()

  // Keep content style memoized (static scaling)
  const minimapContentStyle = useMemo(() => (!viewportRef.current) ? {} : {
    transformOrigin: '0% 0%',
    transform: `scale(${minimapSize.scale})`,
    width: `${viewportRef.current.offsetWidth}px`,
    height: `${viewportRef.current.offsetHeight}px`,
  }, [minimapSize.scale])

  return (
    <div className={styles['viewer-minimap']} ref={minimapRef} style={minimapStyle}>
      <div className={styles['viewer-minimap-content']} style={minimapContentStyle}>
        {minimapContent}
      </div>
      <div className={styles['viewer-minimap-viewport-area']} style={minimapViewportAreaStyle}></div>
    </div>
  )
})

Minimap.displayName = 'Minimap'

export { Minimap }
