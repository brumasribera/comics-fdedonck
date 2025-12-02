'use client';

import Image from 'next/image';
import {
  type MouseEvent,
  type PointerEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { classNames } from '@/utils/classNames';

import styles from './Lightbox.module.scss';

export type LightboxImage = {
  src: string;
  title?: string;
};

type LightboxProps = {
  items: LightboxImage[];
  initialIndex: number;
  onClose: () => void;
};

type PanState = {
  pointerId: number | null;
  lastX: number;
  lastY: number;
  isActive: boolean;
  hasMoved: boolean;
};

const MOBILE_BREAKPOINT = 768;
const MIN_ZOOM = 1;
const ZOOM_STEP = 0.2;
const MOBILE_MAX_ZOOM = 2.5;
const DESKTOP_MAX_ZOOM = 4;

export default function Lightbox({ items, initialIndex, onClose }: LightboxProps) {
  const safeInitialIndex = useMemo(() => {
    if (!items.length) {
      return 0;
    }
    return Math.min(Math.max(initialIndex, 0), items.length - 1);
  }, [initialIndex, items]);

  const [currentIndex, setCurrentIndex] = useState(safeInitialIndex);
  const [zoomLevel, setZoomLevel] = useState(MIN_ZOOM);
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });
  const [naturalSize, setNaturalSize] = useState({ width: 0, height: 0 });
  const [showPanHint, setShowPanHint] = useState(false);
  const [isUserPanning, setIsUserPanning] = useState(false);

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const previousZoomLevelRef = useRef(MIN_ZOOM);
  const panStateRef = useRef<PanState>({
    pointerId: null,
    lastX: 0,
    lastY: 0,
    isActive: false,
    hasMoved: false,
  });
  const lastPointerDownWasBackgroundRef = useRef(false);

  const isZoomed = zoomLevel > MIN_ZOOM + 0.01;
  const hasMultiple = items.length > 1;
  const isMobileViewport = viewportSize.width > 0 && viewportSize.width <= MOBILE_BREAKPOINT;

  const centerImage = useCallback(() => {
    const container = imageContainerRef.current;
    if (!container) {
      return;
    }

    const scrollLeft = Math.max(0, (container.scrollWidth - container.clientWidth) / 2);
    const scrollTop = Math.max(0, (container.scrollHeight - container.clientHeight) / 2);

    container.scrollTo({
      left: scrollLeft,
      top: scrollTop,
    });
  }, []);

  const resetZoomLevel = useCallback(() => {
    setZoomLevel(MIN_ZOOM);
    setShowPanHint(false);
    imageContainerRef.current?.scrollTo({ left: 0, top: 0 });
  }, []);

  const prepareForNewImage = useCallback(() => {
    setNaturalSize({ width: 0, height: 0 });
    resetZoomLevel();
  }, [resetZoomLevel]);

  useEffect(() => {
    setCurrentIndex(safeInitialIndex);
    prepareForNewImage();
  }, [prepareForNewImage, safeInitialIndex]);

  useEffect(() => {
    const updateViewport = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateViewport();
    window.addEventListener('resize', updateViewport);

    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  const goToNext = useCallback(() => {
    if (!hasMultiple) {
      return;
    }

    setCurrentIndex((prev) => (prev + 1) % items.length);
    prepareForNewImage();
  }, [hasMultiple, items.length, prepareForNewImage]);

  const goToPrevious = useCallback(() => {
    if (!hasMultiple) {
      return;
    }

    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    prepareForNewImage();
  }, [hasMultiple, items.length, prepareForNewImage]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (isZoomed) {
          resetZoomLevel();
        } else {
          onClose();
        }
      } else if (event.key === 'ArrowRight' && hasMultiple) {
        event.preventDefault();
        goToNext();
      } else if (event.key === 'ArrowLeft' && hasMultiple) {
        event.preventDefault();
        goToPrevious();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [goToNext, goToPrevious, hasMultiple, isZoomed, onClose, resetZoomLevel]);

  const baseWidth = useMemo(() => {
    if (!viewportSize.width) {
      return 360;
    }

    if (!naturalSize.width) {
      return Math.max(240, viewportSize.width * 0.8);
    }

    const horizontalPadding = isMobileViewport ? 24 : 80;
    const verticalPadding = isMobileViewport ? 120 : 160;
    const availableWidth = Math.max(240, viewportSize.width - horizontalPadding);
    const availableHeight = Math.max(240, viewportSize.height - verticalPadding);
    const widthFromHeight = (naturalSize.width / naturalSize.height) * availableHeight;

    return Math.min(naturalSize.width, availableWidth, widthFromHeight);
  }, [viewportSize, naturalSize, isMobileViewport]);

  const maxZoom = useMemo(() => {
    if (!naturalSize.width || !baseWidth) {
      return isMobileViewport ? 1.8 : 2.6;
    }

    const naturalLimit = naturalSize.width / baseWidth;
    if (naturalLimit <= MIN_ZOOM) {
      return MIN_ZOOM;
    }

    const deviceCap = isMobileViewport ? MOBILE_MAX_ZOOM : DESKTOP_MAX_ZOOM;
    return Math.min(deviceCap, naturalLimit);
  }, [naturalSize.width, baseWidth, isMobileViewport]);

  useEffect(() => {
    if (zoomLevel > MIN_ZOOM && zoomLevel > maxZoom) {
      setZoomLevel(maxZoom);
    }
  }, [maxZoom, zoomLevel]);

  if (!items.length) {
    return null;
  }

  const currentItem = items[currentIndex];

  const clampZoom = useCallback(
    (value: number) => {
      if (maxZoom <= MIN_ZOOM) {
        return MIN_ZOOM;
      }

      return Math.min(maxZoom, Math.max(MIN_ZOOM, Number(value)));
    },
    [maxZoom],
  );

  const handleZoomInput = useCallback(
    (value: number) => {
      const nextZoom = clampZoom(value);
      setZoomLevel(nextZoom);
      if (nextZoom > MIN_ZOOM) {
        setShowPanHint(true);
      } else {
        setShowPanHint(false);
        imageContainerRef.current?.scrollTo({ left: 0, top: 0 });
      }
    },
    [clampZoom],
  );


  const resetPanState = useCallback(() => {
    panStateRef.current = {
      pointerId: null,
      lastX: 0,
      lastY: 0,
      isActive: false,
      hasMoved: false,
    };
    setIsUserPanning(false);
  }, []);

  const handlePointerDown = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      lastPointerDownWasBackgroundRef.current = event.target === event.currentTarget;
      if (!isZoomed) {
        return;
      }
      const container = imageContainerRef.current;
      if (!container) {
        return;
      }

      panStateRef.current = {
        pointerId: event.pointerId,
        lastX: event.clientX,
        lastY: event.clientY,
        isActive: true,
        hasMoved: false,
      };
    },
    [isZoomed],
  );

  const handlePointerMove = useCallback((event: PointerEvent<HTMLDivElement>) => {
    const container = imageContainerRef.current;
    if (!container) {
      return;
    }

    const state = panStateRef.current;
    if (!state.isActive || state.pointerId !== event.pointerId) {
      return;
    }

    const deltaX = event.clientX - state.lastX;
    const deltaY = event.clientY - state.lastY;

    if (!state.hasMoved) {
      const hasMovement = Math.abs(deltaX) > 1 || Math.abs(deltaY) > 1;
      if (!hasMovement) {
        return;
      }
      state.hasMoved = true;
      container.setPointerCapture?.(event.pointerId);
      setIsUserPanning(true);
    }

    container.scrollLeft -= deltaX;
    container.scrollTop -= deltaY;

    panStateRef.current = {
      ...state,
      lastX: event.clientX,
      lastY: event.clientY,
    };

    event.preventDefault();
  }, [setIsUserPanning]);

  const handlePointerUp = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      const container = imageContainerRef.current;
      const state = panStateRef.current;

      if (!state.isActive || state.pointerId !== event.pointerId) {
        return;
      }

      container?.releasePointerCapture?.(event.pointerId);
      resetPanState();
    },
    [resetPanState],
  );

  const handlePointerLeave = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      const container = imageContainerRef.current;
      const state = panStateRef.current;

      if (!state.isActive || state.pointerId !== event.pointerId) {
        return;
      }

      container?.releasePointerCapture?.(event.pointerId);
      resetPanState();
    },
    [resetPanState],
  );

  const handlePointerCancel = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      const container = imageContainerRef.current;
      const state = panStateRef.current;

      if (state.pointerId !== event.pointerId) {
        return;
      }

      container?.releasePointerCapture?.(event.pointerId);
      resetPanState();
    },
    [resetPanState],
  );


  const handleContainerBackgroundClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (
        event.target === event.currentTarget &&
        !isUserPanning &&
        lastPointerDownWasBackgroundRef.current
      ) {
        onClose();
      }
    },
    [isUserPanning, onClose],
  );

  const handleImageLoad = useCallback((img: HTMLImageElement) => {
    setNaturalSize({
      width: img.naturalWidth,
      height: img.naturalHeight,
    });
  }, []);

  const handleResetZoom = () => handleZoomInput(MIN_ZOOM);
  const zoomPercentage = Math.round(zoomLevel * 100);
  const imageBaseWidth = baseWidth || Math.max(240, viewportSize.width || 360);
  const imageWidth = imageBaseWidth * zoomLevel;
  const zoomControlsEnabled = maxZoom > MIN_ZOOM;
  const fullWidthZoomTarget = useMemo(() => {
    if (!imageBaseWidth) {
      return MIN_ZOOM;
    }

    const viewportWidth = viewportSize.width || 0;
    const horizontalPadding = isMobileViewport ? 24 : 80;
    const availableWidth = viewportWidth
      ? Math.max(240, viewportWidth - horizontalPadding)
      : imageBaseWidth;

    if (!availableWidth) {
      return MIN_ZOOM;
    }

    const fitZoom = availableWidth / imageBaseWidth;
    if (!Number.isFinite(fitZoom)) {
      return MIN_ZOOM;
    }

    return clampZoom(Math.max(MIN_ZOOM, fitZoom));
  }, [clampZoom, imageBaseWidth, isMobileViewport, viewportSize.width]);

  const handleZoomStep = useCallback(
    (direction: 'in' | 'out') => {
      if (direction === 'in' && zoomLevel <= MIN_ZOOM + 0.01) {
        if (fullWidthZoomTarget > MIN_ZOOM) {
          handleZoomInput(fullWidthZoomTarget);
          return;
        }
      }

      const delta = direction === 'in' ? ZOOM_STEP : -ZOOM_STEP;
      handleZoomInput(Number((zoomLevel + delta).toFixed(2)));
    },
    [fullWidthZoomTarget, handleZoomInput, zoomLevel],
  );

  const handleImageClick = useCallback(
    (event: MouseEvent<HTMLImageElement>) => {
      event.stopPropagation();

      if (!isZoomed) {
        handleZoomInput(fullWidthZoomTarget);
        return;
      }

      const container = imageContainerRef.current;
      if (!container) {
        return;
      }

      const rect = container.getBoundingClientRect();
      const scrollableX = container.scrollWidth - container.clientWidth;
      const scrollableY = container.scrollHeight - container.clientHeight;

      if (scrollableX <= 0 && scrollableY <= 0) {
        return;
      }

      const relativeX = (event.clientX - rect.left) / rect.width;
      const relativeY = (event.clientY - rect.top) / rect.height;

      container.scrollTo({
        left: scrollableX * relativeX,
        top: scrollableY * relativeY,
        behavior: 'smooth',
      });

      setShowPanHint(false);
    },
    [fullWidthZoomTarget, handleZoomInput, isZoomed],
  );

  useEffect(() => {
    if (previousZoomLevelRef.current <= MIN_ZOOM && zoomLevel > MIN_ZOOM) {
      requestAnimationFrame(() => {
        centerImage();
      });
    }

    previousZoomLevelRef.current = zoomLevel;
  }, [centerImage, zoomLevel]);

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div
        className={classNames(styles.content, isZoomed && styles.contentZoomed)}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className={styles.close}
          onClick={(event) => {
            event.stopPropagation();
            onClose();
          }}
          type="button"
          aria-label="Close full screen image"
        >
          ×
        </button>

        {hasMultiple && (
          <>
            <button
              className={classNames(styles.navButton, styles.navButtonLeft)}
              onClick={(event) => {
                event.stopPropagation();
                goToPrevious();
              }}
              type="button"
              aria-label="View previous image"
            >
              ‹
            </button>
            <button
              className={classNames(styles.navButton, styles.navButtonRight)}
              onClick={(event) => {
                event.stopPropagation();
                goToNext();
              }}
              type="button"
              aria-label="View next image"
            >
              ›
            </button>
            <div className={styles.counter}>
              {currentIndex + 1} / {items.length}
            </div>
          </>
        )}

        <div
          ref={imageContainerRef}
          className={classNames(
            styles.imageContainer,
            isZoomed && styles.imageContainerZoomed,
            isUserPanning && styles.imageContainerPanning,
          )}
          onClick={handleContainerBackgroundClick}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerLeave}
          onPointerCancel={handlePointerCancel}
        >
          <Image
            key={currentItem.src}
            src={currentItem.src}
            alt={currentItem.title || 'Comic'}
            width={naturalSize.width || 1200}
            height={naturalSize.height || 1600}
            className={classNames(styles.image, isZoomed && styles.imageZoomed)}
            style={{
              width: imageWidth,
              height: 'auto',
              maxWidth: isZoomed ? imageWidth : '100%',
              maxHeight: isZoomed ? 'none' : '85vh',
              objectFit: 'contain',
            }}
            unoptimized
            draggable={false}
            onLoadingComplete={handleImageLoad}
            onClick={handleImageClick}
          />
        </div>

        <div className={styles.controls} onClick={(event) => event.stopPropagation()}>
          <button
            type="button"
            className={classNames(styles.zoomButton, styles.zoomButtonMinus)}
            onClick={() => handleZoomStep('out')}
            disabled={!zoomControlsEnabled || zoomLevel <= MIN_ZOOM}
            aria-label="Zoom out"
          >
            <span aria-hidden="true" className={styles.zoomIcon} />
          </button>
          <input
            type="range"
            min={MIN_ZOOM}
            max={zoomControlsEnabled ? maxZoom : MIN_ZOOM}
            step={0.05}
            value={zoomLevel}
            onChange={(event) => handleZoomInput(parseFloat(event.target.value))}
            className={styles.zoomSlider}
            aria-label="Zoom level"
            disabled={!zoomControlsEnabled}
          />
          <button
            type="button"
            className={classNames(styles.zoomButton, styles.zoomButtonPlus)}
            onClick={() => handleZoomStep('in')}
            disabled={!zoomControlsEnabled || zoomLevel >= maxZoom}
            aria-label="Zoom in"
          >
            <span aria-hidden="true" className={styles.zoomIcon} />
          </button>
          <button
            type="button"
            className={classNames(styles.zoomButton, styles.resetButton)}
            onClick={handleResetZoom}
            disabled={zoomLevel === MIN_ZOOM}
            aria-label="Reset zoom"
          >
            Fit
          </button>
          <span className={styles.zoomValue}>{zoomPercentage}%</span>
        </div>

        {showPanHint && (
          <p className={styles.panHint} onClick={(event) => event.stopPropagation()}>
            Tap the zoomed image to pan across different areas.
          </p>
        )}
      </div>
    </div>
  );
}

