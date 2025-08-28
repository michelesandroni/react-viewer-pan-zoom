import { memo, useContext } from 'react'
import { ViewerContext } from './ViewerContext'
import { ViewerContextType } from './types'
import styles from './Viewer.module.css'

interface ViewportContentProps {
  viewportContent: React.ReactNode
  viewportContentRef: React.RefObject<HTMLDivElement | null>
  viewportRef: React.RefObject<HTMLDivElement | null>
}

const ViewportContent = memo(({ viewportContent, viewportContentRef, viewportRef }: ViewportContentProps) => {
  const { crop, settings } = useContext<ViewerContextType>(ViewerContext)

  // Don't memoize this style - CSS transitions need fresh object references
  const viewportContentStyle = {
    transform: `scale(${crop.zoom}) translate(${crop.pan[0] / crop.zoom}px, ${crop.pan[1] / crop.zoom}px)`,
    transition: (settings.spring.enabled === true) ? settings.spring.transition : 'none',
    // Firefox-specific optimizations https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/CSS
    willChange: 'transform',
  }

  return (
    <div className={styles['viewer-viewport']} ref={viewportRef}>
      {settings.guides.enabled &&
        <div className={styles['viewer-viewport-center-guide']}></div>
      }
      <div className={styles['viewer-viewport-content']} ref={viewportContentRef} style={viewportContentStyle}>
        {viewportContent}
      </div>
    </div>
  )
})

ViewportContent.displayName = 'ViewportContent'

export { ViewportContent }
