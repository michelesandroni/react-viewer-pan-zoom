import {
  Settings,
  Crop
} from "./types"

export const defaultSettings: Settings = {
  pan: { enabled: true, },
  zoom: { enabled: true, default: 1, min: 1, max: 4, mouseWheelStep: 0.5, zoomButtonStep: 0.5, },
  resetView: { enabled: true, keyboardShortcut: 'r', },
  centerView: { enabled: false, keyboardShortcut: 'c', },
  minimap: { enabled: true, width: '160px', keyboardShortcut: 'm', outlineStyle: '1px solid #ccc', viewportAreaOutlineStyle: '2px solid #333', },
  spring: { enabled: true, rubberband: true, rubberbandDistance: 100, transition: 'transform 0.1s ease-out', },
  guides: { enabled: false, },
  fillHeight: true,
}

export const defaultCrop: Crop = {
  pan: [0, 0],
  zoom: 1,
}
