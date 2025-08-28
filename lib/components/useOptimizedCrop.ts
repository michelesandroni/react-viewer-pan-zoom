import { useRef, useCallback, useContext } from 'react'
import { ViewerContext } from './ViewerContext'
import { ViewerContextType, Crop } from './types'

/**
 * Custom hook that provides optimized crop state management
 * Uses refs to avoid re-renders during frequent pan/zoom operations
 * Only triggers re-renders when necessary (gesture end, programmatic changes)
 */
export const useOptimizedCrop = () => {
  const { crop, setCrop } = useContext<ViewerContextType>(ViewerContext)
  const cropRef = useRef(crop)
  const animationFrameRef = useRef<number | null>(null)

  // Update ref when context crop changes (programmatic updates)
  if (crop !== cropRef.current) {
    cropRef.current = crop
  }

  // Optimized crop update that batches updates using requestAnimationFrame
  const setOptimizedCrop = useCallback((newCrop: Crop, immediate = false) => {
    cropRef.current = newCrop

    if (immediate) {
      // Immediate update for gesture end or programmatic changes
      setCrop(newCrop)
    } else {
      // Batched update for smooth gestures
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        setCrop(cropRef.current)
      })
    }
  }, [setCrop])

  return {
    crop: cropRef.current,
    setCrop: setOptimizedCrop,
    cropRef
  }
}
