'use client';

import {useState, useRef, useEffect} from 'react';
import {useTranslations} from 'next-intl';
import Image from 'next/image';

interface BeforeAfterImage {
  before: string;
  after: string;
  alt: string;
}

function BeforeAfterSlider({before, after, alt}: BeforeAfterImage) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] overflow-hidden rounded-xl cursor-ew-resize select-none"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseUp={handleMouseUp}
      onTouchEnd={handleMouseUp}
    >
      {/* After Image (background) */}
      <div className="absolute inset-0 bg-gray-200">
        {after ? (
          <Image
            src={after}
            alt={`${alt} - After`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-green-primary/20 to-green-primary/40">
            <div className="text-6xl mb-4">✨</div>
            <div className="text-xl font-semibold text-dark-text">After</div>
            <div className="text-sm text-dark-text/70 mt-2">Image Coming Soon</div>
          </div>
        )}
      </div>

      {/* Before Image (clipped) */}
      <div
        className="absolute inset-0 bg-gray-300"
        style={{clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`}}
      >
        {before ? (
          <Image
            src={before}
            alt={`${alt} - Before`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-red-accent/20 to-red-accent/40">
            <div className="text-6xl mb-4">📷</div>
            <div className="text-xl font-semibold text-dark-text">Before</div>
            <div className="text-sm text-dark-text/70 mt-2">Image Coming Soon</div>
          </div>
        )}
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
        style={{left: `${sliderPosition}%`}}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
          <svg
            className="w-6 h-6 text-dark-text"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M8 9l4-4 4 4M16 15l-4 4-4-4" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-red-accent/90 text-white px-3 py-1 rounded-full text-sm font-semibold">
        Before
      </div>
      <div className="absolute top-4 right-4 bg-green-primary/90 text-white px-3 py-1 rounded-full text-sm font-semibold">
        After
      </div>
    </div>
  );
}

export default function ProjectGallery() {
  const t = useTranslations('design.gallery');

  // Stella Maris Project - Ready for Cloudinary URLs
  const stellaRooms: BeforeAfterImage[] = [
    {
      before: '', // Add Cloudinary URL when available
      after: '',  // Add Cloudinary URL when available
      alt: 'Stella Maris Living Room'
    },
    {
      before: '',
      after: '',
      alt: 'Stella Maris Master Bedroom'
    },
    {
      before: '',
      after: '',
      alt: 'Stella Maris Kitchen'
    },
    {
      before: '',
      after: '',
      alt: 'Stella Maris Balcony'
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dark-text mb-4">
          {t('title')}
        </h2>
        <p className="text-center text-dark-text/70 mb-12 max-w-2xl mx-auto">
          Drag the slider to see the transformation of our design projects
        </p>

        {/* Stella Project */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-cream to-yellow-primary/10 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-dark-text mb-4">
              {t('stella.title')}
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-dark-text/80">
              <div>
                <span className="font-semibold">📍 Location:</span> {t('stella.location')}
              </div>
              <div>
                <span className="font-semibold">🏠 Type:</span> {t('stella.type')}
              </div>
              <div>
                <span className="font-semibold">🎨 Style:</span> {t('stella.style')}
              </div>
            </div>
          </div>

          {/* Interactive Before/After Gallery */}
          <div className="grid md:grid-cols-2 gap-6">
            {stellaRooms.map((room, idx) => (
              <div key={idx} className="group">
                <BeforeAfterSlider {...room} />
                <p className="text-center mt-3 text-dark-text/80 font-medium">
                  {room.alt}
                </p>
              </div>
            ))}
          </div>

          {/* Instructions */}
          <div className="mt-8 bg-blue-primary/5 border border-blue-primary/20 rounded-lg p-6 text-center">
            <p className="text-dark-text/80">
              <span className="font-semibold">💡 Pro Tip:</span> Click and drag the slider or use touch to compare before and after images
            </p>
          </div>
        </div>

        {/* Coming Soon Projects */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[1, 2, 3].map((idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-xl p-8 text-center border-2 border-dashed border-gray-300 hover:border-blue-primary transition-colors"
            >
              <div className="text-6xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold text-dark-text mb-2">
                Project {idx + 1}
              </h3>
              <p className="text-dark-text/60">{t('comingSoon')}</p>
            </div>
          ))}
        </div>

        {/* Note about adding images */}
        <div className="mt-12 max-w-3xl mx-auto bg-yellow-primary/10 border border-yellow-primary/30 rounded-lg p-6">
          <h4 className="font-bold text-dark-text mb-2">📸 For Developers:</h4>
          <p className="text-sm text-dark-text/80">
            To add actual project images, simply update the <code className="bg-dark-text/10 px-2 py-1 rounded">stellaRooms</code> array 
            with Cloudinary URLs in the format: <code className="bg-dark-text/10 px-2 py-1 rounded">before: 'https://res.cloudinary.com/...'</code>
          </p>
        </div>
      </div>
    </section>
  );
}
