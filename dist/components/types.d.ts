import { ReactNode } from 'react';
import { FullGestureState, WebKitGestureEvent } from '@use-gesture/core/types';
export type DragState = Omit<FullGestureState<"drag">, "event"> & {
    event: PointerEvent | MouseEvent | TouchEvent | KeyboardEvent;
};
export type PinchState = Omit<FullGestureState<"pinch">, "event"> & {
    event: PointerEvent | TouchEvent | WheelEvent | WebKitGestureEvent;
};
export type WheelState = Omit<FullGestureState<"wheel">, "event"> & {
    event: WheelEvent;
};
export interface ClickGestureState {
    type: 'click';
    zoomChange: number;
    delta: [number, number];
    last: boolean;
    memo?: Crop;
}
export interface ClickGestureState {
    type: 'click';
    zoomChange: number;
    delta: [number, number];
    last: boolean;
    memo?: Crop;
}
export interface ViewerContextType {
    crop: Crop;
    setCrop: React.Dispatch<React.SetStateAction<Crop>>;
    settings: Settings;
    zoomOut: () => void;
    setZoomOut: React.Dispatch<React.SetStateAction<() => void>>;
    zoomIn: () => void;
    setZoomIn: React.Dispatch<React.SetStateAction<() => void>>;
    resetView: () => void;
    setResetView: React.Dispatch<React.SetStateAction<() => void>>;
    centerView: () => void;
    setCenterView: React.Dispatch<React.SetStateAction<() => void>>;
    toggleMinimap: () => void;
    setToggleMinimap: React.Dispatch<React.SetStateAction<() => void>>;
}
export declare enum ContentType {
    Minimap = "minimap",
    Viewport = "viewport"
}
export interface ViewerProps {
    className: string;
    viewportContent: ReactNode;
    minimapContent: ReactNode;
}
export interface ViewerProviderProps {
    children: ReactNode;
    settings: SettingsPartial;
}
export interface Crop {
    pan: [number, number];
    zoom: number;
}
export interface Bounds {
    width: number;
    height: number;
    left: number;
    right: number;
    top: number;
    bottom: number;
}
export type SettingsPartial = Partial<Settings>;
export interface Settings {
    pan: {
        enabled: boolean;
    };
    zoom: {
        enabled: boolean;
        default: number;
        min: number;
        max: number;
        mouseWheelStep: number;
        zoomButtonStep: number;
    };
    resetView: {
        enabled: boolean;
        keyboardShortcut: string;
    };
    centerView: {
        enabled: boolean;
        keyboardShortcut: string;
    };
    minimap: {
        enabled: boolean;
        width: string;
        keyboardShortcut: string;
        outlineStyle: string;
        viewportAreaOutlineStyle: string;
    };
    spring: {
        enabled: boolean;
        rubberband: boolean;
        rubberbandDistance: number;
    };
    guides: {
        enabled: boolean;
    };
    fillHeight: boolean;
}
//# sourceMappingURL=types.d.ts.map