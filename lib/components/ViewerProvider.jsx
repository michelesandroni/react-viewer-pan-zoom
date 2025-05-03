import { useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'

import { defaultSettings, defaultCrop } from './ViewerDefaults'
import { ViewerUtils } from './ViewerUtils'
import { ViewerContext } from './ViewerContext'

const ViewerProvider = ({ children, settings = {} }) => {
  const viewerSettings = useMemo(() => {
    // console.log('Merging settings', settings)
    return ViewerUtils.mergeDeep({ ...defaultSettings }, settings)
  }, [settings])

  const [crop, setCrop] = useState(defaultCrop)

  const [zoomOut, setZoomOut] = useState(null)
  const [zoomIn, setZoomIn] = useState(null)
  const [resetView, setResetView] = useState(null)
  const [centerView, setCenterView] = useState(null)
  const [toggleMinimap, setToggleMinimap] = useState(null)

  // Update the crop state based on the settings' default zoom value
  useEffect(() => {
    // console.log('Updating crop state based on zoom default')
    setCrop({ pan: defaultCrop.pan, zoom: viewerSettings.zoom.default })
  }, [viewerSettings.zoom.default])

  return (
    <ViewerContext.Provider value={{
      crop, setCrop, settings: viewerSettings,
      zoomOut, setZoomOut, zoomIn, setZoomIn, resetView, setResetView, centerView, setCenterView, toggleMinimap, setToggleMinimap,
    }}>
      {children}
    </ViewerContext.Provider>
  )
}

ViewerProvider.propTypes = {
  children: PropTypes.node,
  settings: PropTypes.object,
}

export { ViewerProvider }
