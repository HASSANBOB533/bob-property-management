# Best of Bedz - Property Management Website

A professional, mobile-optimized property management website for Best of Bedz - Egypt's premier short-term rental property management company.

## Features

- ✨ **Bilingual Support**: Full English/Arabic with RTL layout support
- 📱 **Mobile-First**: Responsive design optimized for all devices
- 🎨 **Modern Design**: Built with Next.js 14, TypeScript, and Tailwind CSS
- 🌐 **Comprehensive Pages**:
  - Homepage with services, pricing, and trust indicators
  - Design & Furnishing showcase
  - Property listing form
  - Owner portal integration

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **Fonts**: Inter & Poppins (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── app/
│   └── [locale]/          # Internationalized pages
│       ├── page.tsx       # Homepage
│       ├── design/        # Design & Furnishing page
│       └── list-property/ # Property listing form
├── components/
│   ├── homepage/          # Homepage sections
│   ├── design/            # Design page components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── PropertyForm.tsx
├── lib/
│   └── translations/      # i18n translations (en.json, ar.json)
└── public/
    └── images/            # Static assets
```

## Brand Colors

- **Primary (Cream)**: `#F0F1DD`
- **Secondary Blue**: `#2B63AF`
- **Secondary Green**: `#00A66A`
- **Secondary Yellow**: `#F9DE6F`
- **Accent Red**: `#D64045`
- **Dark Text**: `#1B365D`

## Key Integrations

- **Owner Portal**: Guesty integration for property owners
- **Meeting Scheduler**: Cal.com integration for video calls
- **Form Submissions**: Ready for Google Sheets or form service integration

## Social Media

- Facebook: [@BestofBedz](https://www.facebook.com/BestofBedz/)
- Instagram: [@bestofbedz](https://www.instagram.com/bestofbedz)
- LinkedIn: [Best of Bedz](https://www.linkedin.com/company/best-of-bedz/)
- YouTube: [@BestofBedz-LLC](https://www.youtube.com/@BestofBedz-LLC)
- TikTok: [@bestofbedzofficial](https://www.tiktok.com/@bestofbedzofficial)

## Contact

- **Email**: cs@bestofbedz.com
- **Phone**: +20 122 758 0022
- **Address**: New Cairo, 5th Settlement, Egypt

## License

All rights reserved © 2025 Best of Bedz
