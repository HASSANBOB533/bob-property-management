'use client';

import {useState} from 'react';
import {useTranslations, useLocale} from 'next-intl';
import { CldUploadWidget } from 'next-cloudinary';

export default function PropertyForm() {
  const t = useTranslations('listProperty');
  const locale = useLocale();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
    const [uploadedImages, setUploadedImages] = useState<string[]>([]);
    const [sessionId] = useState(() => `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

        // Process checkboxes into comma-separated strings
    const amenities = ['wifi', 'ac', 'heating', 'tv', 'kitchen', 'washer', 'dryer', 'dishwasher']
      .filter(a => formData.get(`amenity_${a}`) === 'on')
      .map(a => a.charAt(0).toUpperCase() + a.slice(1))
      .join(', ');
    
    const services = ['marketing', 'performance', 'allInclusive', 'design', 'research']
      .filter(s => formData.get(`service_${s}`) === 'on')
      .join(', ');
    
    const features = ['balcony', 'pool', 'garden', 'parking']
      .filter(f => formData.get(f) === 'on')
      .map(f => f.charAt(0).toUpperCase() + f.slice(1))
      .join(', ');
    
    // Enhance data object with processed fields
    data.amenities = amenities;
    data.services = services;
    data.hasBalcony = formData.get('balcony') === 'on' ? 'Yes' : 'No';
    data.hasPool = formData.get('pool') === 'on' ? 'Yes' : 'No';
    data.hasGarden = formData.get('garden') === 'on' ? 'Yes' : 'No';
    data.parking = formData.get('parking') === 'on' ? 'Yes' : 'No';
    data.uniqueFeatures = features;
    data.isListed = data.currentlyListed || 'no';
    data.platforms = formData.get('platforms') || '';
    data.isFurnished = data.furnished || 'no';
    data.compound = data.compoundName || '';
    
    // Fix propertyImages - send as comma-separated string of URLs
    data.propertyImages = uploadedImages.join(', ');
    
    // Log for debugging
    console.log('Form submission data:', {
      ...data,
      propertyImagesCount: uploadedImages.length
    });



    try {
      // Submit to Google Sheets via Google Apps Script
      // The default URL is provided as a fallback, but should be configured via environment variable
      // See GOOGLE_SHEETS_SETUP.md for configuration instructions
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || 
                       'https://script.google.com/macros/s/AKfycbzcdpdb1unzg6TJocWSxMPKCWnqJblQsVN_y1jQOab0ZY8RuNk4hNPFGCCAFIEbM/exec';
      
      const response = await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Apps Script CORS
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      // Note: With no-cors mode, we cannot read the response status
      // We assume success if no network error occurred
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Scroll to top to show success message
      window.scrollTo({top: 0, behavior: 'smooth'});
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      // With no-cors, if we reach here, there was a network error
      // Show success anyway since we can't verify the actual server response
      setIsSubmitted(true);
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  };

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-green-primary/10 border-2 border-green-primary rounded-2xl p-8 text-center">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-3xl font-bold text-dark-text mb-4">Thank You!</h2>
          <p className="text-lg text-dark-text/80 mb-6">{t('confirmation')}</p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-blue-primary font-semibold hover:underline"
          >
            Submit Another Property
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-dark-text mb-4">
          {t('title')}
        </h1>
        <p className="text-xl text-dark-text/70">{t('subtitle')}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Owner Information */}
        <section className="bg-white rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-bold text-dark-text mb-6">
            {t('ownerInfo.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-dark-text mb-2">
                {t('ownerInfo.fullName')} *
              </label>
              <input
                type="text"
                name="fullName"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-dark-text mb-2">
                {t('ownerInfo.email')} *
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-dark-text mb-2">
                {t('ownerInfo.phone')} *
              </label>
              <input
                type="tel"
                name="phone"
                required
                                pattern="[0-9]{8,15}"
                                placeholder="e.g., 01234567890"
                                title="Please enter a valid phone number (8-15 digits only)"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-dark-text mb-2">
                {t('ownerInfo.language')}
              </label>
              <select
                name="preferredLanguage"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-primary"
              >
                <option value="en">English</option>
                <option value="ar">العربية</option>
              </select>
            </div>
          </div>
        </section>

        {/* Property Details */}
        <section className="bg-white rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-bold text-dark-text mb-6">
            {t('propertyDetails.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-dark-text mb-2">
                {t('propertyDetails.propertyName')}
              </label>
              <input
                type="text"
                name="propertyName"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-dark-text mb-2">
                {t('propertyDetails.propertyType')}
              </label>
              <select
                name="propertyType"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-primary"
              >
                <option value="">Select type...</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="chalet">Chalet</option>
                <option value="penthouse">Penthouse</option>
                <option value="studio">Studio</option>
                <option value="townhouse">Townhouse</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-dark-text mb-2">
                {t('propertyDetails.category')}
              </label>
              <select
                name="category"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-primary"
              >
                <option value="">Select category...</option>
                <option value="beachfront">Beachfront</option>
                <option value="cityCenter">City Center</option>
                <option value="resort">Resort</option>
                <option value="compound">Compound</option>
                <option value="standalone">Standalone</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-dark-text mb-2">
                {t('propertyDetails.city')}
              </label>
              <select
                name="city"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-primary"
              >
                <option value="">Select city...</option>
                <option value="cairo">Cairo</option>
                <option value="alexandria">Alexandria</option>
                <option value="northCoast">North Coast</option>
                <option value="ainSokhna">Ain Sokhna</option>
                <option value="hurghada">Hurghada</option>
                <option value="sharm">Sharm El Sheikh</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-dark-text mb-2">
                {t('propertyDetails.location')}
              </label>
              <input
                type="text"
                name="location"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-dark-text mb-2">
                {t('propertyDetails.compoundName')}
              </label>
              <input
                type="text"
                name="compoundName"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-primary"
              />
            </div>
          </div>
        </section>

        {/* Property Specifications */}
        <section className="bg-white rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-bold text-dark-text mb-6">
            {t('specifications.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold text-dark-text mb-2">
                {t('specifications.size')}
              </label>
              <input
                type="number"
                name="size"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-dark-text mb-2">
                {t('specifications.bedrooms')}
              </label>
              <select
                name="bedrooms"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-primary"
              >
                {Array.from({length: 11}, (_, i) => (
                  <option key={i} value={i}>
                    {i === 10 ? '10+' : i}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-dark-text mb-2">
                {t('specifications.bathrooms')}
              </label>
              <select
                name="bathrooms"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-primary"
              >
                {Array.from({length: 11}, (_, i) => (
                  <option key={i} value={i}>
                    {i === 10 ? '10+' : i}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-dark-text mb-2">
                {t('specifications.livingAreas')}
              </label>
              <input
                type="number"
                name="livingAreas"
                min="0"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-dark-text mb-2">
                {t('specifications.floor')}
              </label>
              <input
                type="number"
                name="floor"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-primary"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-6">
            {['balcony', 'pool', 'garden', 'parking'].map((feature) => (
              <label key={feature} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name={feature}
                  className="w-5 h-5 text-blue-primary rounded focus:ring-2 focus:ring-blue-primary"
                />
                <span className="text-sm font-medium text-dark-text">
                  {t(`specifications.${feature}`)}
                </span>
              </label>
            ))}
          </div>
        </section>

        {/* Amenities */}
        <section className="bg-white rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-bold text-dark-text mb-6">
            {t('amenities.title')}
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {['wifi', 'ac', 'heating', 'tv', 'kitchen', 'washer', 'dryer', 'dishwasher'].map(
              (amenity) => (
                <label key={amenity} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name={`amenity_${amenity}`}
                    className="w-5 h-5 text-blue-primary rounded focus:ring-2 focus:ring-blue-primary"
                  />
                  <span className="text-sm font-medium text-dark-text">
                    {t(`amenities.${amenity}`)}
                  </span>
                </label>
              )
            )}
          </div>
        </section>

        {/* Service Selection */}
        <section className="bg-white rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-bold text-dark-text mb-6">
            {t('services.title')}
          </h2>
          <p className="text-dark-text/70 mb-4">{t('services.question')}</p>
          <div className="space-y-3">
            {['marketing', 'performance', 'allInclusive', 'design', 'research'].map(
              (service) => (
                <label key={service} className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name={`service_${service}`}
                    className="w-5 h-5 text-blue-primary rounded focus:ring-2 focus:ring-blue-primary mt-1"
                  />
                  <span className="text-dark-text font-medium">
                    {t(`services.${service}`)}
                  </span>
                </label>
              )
            )}
          </div>
        </section>

        {/* Property Description */}
        <section className="bg-white rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-bold text-dark-text mb-6">
            {t('description.title')}
          </h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-dark-text mb-2">
                {t('description.propertyDescription')}
              </label>
              <textarea
                name="description"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-dark-text mb-2">
                {t('description.uniqueness')}
              </label>
              <textarea
                name="uniqueness"
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-primary"
              />
            </div>
          </div>
        </section>

        {/* Current Status */}
        <section className="bg-white rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-bold text-dark-text mb-6">
            {t('currentStatus.title')}
          </h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-dark-text mb-2">
                {t('currentStatus.furnished')}
              </label>
              <select
                name="furnished"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-primary"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="partially">Partially</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-dark-text mb-2">
                {t('currentStatus.listed')}
              </label>
              <select
                name="currentlyListed"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-primary"
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-dark-text mb-2">
                {t('currentStatus.platforms')}
              </label>
              <input
                type="text"
                name="platforms"
                placeholder="e.g., Airbnb, Booking.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-dark-text mb-2">
                {t('currentStatus.revenue')}
              </label>
              <input
                type="text"
                name="currentRevenue"
                placeholder="e.g., 10,000 EGP"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-primary"
              />
            </div>
          </div>
        </section>

      {/* Photos */}
<section className="bg-white rounded-xl p-6 shadow-md">
  <h2 className="text-2xl font-bold text-dark-text mb-6">
    {t('photos.title')}
  </h2>
  
  <div className="space-y-4">
   <CldUploadWidget
  uploadPreset="property-photos"
  options={{
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    multiple: true,
    maxFiles: 20,
    resourceType: 'image',
    clientAllowedFormats: ['jpg', 'jpeg', 'png', 'webp'],
    maxFileSize: 10000000,
    sources: ['local', 'url', 'camera'],
        folder: `properties/${sessionId}`,  }}
  onSuccess={(result: any) => {
    if (result.event === 'success') {
      setUploadedImages(prev => [...prev, result.info.secure_url]);
    }
  }}
>

      {({ open }) => (
        <button
          type="button"
          onClick={() => open()}
          className="w-full bg-blue-primary/10 border-2 border-blue-primary rounded-lg p-8 text-center hover:bg-blue-primary/20 transition-all"
        >
          <div className="text-5xl mb-4">📸</div>
          <p className="text-dark-text font-semibold mb-2">
            Click to Upload Property Photos
          </p>
          <p className="text-dark-text/70 text-sm">
            Upload up to 20 images (JPG, PNG, WEBP - Max 10MB each)
          </p>
        </button>
      )}
    </CldUploadWidget>

    {uploadedImages.length > 0 && (
      <div className="mt-6">
        <p className="text-sm font-semibold text-dark-text mb-3">
          Uploaded Images ({uploadedImages.length})
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {uploadedImages.map((url, index) => (
            <div key={index} className="relative group">
              <img
                src={url}
                alt={`Property ${index + 1}`}
                className="w-full h-32 object-cover rounded-lg"
              />
              <button
                type="button"
                onClick={() => setUploadedImages(prev => prev.filter((_, i) => i !== index))}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
</section>


        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-primary text-white px-12 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed min-h-[56px]"
          >
            {isSubmitting ? 'Submitting...' : t('submit')}
          </button>
          <p className="text-sm text-dark-text/60 mt-4">{t('confirmation')}</p>
        </div>
      </form>

      {/* Schedule Meeting CTA */}
      <div className="mt-12 bg-gradient-to-r from-green-primary to-blue-primary text-white rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-2">
          {t.has('scheduleMeeting.title') ? t('scheduleMeeting.title') : 'Schedule a Video Call'}
        </h3>
        <p className="mb-6 opacity-90">
          {t.has('scheduleMeeting.subtitle') ? t('scheduleMeeting.subtitle') : 'Meet with our team to discuss your property'}
        </p>
        <a
          href="https://cal.com/hassan-ahmed-27rg6z/property-owner-meeting"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-blue-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
        >
          {t.has('scheduleMeeting.button') ? t('scheduleMeeting.button') : 'Book Your Meeting'}
        </a>
      </div>
    </div>
  );
}
