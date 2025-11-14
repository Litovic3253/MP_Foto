# 📸 Professional Photographer Portfolio Website

A stunning, modern, and fully responsive photography portfolio built with React + Vite. Features interactive galleries, before/after sliders, and smooth animations.

## ✨ Features

- **Modern & Minimalist Design** - Clean, professional aesthetic
- **Fully Responsive** - Mobile, tablet, and desktop optimized
- **Interactive Portfolio Gallery** - Category filtering and lightbox viewer
- **Before/After Slider** - Interactive comparison tool for edited photos
- **Smooth Animations** - Powered by Framer Motion
- **Easy to Customize** - Single data file for all content
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Contact Form** - Ready for integration with backend

## 🚀 Quick Start

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Open your browser and visit: `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## 📁 Project Structure

```
foto_ssr/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Lightbox.jsx
│   │   └── BeforeAfterSlider.jsx
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── Portfolio.jsx
│   │   ├── BeforeAfter.jsx
│   │   └── Contact.jsx
│   ├── data.js            # ⭐ MAIN DATA FILE (edit this!)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/                 # Static assets
├── index.html
└── package.json
```

## 🎨 Customization Guide

### 1. Update Your Information

Open `src/data.js` and update:

```javascript
export const siteData = {
  photographer: {
    name: "Your Name", // Change to your name
    title: "Professional Photographer",
    bio: "Your bio here...",
    email: "your@email.com", // Your contact email
    phone: "+1 234 567 8900", // Your phone
  },

  social: {
    instagram: "https://instagram.com/your_username",
    telegram: "https://t.me/your_username",
    // ... update all social links
  },
};
```

### 2. Add Your Photos

**Portfolio Images:**

```javascript
portfolio: [
  {
    id: 1,
    title: "Your Photo Title",
    category: "Portrait", // Portrait, Wedding, Fashion, etc.
    image: "URL_TO_YOUR_IMAGE", // Replace with your image URL
    description: "Photo description",
  },
  // Add more photos...
];
```

**Before/After Photos:**

```javascript
beforeAfter: [
  {
    id: 1,
    title: "Retouching Example",
    description: "Description of editing",
    before: "URL_TO_BEFORE_IMAGE",
    after: "URL_TO_AFTER_IMAGE",
  },
  // Add more comparisons...
];
```

**Hero Image:**

```javascript
hero: {
  title: "Photographer",
  subtitle: "Your Name",
  description: "Your tagline",
  image: "URL_TO_HERO_IMAGE"  // Large background image
}
```

### 3. Change Colors

In `src/data.js`, update the theme:

```javascript
export const theme = {
  colors: {
    primary: "#000000", // Main color
    secondary: "#FFFFFF", // Background
    accent: "#D4AF37", // Gold accent (change to your brand color)
    gray: "#6B7280",
    lightGray: "#F3F4F6",
    darkGray: "#1F2937",
  },
};
```

### 4. Image Sources

You can use images from:

- **Your own files**: Place in `/public/images/` folder
  - Use as: `/images/your-photo.jpg`
- **Online URLs**: Direct image links
- **Cloud storage**: Dropbox, Google Drive, etc.
- **Image CDNs**: Cloudinary, Imgix, etc.

### 5. Add More Categories

To add portfolio categories, just use new category names:

```javascript
{
  id: 7,
  title: "New Photo",
  category: "Newborn",  // New category automatically appears
  image: "your-image-url"
}
```

## 🛠 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **React Router** - Navigation
- **Framer Motion** - Animations
- **React Icons** - Icon library

## 📱 Pages

1. **Home** (`/`)

   - Hero section with large image
   - About section
   - Features showcase
   - Recent work preview

2. **Portfolio** (`/portfolio`)

   - Filterable gallery
   - Category buttons
   - Lightbox image viewer
   - Hover effects

3. **Before/After** (`/before-after`)

   - Interactive sliders
   - Drag to compare
   - Mobile-friendly
   - Edit descriptions

4. **Contact** (`/contact`)
   - Contact form
   - Contact information
   - Social media links
   - Availability schedule

## 🎯 Tips for Best Results

### Image Recommendations:

- **Portfolio photos**: 800-1200px width, 3:4 aspect ratio
- **Hero image**: 1920x1080px or larger
- **Before/After**: Same dimensions for both images
- **Format**: JPG (optimized) or WebP
- **File size**: Under 500KB per image

### Content Tips:

- Use high-quality, professional photos
- Keep descriptions concise
- Add 6-12 portfolio pieces
- Include 3-4 before/after examples
- Update contact info and social links

## 🔧 Advanced Customization

### Fonts

Currently using:

- Headings: `Playfair Display`
- Body: `Inter`

To change fonts, edit in `src/index.css`:

```css
@import url("https://fonts.googleapis.com/css2?family=YourFont&display=swap");
```

### Contact Form Integration

The contact form is ready for backend integration. Connect to:

- EmailJS
- Formspree
- Your own API
- Netlify Forms

Update the `handleSubmit` function in `src/pages/Contact.jsx`

## 📦 Deployment

### Netlify

```bash
npm run build
# Drag the 'dist' folder to Netlify
```

### Vercel

```bash
npm run build
# Deploy the 'dist' folder
```

### GitHub Pages

```bash
npm run build
# Upload 'dist' folder to gh-pages branch
```

## 🎨 Design Features

- Smooth scroll animations
- Hover effects on images
- Mobile-responsive menu
- Lightbox image viewer
- Interactive before/after slider
- Professional color scheme
- Modern typography
- Card-based layouts

## 📝 License

Free to use for personal and commercial projects.

## 🤝 Support

For questions or issues:

1. Check the `data.js` file first
2. Ensure all image URLs are working
3. Clear browser cache
4. Check console for errors

## 🌟 Show Your Work

Share your portfolio and tag us! We'd love to see what you create.

---

**Made with ❤️ for photographers who want to showcase their work beautifully.**
