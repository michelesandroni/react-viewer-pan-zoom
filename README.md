# react-viewer-pan-zoom

> Pan and zoom elements in React using gestures, mouse, touchpad, keyboard shortcuts and UI buttons.

[![NPM](https://img.shields.io/npm/v/react-viewer-pan-zoom.svg)](https://www.npmjs.com/package/react-viewer-pan-zoom)

## Features

* Pan and zoom using gestures, mouse, touchpad, keyboard shortcuts and UI buttons.
* Designed to pan and zoom SVG elements using `react-inlinesvg`.
* Supports `<img>`, `<svg>`, `<canvas>` and other html elements.
* Features minimap, spring animation, rubberband, etc.
* Built on top of [use-gesture](https://github.com/pmndrs/use-gesture) and [react-spring](https://www.react-spring.dev).

## Install

```bash
npm install react-viewer-pan-zoom
```

## Example

[Example](https://michelesandroni.github.io/react-viewer-pan-zoom)

The size of the viewer container (`.app` in the example) must be specified via CSS.

For a full-window viewer assign a value of `100%` to the `body` height.

Two variants (full-window viewer and sized viewer) are shown in `example`/`src`/`App.css`.

## Settings

Default settings:

```jsx
{
  pan: { enabled: true },
  zoom: { enabled: true, default: 1, min: 1, max: 4, mouseWheelStep: 0.5, zoomButtonStep: 0.5, },
  resetView: { enabled: true, keyboardShortcut: 'r', },
  centerView: { enabled: false, keyboardShortcut: 'c', },
  minimap: { enabled: true, width: '160px', keyboardShortcut: 'm', outlineStyle: '1px solid #ccc', viewportAreaOutlineStyle: '2px solid #333', },
  spring: { enabled: true, rubberband: true, rubberbandDistance: 100, },
  guides: { enabled: false, },
}
```

Assign a value of `false` to any `keyboardShortcut` to disable it.

## License

MIT © [michelesandroni](https://github.com/michelesandroni)
