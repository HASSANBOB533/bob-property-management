# Best of Bedz (BOB) - Brand Guidelines

## Overview
This document outlines the official brand guidelines for Best of Bedz (BOB), a premium property management company specializing in vacation rentals and property design services in Egypt.

---

## 1. Brand Identity

### Company Name
- **Full Name:** Best of Bedz
- **Abbreviation:** BOB
- **Tagline:** Premium Property Management Services

### Brand Personality
- Professional yet approachable
- Luxurious but accessible
- Innovative and tech-savvy
- Customer-focused
- Detail-oriented

---

## 2. Logo Usage

### Primary Logo
- **File:** `/public/images/logo.svg`
- **Design:** Blue rounded square background with white curved "B" letter and yellow accent
- **Format:** SVG (scalable), PNG for specific uses

### Logo Variants
- **Simplified Logo:** `/public/images/logo-simple.svg` (for small sizes)
- **Favicon:** `/public/favicon.svg` (32x32px)
- **Apple Touch Icon:** `/public/apple-touch-icon.svg` (180x180px)

### Logo Clear Space
- Maintain a minimum clear space equal to the height of the "B" letter around all sides
- Never place the logo on busy backgrounds that reduce visibility

### Logo Don'ts
- ❌ Don't distort or stretch the logo
- ❌ Don't change the logo colors
- ❌ Don't add effects (shadows, glows, gradients)
- ❌ Don't rotate the logo
- ❌ Don't place on low-contrast backgrounds

---

## 3. Color Palette

### Primary Colors

#### Brand Blue
- **Hex:** `#0e56a4`
- **RGB:** 14, 86, 164
- **Usage:** Primary buttons, links, headers, primary branding
- **CSS Variable:** `--color-blue-primary`

#### Brand Blue Dark (Hover)
- **Hex:** `#0a3f79`
- **RGB:** 10, 63, 121
- **Usage:** Hover states for primary blue elements
- **CSS Variable:** `--color-blue-primary-dark`

#### Brand Yellow (Accent)
- **Hex:** `#e9c500`
- **RGB:** 233, 197, 0
- **Usage:** Accents, highlights, call-to-action elements
- **CSS Variable:** `--color-yellow-primary`

#### Brand Yellow Dark (Hover)
- **Hex:** `#e3b600`
- **RGB:** 227, 182, 0
- **Usage:** Hover states for yellow elements
- **CSS Variable:** `--color-yellow-primary-dark`

### Secondary Colors

#### Light Cream (Background)
- **Hex:** `#F9F4D0`
- **RGB:** 249, 244, 208
- **Usage:** Primary background color, section backgrounds
- **CSS Variable:** `--color-cream`

#### Light Blue Background
- **Hex:** `#f2f7fc`
- **RGB:** 242, 247, 252
- **Usage:** Alternative section backgrounds
- **CSS Variable:** `--color-light-blue-bg`

#### Green (Teal) - Success
- **Hex:** `#00AB89`
- **RGB:** 0, 171, 137
- **Usage:** Success states, positive indicators, "after" images
- **CSS Variable:** `--color-green-primary`

#### Red Accent
- **Hex:** `#d64045`
- **RGB:** 214, 64, 69
- **Usage:** Error states, "before" images, urgent actions
- **CSS Variable:** `--color-red-accent`

#### Dark Text
- **Hex:** `#1b365d`
- **RGB:** 27, 54, 93
- **Usage:** Body text, headings
- **CSS Variable:** `--color-dark-text`

### Color Usage Guidelines
- Use **Brand Blue** for primary actions and trust-building elements
- Use **Brand Yellow** sparingly for accents and highlights
- Use **Light Cream** as the primary background to create a warm, inviting feel
- Use **Green** for success messages and positive transformations
- Use **Red Accent** for error states and attention-grabbing elements

---

## 4. Typography

### Font Families
- **Primary:** Inter (sans-serif)
- **Secondary:** Poppins (sans-serif)
- **Fallback:** System UI, sans-serif

### Font Weights
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

### Typography Scale

#### Headings
- **H1:** 3rem (48px) - Bold - Hero sections
- **H2:** 2.5rem (40px) - Bold - Main section titles
- **H3:** 2rem (32px) - Bold - Subsection titles
- **H4:** 1.5rem (24px) - Semibold - Card titles
- **H5:** 1.25rem (20px) - Semibold - Small headers
- **H6:** 1rem (16px) - Semibold - Labels

#### Body Text
- **Large:** 1.25rem (20px) - Regular - Intro paragraphs
- **Body:** 1rem (16px) - Regular - Standard text
- **Small:** 0.875rem (14px) - Regular - Captions, labels
- **Tiny:** 0.75rem (12px) - Regular - Fine print

### Line Height
- **Headings:** 1.2 - 1.3
- **Body:** 1.5 - 1.6
- **UI Elements:** 1.4

---

## 5. Spacing System

### Base Unit: 4px

#### Spacing Scale
- **xs:** 4px (0.25rem)
- **sm:** 8px (0.5rem)
- **md:** 16px (1rem)
- **lg:** 24px (1.5rem)
- **xl:** 32px (2rem)
- **2xl:** 48px (3rem)
- **3xl:** 64px (4rem)
- **4xl:** 96px (6rem)

#### Component Spacing
- **Sections:** 64-96px (4-6rem) vertical padding
- **Cards:** 24-32px (1.5-2rem) padding
- **Buttons:** 12px vertical, 24px horizontal
- **Form Fields:** 8-12px vertical, 16px horizontal

---

## 6. Components

### Buttons

#### Primary Button
```css
background: var(--color-blue-primary);
color: white;
padding: 12px 24px;
border-radius: 8px;
font-weight: 600;
```

#### Secondary Button
```css
background: var(--color-yellow-primary);
color: var(--color-dark-text);
padding: 12px 24px;
border-radius: 8px;
font-weight: 600;
```

#### Button States
- **Hover:** Reduce opacity to 90% or use dark variant
- **Active:** Scale to 98%
- **Disabled:** 50% opacity, no pointer events

### Cards
- **Border Radius:** 12-16px
- **Shadow:** Subtle (0 2px 8px rgba(0,0,0,0.1))
- **Padding:** 24-32px
- **Background:** White or Light Cream

### Forms
- **Input Border:** 1px solid #d1d5db
- **Input Focus:** 2px solid Brand Blue
- **Input Border Radius:** 8px
- **Label:** Semibold, 14px, Dark Text

### Images
- **Border Radius:** 12px for cards, 16px for large images
- **Aspect Ratios:**
  - Hero: 16:9
  - Gallery: 4:3
  - Thumbnails: 1:1

---

## 7. Iconography

### Style
- Use outline style icons primarily
- Solid icons for emphasis
- Icon size: 20-24px for inline, 48-64px for features

### Icon Colors
- Default: Dark Text (#1b365d)
- Active/Hover: Brand Blue (#0e56a4)
- Success: Green (#00AB89)
- Error: Red Accent (#d64045)

### Emojis
We use emojis to add personality and improve scannability:
- 📍 Location
- 🏠 Property type
- 🎨 Design/Style
- ✨ After/Success
- 📷 Photos/Before
- 💡 Tips/Information
- 🏗️ Coming Soon
- ✅ Success/Complete

---

## 8. Photography Guidelines

### Image Style
- High quality, well-lit professional photos
- Warm tones that complement the cream background
- Show spacious, welcoming environments
- Focus on details and luxury touches

### Before/After Images
- Consistent angle and framing
- Same lighting conditions where possible
- Clear transformation visible
- High resolution (minimum 1200px width)

### Image Optimization
- Format: WebP with JPG fallback
- Maximum file size: 500KB for full-width images
- Lazy loading for images below the fold
- Responsive images with srcset

---

## 9. Accessibility Standards

### WCAG 2.1 AA Compliance

#### Color Contrast
- **Normal Text:** Minimum 4.5:1 contrast ratio
- **Large Text:** Minimum 3:1 contrast ratio
- **Brand Blue on White:** ✅ Passes (6.2:1)
- **Dark Text on Cream:** ✅ Passes (8.5:1)

#### Interactive Elements
- Minimum touch target size: 44x44px
- Focus states clearly visible
- Keyboard navigation support
- ARIA labels for screen readers

#### Content Structure
- Proper heading hierarchy (H1 → H2 → H3)
- Alt text for all images
- Semantic HTML elements
- Skip to main content link

---

## 10. Motion & Animation

### Timing
- **Fast:** 150ms - Hover states, small UI changes
- **Medium:** 300ms - Modals, dropdowns
- **Slow:** 500ms - Page transitions, large movements

### Easing
- **Standard:** cubic-bezier(0.4, 0, 0.2, 1)
- **Deceleration:** cubic-bezier(0.0, 0, 0.2, 1)
- **Acceleration:** cubic-bezier(0.4, 0, 1, 1)

### Animation Principles
- Subtle and purposeful
- Improve user experience, not distract
- Respect prefers-reduced-motion
- Smooth 60fps animations

---

## 11. Voice & Tone

### Brand Voice
- **Professional:** Expert knowledge, reliable information
- **Friendly:** Approachable, helpful, conversational
- **Confident:** Assertive without being pushy
- **Transparent:** Honest about processes and pricing

### Writing Guidelines
- Use active voice
- Keep sentences concise (15-20 words)
- Avoid jargon unless explaining it
- Be specific with numbers and details
- Use "you" and "we" to create connection

### Multilingual Considerations
- Arabic (RTL) and English (LTR) support
- Culturally appropriate content
- Professional translations
- Consistent terminology across languages

---

## 12. SEO & Meta Tags

### Page Titles
Format: `[Page Title] | Best of Bedz`
Max length: 60 characters

### Meta Descriptions
- 150-160 characters
- Include primary keyword
- Call to action
- Unique for each page

### Open Graph Images
- Size: 1200x630px
- Format: PNG or JPG
- Include logo and key message
- High quality (under 1MB)

---

## 13. Social Media Guidelines

### Profile Images
- Use primary logo on brand blue background
- Consistent across all platforms
- High resolution

### Cover Images
- Showcase beautiful properties
- Include "Best of Bedz" branding
- Update seasonally

### Post Style
- High-quality images
- Engaging captions
- Use brand colors in graphics
- Include relevant hashtags: #BestOfBedz #PropertyManagement #VacationRental

### Platforms
- Facebook: [@BestofBedz](https://www.facebook.com/BestofBedz/)
- Instagram: [@bestofbedz](https://www.instagram.com/bestofbedz)
- LinkedIn: [Best of Bedz](https://www.linkedin.com/company/best-of-bedz/)
- YouTube: [@BestofBedz-LLC](https://www.youtube.com/@BestofBedz-LLC)
- TikTok: [@bestofbedzofficial](https://www.tiktok.com/@bestofbedzofficial)

---

## 14. Technical Implementation

### CSS Variables
All brand colors are defined in `/app/globals.css`:
```css
--color-cream: #F9F4D0;
--color-blue-primary: #0e56a4;
--color-blue-primary-dark: #0a3f79;
--color-green-primary: #00AB89;
--color-yellow-primary: #e9c500;
--color-yellow-primary-dark: #e3b600;
--color-red-accent: #d64045;
--color-dark-text: #1b365d;
--color-light-blue-bg: #f2f7fc;
```

### Tailwind Usage
Access colors in Tailwind classes:
- `bg-blue-primary`
- `text-yellow-primary`
- `border-green-primary`
- etc.

---

## 15. Google Sheets Integration

### Form Submission Requirements

#### Environment Variables
Set in production environment:
```
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbzcdpdb1unzg6TJocWSxMPKCWnqJblQsVN_y1jQOab0ZY8RuNk4hNPFGCCAFIEbM/exec
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=[your-cloud-name]
```

#### Google Apps Script Code
```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  // Extract form data
  var row = [
    new Date(),
    data.fullName,
    data.email,
    data.phone,
    data.propertyName,
    data.propertyType,
    data.location,
    data.bedrooms,
    data.bathrooms,
    data.amenities,
    data.services,
    data.propertyImages, // Comma-separated Cloudinary URLs
    // Add more fields as needed
  ];
  
  sheet.appendRow(row);
  
  return ContentService
    .createTextOutput(JSON.stringify({status: 'success'}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

#### Image URL Format
Images are submitted as comma-separated Cloudinary URLs:
```
https://res.cloudinary.com/.../image1.jpg, https://res.cloudinary.com/.../image2.jpg
```

---

## 16. Cloudinary Integration

### Upload Widget Configuration
```javascript
uploadPreset: "property-photos"
cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
maxFiles: 20
maxFileSize: 10000000 (10MB)
clientAllowedFormats: ['jpg', 'jpeg', 'png', 'webp']
```

### Image Transformations
Use Cloudinary transformations for optimization:
- Automatic format selection (f_auto)
- Quality optimization (q_auto)
- Responsive sizing (w_auto)

---

## 17. Contact & Support

### Questions About Brand Guidelines
Contact: [brand@bestofbedz.com]

### Technical Implementation Support
GitHub Repository: [HASSANBOB533/bob-property-management]

---

## Version History
- **v1.0** (December 2024) - Initial brand guidelines document
- Updated colors to match official BOB brand palette
- Added comprehensive component and technical guidelines

---

**Remember:** Consistency is key to building a strong brand. Always refer to these guidelines when creating new content, designs, or features for Best of Bedz.
