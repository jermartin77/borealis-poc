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
  { id: 6, name: 'Borealis Montreal', address: '1300 Rue Sherbrooke O, Montréal, QC H3G 1H9, Canada', lat: 45.5017, lng: -73.5673, dir: 'https://maps.google.com/?q=1300+Rue+Sherbrooke+O+Montreal+QC' },
  { id: 7, name: 'Borealis Vancouver', address: '701 W Georgia St, Vancouver, BC V7Y 1G5, Canada', lat: 49.2827, lng: -123.1207, dir: 'https://maps.google.com/?q=701+W+Georgia+St+Vancouver+BC' },
  { id: 8, name: 'Borealis Dubai', address: 'Fashion Ave, Dubai Mall, Downtown Dubai, Dubai, UAE', lat: 25.2048, lng: 55.2708, dir: 'https://maps.google.com/?q=Fashion+Ave+Dubai+Mall+Downtown+Dubai' },
  { id: 9, name: 'Borealis Stockholm', address: 'Biblioteksgatan 11, 114 35 Stockholm, Sweden', lat: 59.3293, lng: 18.0686, dir: 'https://maps.google.com/?q=Biblioteksgatan+11+114+35+Stockholm+Sweden' },
  { id: 10, name: 'Borealis Lima', address: 'Av. Larco 1035, Miraflores 15074, Lima, Peru', lat: -12.0464, lng: -77.0428, dir: 'https://maps.google.com/?q=Av+Larco+1035+Miraflores+Lima+Peru' },
  { id: 11, name: 'Borealis Buenos Aires', address: 'Av. Álvarez Thomas 1391, C1427 Buenos Aires, Argentina', lat: -34.6037, lng: -58.3816, dir: 'https://maps.google.com/?q=Av+Alvarez+Thomas+1391+Buenos+Aires+Argentina' },
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
  const suggestionsRef = useRef<HTMLUListElement>(null);
  const zoomTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [selectedDealer, setSelectedDealer] = useState<Dealer | null>(null);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Dealer[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);

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

  // Scroll the active suggestion into view when keyboard navigating
  useEffect(() => {
    if (activeIndex < 0 || !suggestionsRef.current) return;
    const item = suggestionsRef.current.children[activeIndex] as HTMLElement | undefined;
    item?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex]);

  const handleGlobeReady = useCallback(() => {
    if (!globeRef.current) return;
    const controls = globeRef.current.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.4;
    globeRef.current.pointOfView({ altitude: 1.875 });
  }, []);

  const zoomToDealer = useCallback((dealer: Dealer) => {
    if (!globeRef.current) return;
    if (zoomTimeoutRef.current) clearTimeout(zoomTimeoutRef.current);

    globeRef.current.controls().autoRotate = false;
    const currentAlt = globeRef.current.pointOfView().altitude ?? 1.875;

    if (currentAlt < 1.0) {
      // Already zoomed in — arc out to the new location at globe altitude, then land
      globeRef.current.pointOfView({ lat: dealer.lat, lng: dealer.lng, altitude: 1.875 }, 1000);
      zoomTimeoutRef.current = setTimeout(() => {
        globeRef.current?.pointOfView({ lat: dealer.lat, lng: dealer.lng, altitude: CITY_ALTITUDE }, 1000);
      }, 1000);
    } else {
      globeRef.current.pointOfView({ lat: dealer.lat, lng: dealer.lng, altitude: CITY_ALTITUDE }, 1500);
    }
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
      'pointer-events:auto',
    ].join(';');
    const inner = document.createElement('span');
    inner.style.cssText = [
      'display:flex',
      'align-items:center',
      'justify-content:center',
      'color:var(--ds-foreground-brand)',
      'filter:drop-shadow(0 2px 6px rgba(0,0,0,0.5))',
      'transition:transform 0.15s ease',
    ].join(';');
    inner.innerHTML = `<svg width="28" height="36" viewBox="0 0 24 30" fill="currentColor" aria-hidden="true">
      <path d="M12 0C7.58 0 4 3.58 4 8c0 6.75 8 18 8 18s8-11.25 8-18c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
    </svg>`;
    el.appendChild(inner);
    el.addEventListener('mouseenter', () => { inner.style.transform = 'scale(1.25)'; });
    el.addEventListener('mouseleave', () => { inner.style.transform = ''; });
    el.addEventListener('click', () => {
      setSelectedDealer(dealer);
      zoomToDealer(dealer);
    });
    return el;
  }, [zoomToDealer]);

  function resetView() {
    if (globeRef.current) {
      globeRef.current.pointOfView({ altitude: 1.875 }, 1200);
      globeRef.current.controls().autoRotate = true;
    }
  }

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setQuery(val);
    setActiveIndex(-1);
    if (!val.trim()) { setSuggestions([]); return; }
    const q = val.toLowerCase();
    setSuggestions(dealers.filter(d =>
      d.name.toLowerCase().includes(q) || d.address.toLowerCase().includes(q)
    ));
  }

  function handleSuggestionClick(dealer: Dealer) {
    setSuggestions([]);
    setActiveIndex(-1);
    setQuery(dealer.name);
    setSelectedDealer(dealer);
    zoomToDealer(dealer);
  }

  function handleSearchClear() {
    setQuery('');
    setSuggestions([]);
    setActiveIndex(-1);
    resetView();
  }

  function handleSearchKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (suggestions.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(i => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(i => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      if (activeIndex >= 0) {
        e.preventDefault();
        handleSuggestionClick(suggestions[activeIndex]);
      }
    } else if (e.key === 'Escape') {
      setSuggestions([]);
      setActiveIndex(-1);
    }
  }

  const activeOptionId = activeIndex >= 0 ? `dealer-option-${suggestions[activeIndex]?.id}` : undefined;

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
          onKeyDown={handleSearchKeyDown}
          placeholder="Search dealers…"
          aria-label="Search dealers"
          role="combobox"
          aria-expanded={suggestions.length > 0}
          aria-haspopup="listbox"
          aria-controls="dealer-listbox"
          aria-activedescendant={activeOptionId}
          aria-autocomplete="list"
        />
        {suggestions.length > 0 && (
          <ul
            ref={suggestionsRef}
            id="dealer-listbox"
            className={styles.suggestions}
            role="listbox"
            aria-label="Dealer suggestions"
          >
            {suggestions.map((dealer, index) => (
              <li key={dealer.id} role="none">
                <button
                  id={`dealer-option-${dealer.id}`}
                  className={`${styles.suggestion}${index === activeIndex ? ` ${styles.suggestionActive}` : ''}`}
                  role="option"
                  aria-selected={index === activeIndex}
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
              onClick={() => { setSelectedDealer(null); resetView(); }}
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
