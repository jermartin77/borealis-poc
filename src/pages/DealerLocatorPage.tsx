import { useCallback, useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import type { GlobeMethods } from 'react-globe.gl';
import { Logo } from '../components/Logo/Logo';
import { Masthead } from '../patterns/Masthead/Masthead';
import { SearchInput } from '../components/Input/Input';
import styles from './DealerLocatorPage.module.css';

interface Dealer {
  id: number;
  name: string;
  address: string;
  lat: number;
  lng: number;
  dir: string;
}

const dealers: Dealer[] = [
  { id: 1, name: 'Borealis Tokyo', address: '1-1-1 Shibuya, Shibuya-ku, Tokyo 150-0002, Japan', lat: 35.6762, lng: 139.6503, dir: 'https://maps.google.com/?q=1-1-1+Shibuya+Shibuya-ku+Tokyo' },
  { id: 2, name: 'Borealis Paris', address: '12 Rue de la Paix, 75002 Paris, France', lat: 48.8566, lng: 2.3522, dir: 'https://maps.google.com/?q=12+Rue+de+la+Paix+75002+Paris' },
  { id: 3, name: 'Borealis San Francisco', address: '456 Market St, San Francisco, CA 94105', lat: 37.7749, lng: -122.4194, dir: 'https://maps.google.com/?q=456+Market+St+San+Francisco+CA' },
  { id: 4, name: 'Borealis New York', address: '230 Fifth Ave, New York, NY 10001', lat: 40.7128, lng: -74.006, dir: 'https://maps.google.com/?q=230+Fifth+Ave+New+York+NY' },
  { id: 5, name: 'Borealis Melbourne', address: '200 Collins St, Melbourne VIC 3000, Australia', lat: -37.8136, lng: 144.9631, dir: 'https://maps.google.com/?q=200+Collins+St+Melbourne+VIC' },
];

// altitude ≈ 0.01 corresponds to ~20-mile visible radius
const CITY_ALTITUDE = 0.01;

const navItems = [
  { label: 'Apparel', href: '#' },
  { label: 'Accessories', href: '#' },
  { label: 'Sale', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Blog', href: '#' },
];

export function DealerLocatorPage() {
  const globeRef = useRef<GlobeMethods | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);

  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [selectedDealer, setSelectedDealer] = useState<Dealer | null>(null);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Dealer[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;
    const obs = new ResizeObserver(entries => {
      const { width, height } = entries[0].contentRect;
      setDimensions({ width, height });
    });
    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const pause = () => { if (globeRef.current) globeRef.current.controls().autoRotate = false; };
    el.addEventListener('pointerdown', pause);
    return () => el.removeEventListener('pointerdown', pause);
  }, []);

  const handleGlobeReady = useCallback(() => {
    if (!globeRef.current) return;
    const controls = globeRef.current.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.4;
  }, []);

  const createMarkerElement = useCallback((d: object) => {
    const dealer = d as Dealer;
    const el = document.createElement('button');
    el.setAttribute('aria-label', dealer.name);
    el.style.cssText = [
      'background:none',
      'border:none',
      'cursor:pointer',
      'padding:0',
      'display:flex',
      'align-items:center',
      'justify-content:center',
      'color:var(--ds-foreground-brand)',
      'filter:drop-shadow(0 2px 6px rgba(0,0,0,0.5))',
      'transition:transform 0.15s ease',
      'pointer-events:auto',
    ].join(';');
    el.innerHTML = `<svg width="28" height="36" viewBox="0 0 24 30" fill="currentColor" aria-hidden="true">
      <path d="M12 0C7.58 0 4 3.58 4 8c0 6.75 8 18 8 18s8-11.25 8-18c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
    </svg>`;
    el.addEventListener('mouseenter', () => { el.style.transform = 'scale(1.25)'; });
    el.addEventListener('mouseleave', () => { el.style.transform = 'scale(1)'; });
    el.addEventListener('click', () => {
      if (globeRef.current) globeRef.current.controls().autoRotate = false;
      setSelectedDealer(dealer);
    });
    return el;
  }, []);

  function zoomToDealer(dealer: Dealer) {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = false;
      globeRef.current.pointOfView({ lat: dealer.lat, lng: dealer.lng, altitude: CITY_ALTITUDE }, 1500);
    }
  }

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setQuery(val);
    if (!val.trim()) { setSuggestions([]); return; }
    const q = val.toLowerCase();
    setSuggestions(dealers.filter(d =>
      d.name.toLowerCase().includes(q) || d.address.toLowerCase().includes(q)
    ));
  }

  function handleSuggestionClick(dealer: Dealer) {
    setSuggestions([]);
    setQuery(dealer.name);
    setSelectedDealer(dealer);
    zoomToDealer(dealer);
  }

  function handleSearchClear() {
    setQuery('');
    setSuggestions([]);
  }

  return (
    <div data-theme="dark" className={styles.root}>
      <Masthead logo={<Logo variant="full-logo" />} navItems={navItems} theme="dark" />

      <div className={styles.globeWrap} ref={containerRef}>
        <Globe
          ref={globeRef as React.MutableRefObject<GlobeMethods | undefined>}
          width={dimensions.width}
          height={dimensions.height}
          globeTileEngineUrl={(x, y, level) => `https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/${level}/${y}/${x}`}
          backgroundColor="rgba(0,0,0,0)"
          showAtmosphere
          atmosphereColor="rgba(100,160,255,0.3)"
          atmosphereAltitude={0.15}
          htmlElementsData={dealers}
          htmlLat="lat"
          htmlLng="lng"
          htmlAltitude={0}
          htmlElement={createMarkerElement}
          onGlobeReady={handleGlobeReady}
        />
      </div>

      <div className={styles.searchBar}>
        <SearchInput
          value={query}
          onChange={handleSearchChange}
          onClear={handleSearchClear}
          placeholder="Search dealers…"
          aria-label="Search dealers"
        />
        {suggestions.length > 0 && (
          <ul className={styles.suggestions} role="listbox" aria-label="Dealer suggestions">
            {suggestions.map(dealer => (
              <li key={dealer.id} role="none">
                <button
                  className={styles.suggestion}
                  role="option"
                  aria-selected={false}
                  onClick={() => handleSuggestionClick(dealer)}
                >
                  <span className={styles.suggestionName}>{dealer.name}</span>
                  <span className={styles.suggestionAddress}>{dealer.address}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {selectedDealer && (
        <div className={styles.dealerPanel} role="dialog" aria-label={selectedDealer.name}>
          <div className={styles.dealerPanelHeader}>
            <button
              className={styles.dealerName}
              onClick={() => zoomToDealer(selectedDealer)}
              title="Zoom to location"
            >
              {selectedDealer.name}
            </button>
            <button
              className={styles.closeButton}
              onClick={() => setSelectedDealer(null)}
              aria-label="Close dealer info"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M1.5 1.5L12.5 12.5M12.5 1.5L1.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          <p className={styles.dealerAddress}>{selectedDealer.address}</p>
          <a
            href={selectedDealer.dir}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.directionsLink}
          >
            Get Directions →
          </a>
        </div>
      )}
    </div>
  );
}
