import { useState, useEffect, useMemo } from 'react'
import merge from 'lodash/merge'

import { ViewerProviderProps } from './types'
import { defaultSettings, defaultCrop } from './ViewerDefaults'
import { ViewerContext } from './ViewerContext'

const ViewerProvider = ({
  children,
  settings = {}
}: ViewerProviderProps) => {
  const viewerSettings = useMemo(() => {
    // console.log('Merging settings', settings)
    return merge({ ...defaultSettings }, settings)
  }, [settings])

  const [crop, setCrop] = useState(defaultCrop)

  const [zoomOut, setZoomOut] = useState<() => void>(() => { })
  const [zoomIn, setZoomIn] = useState<() => void>(() => { })
  const [resetView, setResetView] = useState<() => void>(() => { })
  const [centerView, setCenterView] = useState<() => void>(() => { })
  const [toggleMinimap, setToggleMinimap] = useState<() => void>(() => { })

  // Update the crop state based on the settings' default zoom value
  useEffect(() => {
    // console.log('Updating crop state based on zoom default')
    setCrop({ pan: defaultCrop.pan, zoom: viewerSettings.zoom.default })
  }, [viewerSettings.zoom.default])

  return (
    <ViewerContext.Provider value={{
      crop, setCrop,
      settings: viewerSettings,
      zoomOut, setZoomOut, zoomIn, setZoomIn, resetView, setResetView, centerView, setCenterView, toggleMinimap, setToggleMinimap,
    }}>
      {children}
    </ViewerContext.Provider>
  )
}

export { ViewerProvider }
