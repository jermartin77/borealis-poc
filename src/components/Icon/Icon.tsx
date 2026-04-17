import type { SVGAttributes } from 'react';
import styles from './Icon.module.css';

export type IconName =
  | 'Account' | 'Bag' | 'Pin' | 'Envelope' | 'Zoom In' | 'Zoom Out'
  | 'Calendar' | 'Settings' | 'Camera' | 'Gear' | 'Share' | 'Tag'
  | 'Trash' | 'Star Full' | 'Star Half' | 'Star Empty' | 'Download'
  | 'Filter' | 'Placeholder' | 'Lightning' | 'Arrow Down' | 'Arrow Left'
  | 'Arrow Up' | 'Arrow Right' | 'Plus' | 'Minus' | 'Caret Down'
  | 'Caret Left' | 'Caret Up' | 'Caret Right' | 'Check' | 'X' | 'Menu'
  | 'Search' | 'TikTok' | 'Pinterest' | 'Youtube' | 'Google'
  | 'X Twitter' | 'Facebook' | 'LinkedIn' | 'Instagram';

export interface IconProps extends Omit<SVGAttributes<SVGSVGElement>, 'name'> {
  name: IconName;
  size?: number;
  'aria-label'?: string;
}

// Icons that render as solid fills (social logos + filled shapes)
const FILL_ICONS: Set<IconName> = new Set([
  'TikTok', 'Pinterest', 'Youtube', 'Google', 'X Twitter',
  'Facebook', 'LinkedIn', 'Instagram',
]);

// SVG path content for each icon (24×24 viewBox)
// Stroke icons: paths/circles render with stroke="currentColor"
// Fill icons (social + some shapes): override at path level with fill="currentColor" stroke="none"
const PATHS: Record<IconName, React.ReactNode> = {

  // ─── UI Icons (stroke-based) ───────────────────────────────────────────────

  'Account': (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </>
  ),
  'Bag': (
    <>
      <path d="M6 8V6a6 6 0 0 1 12 0v2" />
      <rect x="2" y="8" width="20" height="14" rx="2" />
    </>
  ),
  'Pin': (
    <>
      <path d="M12 21C8 17 5 13.4 5 10a7 7 0 1 1 14 0c0 3.4-3 7-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  'Envelope': (
    <>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </>
  ),
  'Zoom In': (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4-4" />
      <path d="M11 8v6M8 11h6" />
    </>
  ),
  'Zoom Out': (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4-4" />
      <path d="M8 11h6" />
    </>
  ),
  'Calendar': (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M3 10h18M8 2v4M16 2v4" />
    </>
  ),
  'Settings': (
    // Horizontal sliders with adjustment handles
    <>
      <path d="M3 6h3M10 6h11M3 12h9M16 12h5M3 18h3M10 18h11" />
      <circle cx="7" cy="6" r="2" />
      <circle cx="14" cy="12" r="2" />
      <circle cx="7" cy="18" r="2" />
    </>
  ),
  'Camera': (
    <>
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </>
  ),
  'Gear': (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </>
  ),
  'Share': (
    <>
      <circle cx="18" cy="5" r="2" />
      <circle cx="6" cy="12" r="2" />
      <circle cx="18" cy="19" r="2" />
      <path d="M8 12l8-5.5M8 12l8 5.5" />
    </>
  ),
  'Tag': (
    <>
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <circle cx="7" cy="7" r="1.5" />
    </>
  ),
  'Trash': (
    <>
      <path d="M3 6h18" />
      <path d="M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <path d="M10 11v6M14 11v6" />
    </>
  ),
  'Star Full': (
    // Filled star — overrides stroke default
    <path
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"
      fill="currentColor"
      stroke="none"
    />
  ),
  'Star Half': (
    // Outline + filled left half
    <>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
      <path
        d="M12 2v15.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"
        fill="currentColor"
        stroke="none"
      />
    </>
  ),
  'Star Empty': (
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
  ),
  'Download': (
    <>
      <path d="M12 3v14" />
      <path d="M7 13l5 5 5-5" />
      <path d="M3 21h18" />
    </>
  ),
  'Filter': (
    <path
      d="M22 3H2l8 9.46V19l4 2v-8.54z"
      fill="currentColor"
      stroke="none"
    />
  ),
  'Placeholder': (
    <circle cx="12" cy="12" r="9" />
  ),
  'Lightning': (
    <path
      d="M13 2L3 14h8l-2 8 10-12h-8z"
      fill="currentColor"
      stroke="none"
    />
  ),
  'Arrow Down': (
    <>
      <path d="M12 5v14" />
      <path d="M7 14l5 5 5-5" />
    </>
  ),
  'Arrow Up': (
    <>
      <path d="M12 19V5" />
      <path d="M7 10l5-5 5 5" />
    </>
  ),
  'Arrow Right': (
    <>
      <path d="M5 12h14" />
      <path d="M14 7l5 5-5 5" />
    </>
  ),
  'Arrow Left': (
    <>
      <path d="M19 12H5" />
      <path d="M10 7l-5 5 5 5" />
    </>
  ),
  'Plus': (
    <path d="M12 5v14M5 12h14" />
  ),
  'Minus': (
    <path d="M5 12h14" />
  ),
  'Caret Down': (
    <path d="M6 9l6 6 6-6" />
  ),
  'Caret Up': (
    <path d="M18 15l-6-6-6 6" />
  ),
  'Caret Right': (
    <path d="M9 6l6 6-6 6" />
  ),
  'Caret Left': (
    <path d="M15 6l-6 6 6 6" />
  ),
  'Check': (
    <path d="M4 12l6 6L20 6" />
  ),
  'X': (
    <path d="M5 5l14 14M19 5L5 19" />
  ),
  'Menu': (
    <path d="M3 6h18M3 12h18M3 18h18" />
  ),
  'Search': (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4-4" />
    </>
  ),

  // ─── Social Icons (fill-based) ────────────────────────────────────────────

  'Instagram': (
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  ),
  'LinkedIn': (
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  ),
  'Facebook': (
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  ),
  'X Twitter': (
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  ),
  'Google': (
    <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.93 4.9 1.93L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z" />
  ),
  'Youtube': (
    <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
  ),
  'Pinterest': (
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
  ),
  'TikTok': (
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  ),
};

export function Icon({
  name,
  size = 24,
  className,
  'aria-label': ariaLabel,
  ...props
}: IconProps) {
  const isFill = FILL_ICONS.has(name);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={isFill ? 'currentColor' : 'none'}
      stroke={isFill ? 'none' : 'currentColor'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={[styles.icon, className].filter(Boolean).join(' ')}
      aria-hidden={ariaLabel ? undefined : true}
      aria-label={ariaLabel}
      role={ariaLabel ? 'img' : undefined}
      {...props}
    >
      {PATHS[name]}
    </svg>
  );
}
