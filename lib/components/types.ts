import { ReactNode } from 'react'

import {
  FullGestureState,
  WebKitGestureEvent
} from '@use-gesture/core/types'

// Use gesture state type aliases - now correctly based on the library definitions
export type DragState = Omit<FullGestureState<"drag">, "event"> & {
  event: PointerEvent | MouseEvent | TouchEvent | KeyboardEvent
}
export type PinchState = Omit<FullGestureState<"pinch">, "event"> & {
  event: PointerEvent | TouchEvent | WheelEvent | WebKitGestureEvent
}
export type WheelState = Omit<FullGestureState<"wheel">, "event"> & {
  event: WheelEvent
}

// Click gesture state for the zoom buttons
export interface ClickGestureState {
  type: 'click'
  zoomChange: number
  delta: [number, number]
  last: boolean
  memo?: Crop
}


// Click gesture state for the zoom buttons
export interface ClickGestureState {
  type: 'click'
  zoomChange: number
  delta: [number, number]
  last: boolean
  memo?: Crop
}

// Context
export interface ViewerContextType {
  crop: Crop
  setCrop: React.Dispatch<React.SetStateAction<Crop>>

  settings: Settings

  zoomOut: () => void
  setZoomOut: React.Dispatch<React.SetStateAction<() => void>>

  zoomIn: () => void
  setZoomIn: React.Dispatch<React.SetStateAction<() => void>>

  resetView: () => void
  setResetView: React.Dispatch<React.SetStateAction<() => void>>

  centerView: () => void
  setCenterView: React.Dispatch<React.SetStateAction<() => void>>

  toggleMinimap: () => void
  setToggleMinimap: React.Dispatch<React.SetStateAction<() => void>>
}

// Minimap or Viewport
export enum ContentType {
  Minimap = 'minimap',
  Viewport = 'viewport'
}

// Viewer Props
export interface ViewerProps {
  className?: string
  viewportContent: ReactNode
  minimapContent: ReactNode
}

// Viewer Provider Props
export interface ViewerProviderProps {
  children: ReactNode
  settings: SettingsPartial
}

// Crop
export interface Crop {
  pan: [number, number]
  zoom: number
}

// Bounds
export interface Bounds {
  width: number
  height: number
  left: number
  right: number
  top: number
  bottom: number
}

// Partial<> makes everything optional
export type SettingsPartial = Partial<Settings>

// Settings
export interface Settings {
  pan: {
    enabled: boolean
  }
  zoom: {
    enabled: boolean
    default: number
    min: number
    max: number
    mouseWheelStep: number
    zoomButtonStep: number
  }
  resetView: {
    enabled: boolean
    keyboardShortcut: string
  }
  centerView: {
    enabled: boolean
    keyboardShortcut: string
  }
  minimap: {
    enabled: boolean
    width: string
    keyboardShortcut: string
    outlineStyle: string
    viewportAreaOutlineStyle: string
  }
  spring: {
    enabled: boolean
    rubberband: boolean
    rubberbandDistance: number
    transition: string
  }
  guides: {
    enabled: boolean
  }
  fillHeight: boolean
}
