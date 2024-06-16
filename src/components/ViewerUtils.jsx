
class ViewerUtils {
  static transformBounds(bounds, { pan, zoom }) {
    // Calculate the new width and height by applying the zoom factor
    const width = bounds.width * zoom
    const height = bounds.height * zoom

    // Calculate the center of the element before any transformation
    const centerX = bounds.left + bounds.width / 2
    const centerY = bounds.top + bounds.height / 2

    // Apply the scaling to the center coordinates and then adjust by the pan
    const scaledCenterX = centerX * zoom - pan[0]
    const scaledCenterY = centerY * zoom - pan[1]

    // Calculate the amount of space that should be left on each side of the bounds to center the zoomed element
    const horizontalPadding = (bounds.width - width) / 2
    const verticalPadding = (bounds.height - height) / 2

    // Calculate the distance from the scaled center to the new edge of the bounds (after zooming)
    const horizontalShift = scaledCenterX - width / 2
    const verticalShift = scaledCenterY - height / 2

    // Determine the new top-left corner based on the scaled center
    const left = horizontalPadding - horizontalShift
    const top = verticalPadding - verticalShift

    return {
      width: width,
      height: height,
      top: top,
      left: left,
      right: left + width,
      bottom: top + height,
      x: left,
      y: top
    }
  }

  static getEditableRect(rect) {
    return {
      ...rect,
      bottom: rect.bottom,
      height: rect.height,
      left: rect.left,
      right: rect.right,
      top: rect.top,
      width: rect.width,
      x: rect.x,
      y: rect.y,
    }
  }

  static mergeDeep(target, source) {
    const isObject = (obj) => obj && typeof obj === 'object'

    Object.keys(source).forEach(key => {
      const targetValue = target[key]
      const sourceValue = source[key]

      if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
        target[key] = sourceValue // If arrays, replace entirely
      } else if (isObject(targetValue) && isObject(sourceValue)) {
        target[key] = ViewerUtils.mergeDeep({ ...targetValue }, sourceValue) // Deep merge objects
      } else {
        target[key] = sourceValue // Replace value
      }
    })

    return target
  }
}

export { ViewerUtils }
