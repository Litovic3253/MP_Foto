// ========================================
// DATA FILE - EASY TO UPDATE
// ========================================
// Replace image URLs with your own photos
// Simply update the URLs below to change all content

export const siteData = {
  // Personal Information
  photographer: {
    name: "Mishania SSR",
    title: "Профессиональный фотограф",
    bio: "Запечатлевая моменты, которые будут длиться вечно.",
    email: "mpavlukevic@gmail.com",
    phone: "+7 (919) 896-28-18",
  },

  // Social Media Links
  social: {
    instagram: "https://instagram.com/your_username",
    telegram: "https://t.me/LastJoudas",
    facebook: "https://facebook.com/your_username",
    whatsapp: "https://wa.me/79991234567",
  },

  // Portfolio Gallery Images
  // Replace these URLs with your actual photo URLs
  portfolio: [
    {
      id: 1,
      title: "3 этап Lite Drift",
      category: "Дрифт",
      image: "/public/drift/d1.jpg",
      description: "Natural light portrait session",
    },
    {
      id: 2,
      title: "3 этап Lite Drift",
      category: "Дрифт",
      image: "/public/drift/d2.jpg",
      description: "Beautiful wedding day memories",
    },
    {
      id: 3,
      title: "3 этап Lite Drift",
      category: "Дрифт",
      image: "/public/drift/d3.jpg",
      description: "High-fashion editorial shoot",
    },
    {
      id: 4,
      title: "Театралка",
      category: "Уличная фотосессия",
      image: "/public/nastia/n1.jpg",
      description: "Romantic couple photography",
    },
    {
      id: 5,
      title: "Театралка",
      category: "Уличная фотосессия",
      image: "/public/nastia/n2.jpg",
      description: "City lifestyle photography",
    },
    {
      id: 6,
      title: "Театралка",
      category: "Уличная фотосессия",
      image: "/public/nastia/n3.jpg",
      description: "Outdoor portrait session",
    },
    {
      id: 7,
      title: "Пушкинская",
      category: "Осенняя фотосессия",
      image: "/public/ira/i1.jpg",
      description: "Beautiful outdoor landscape",
    },
    {
      id: 8,
      title: "Пушкинская",
      category: "Осенняя фотосессия",
      image: "/public/ira/i2.jpg",
      description: "Beautiful outdoor landscape",
    },
    {
      id: 9,
      title: "Пушкинская",
      category: "Осенняя фотосессия",
      image: "/public/ira/i3.jpg",
      description: "Beautiful outdoor landscape",
    },
  ],

  // Video Portfolio
  // Add your video URLs (YouTube, Vimeo, or direct links)
  videos: [
    {
      id: 1,
      title: "Фильм 3 этапа lite drift",
      category: "Дрифт",
      url: "/public/video/lite drift 3.mp4", // Замените на свою ссылку
      thumbnail: "/public/drift/d1.jpg",
      description: "Видео с соревнований",
    },
  ],

  // Before/After Images
  // For best results, use images with same dimensions
  // orientation: 'horizontal' или 'vertical'
  beforeAfter: [
    {
      id: 1,
      title: "Профессиональная ретушь",
      description: "Ретушь кожи и цветокоррекция",
      before: "/public/street/d1.png",
      after: "/public/street/d2.png",
      orientation: "horizontal", // или "vertical"
    },
  ],

  // Hero Section
  hero: {
    title: "Фотограф",
    subtitle: "Михаил Паулюкевичус",
    description: "Soul Street Raser",
    image: "/public/back.jpg",
  },
};

// Color Theme - Easy to customize
export const theme = {
  colors: {
    primary: "#000000", // Black
    secondary: "#FFFFFF", // White
    accent: "#D4AF37", // Gold
    gray: "#6B7280", // Gray
    lightGray: "#F3F4F6", // Light Gray
    darkGray: "#1F2937", // Dark Gray
  },
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Inter', sans-serif",
  },
};
