import { ReactNode } from 'react';

interface QRImageProps {
    text?: string;
    /**
     * Error correction level
     */
    ecLevel?: string;
    /**
     * Size of one module in pixels
     */
    size?: number;
    /**
     * White space around QR image in modules
     */
    margin?: number;
    transparent?: boolean;
    /**
     * Color for code background
     */
    background?: string;
    /**
     * Color for code blocks
     */
    color?: string;
    children?: ReactNode;
}
declare const ReactQRImage: ({ text, ecLevel, size, margin, transparent, color, background, children, ...props }: QRImageProps) => JSX.Element;

export { QRImageProps, ReactQRImage as default };
