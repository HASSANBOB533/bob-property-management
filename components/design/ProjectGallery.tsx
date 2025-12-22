'use client';

import {useState} from 'react';
import {useTranslations} from 'next-intl';

export default function ProjectGallery() {
  const t = useTranslations('design.gallery');
  const [selectedProject, setSelectedProject] = useState(0);
  const [showBefore, setShowBefore] = useState(true);

  const stellaRooms = [
    {name: 'Living Room', before: 'Empty space with plain walls', after: 'Elegant contemporary living space'},
    {name: 'Master Bedroom', before: 'Bare room', after: 'Cozy luxury bedroom with warm tones'},
    {name: 'Kitchen', before: 'Basic kitchen area', after: 'Modern fully-equipped kitchen'},
    {name: 'Balcony', before: 'Empty outdoor space', after: 'Inviting outdoor lounge area'},
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dark-text mb-12">
          {t('title')}
        </h2>

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

          {/* Before/After Toggle */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setShowBefore(true)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                showBefore
                  ? 'bg-red-accent text-white'
                  : 'bg-gray-200 text-dark-text'
              }`}
            >
              {t('stella.before')}
            </button>
            <button
              onClick={() => setShowBefore(false)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                !showBefore
                  ? 'bg-green-primary text-white'
                  : 'bg-gray-200 text-dark-text'
              }`}
            >
              {t('stella.after')}
            </button>
          </div>

          {/* Image Grid - Placeholders */}
          <div className="grid md:grid-cols-2 gap-6">
            {stellaRooms.map((room, idx) => (
              <div
                key={idx}
                className="bg-gray-200 rounded-xl overflow-hidden aspect-[4/3] relative group"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400 text-white">
                  <div className="text-4xl mb-2">📷</div>
                  <div className="font-semibold mb-1">{room.name}</div>
                  <div className="text-sm opacity-80">
                    {showBefore ? room.before : room.after}
                  </div>
                  <div className="absolute top-4 right-4 bg-black/50 px-3 py-1 rounded-full text-xs">
                    {showBefore ? t('stella.before') : t('stella.after')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coming Soon Projects */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[1, 2, 3].map((idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-xl p-8 text-center border-2 border-dashed border-gray-300"
            >
              <div className="text-6xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold text-dark-text mb-2">
                Project {idx + 1}
              </h3>
              <p className="text-dark-text/60">{t('comingSoon')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
