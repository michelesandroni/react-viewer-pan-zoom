import { Crop } from './types';
/**
 * Custom hook that provides optimized crop state management
 * Uses refs to avoid re-renders during frequent pan/zoom operations
 * Only triggers re-renders when necessary (gesture end, programmatic changes)
 */
export declare const useOptimizedCrop: () => {
    crop: Crop;
    setCrop: (newCrop: Crop, immediate?: boolean) => void;
    cropRef: import('react').RefObject<Crop>;
};
//# sourceMappingURL=useOptimizedCrop.d.ts.map