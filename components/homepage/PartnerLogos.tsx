'use client';

export default function PartnerLogos() {
  const partners = [
    'Airbnb',
    'Booking.com',
    'Vrbo',
    'Expedia',
    'Agoda',
    'Trip.com'
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-sm font-semibold text-dark-text/60 uppercase tracking-wide">
            Our Distribution Partners
          </h3>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <div
              key={partner}
              className="text-dark-text/40 font-bold text-xl md:text-2xl"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
