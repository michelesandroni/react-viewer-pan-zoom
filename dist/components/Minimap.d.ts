interface MinimapProps {
    minimapContent: React.ReactNode;
    minimapRef: React.RefObject<HTMLDivElement | null>;
    minimapVisible: boolean;
    minimapSize: {
        width: number | string;
        height: number;
        scale: number;
    };
    viewportRef: React.RefObject<HTMLDivElement | null>;
}
declare const Minimap: import('react').MemoExoticComponent<({ minimapContent, minimapRef, minimapVisible, minimapSize, viewportRef }: MinimapProps) => import("react/jsx-runtime").JSX.Element>;
export { Minimap };
//# sourceMappingURL=Minimap.d.ts.map