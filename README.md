# 🍸 LuxBar - Premium Bartender Booking Service

A stunning, modern website for premium bartender booking services built with Next.js 14, featuring luxurious dark design, smooth animations, and full mobile responsiveness.

![LuxBar Preview](https://via.placeholder.com/1200x600/0a0a0a/d4af37?text=LuxBar+Premium+Bartender+Services)

## ✨ Features

### 🎨 **Premium Design**
- **Luxury dark theme** with gold accents (#d4af37)
- **Glass morphism effects** throughout the interface
- **Premium typography** using Playfair Display and Inter fonts
- **Smooth animations** powered by Framer Motion

### 📱 **Fully Responsive**
- **Mobile-first design** optimized for all devices
- **Touch-friendly interface** with proper spacing
- **Responsive navigation** with elegant mobile menu
- **Optimized images** with Next.js Image component

### 🚀 **Modern Tech Stack**
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **shadcn/ui** for UI components
- **Lucide React** for icons

### 🎯 **Key Sections**
- **Hero Section** - Compelling intro with stats and CTAs
- **About Section** - Company story and credentials
- **Services Section** - Event types and offerings
- **Gallery Section** - Professional photos with filtering
- **Testimonials Section** - Client reviews with smooth carousel
- **Contact Section** - Booking form and contact information

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Quick Start

```bash
# Clone the repository
git clone https://github.com/ransikasilva/Bartender-Booking.git
cd Bartender-Booking

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Navigate to http://localhost:3000
```

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Type checking
npm run type-check   # Run TypeScript compiler
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and theme
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── favicon.ico
├── components/
│   ├── ui/                  # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── textarea.tsx
│   ├── layout/              # Layout components
│   │   ├── Header.tsx       # Navigation header
│   │   └── Footer.tsx       # Site footer
│   ├── sections/            # Page sections
│   │   ├── Hero.tsx         # Hero section
│   │   ├── About.tsx        # About section
│   │   ├── Services.tsx     # Services section
│   │   ├── Gallery.tsx      # Photo gallery
│   │   ├── Testimonials.tsx # Client reviews
│   │   └── Contact.tsx      # Contact form
│   └── common/
│       └── ScrollAnimations.tsx  # Reusable animations
├── lib/
│   └── utils.ts             # Utility functions
└── public/
    └── images/              # Image assets
```

## 🎨 Design System

### Colors
- **Primary Black**: `#0a0a0a`
- **Secondary Black**: `#1a1a1a`
- **Accent Gold**: `#d4af37`
- **Light Gold**: `#f4e4a1`
- **White**: `#ffffff`
- **Gray**: `#6b7280`

### Typography
- **Display Font**: Playfair Display (headings)
- **Body Font**: Inter (body text)
- **Weights**: 300, 400, 500, 600, 700, 900

### Key Features
- **Glass Morphism**: `backdrop-filter: blur(10px)`
- **Smooth Animations**: Spring physics with Framer Motion
- **Responsive Grid**: Mobile-first approach
- **Touch Friendly**: Optimized for mobile interaction

## 📱 Mobile Optimization

### ✅ Responsive Features
- **Hero Section**: Responsive text scaling and button layouts
- **Navigation**: Mobile-friendly hamburger menu with backdrop
- **Gallery**: 2-column mobile grid with responsive filters
- **Contact Form**: Mobile-optimized form fields and spacing
- **Footer**: Compact mobile layout

### 🎯 Performance
- **Next.js Image**: Optimized image loading
- **Font Optimization**: Efficient Google Fonts loading
- **Code Splitting**: Automatic route-based splitting
- **SEO Ready**: Proper meta tags and semantic HTML

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Build the project
npm run build

# Deploy to Vercel
vercel --prod
```

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🛡️ Environment Variables

Create a `.env.local` file for environment-specific variables:

```bash
# Example environment variables
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_CONTACT_EMAIL=booking@luxbar.com
```

## 🎯 Customization

### Changing Colors
Edit the CSS variables in `src/app/globals.css`:

```css
:root {
  --primary: #d4af37;    /* Gold accent */
  --background: #0a0a0a;  /* Primary black */
  --card: #1a1a1a;       /* Secondary black */
}
```

### Adding New Sections
1. Create component in `src/components/sections/`
2. Import and add to `src/app/page.tsx`
3. Update navigation in `src/components/layout/Header.tsx`

### Modifying Content
- **Company Info**: Update in Footer.tsx and About.tsx
- **Services**: Modify services array in Services.tsx
- **Testimonials**: Update testimonials array in Testimonials.tsx
- **Gallery**: Replace images in `public/images/` folder

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact & Support

- **Website**: [Your Website URL]
- **Email**: [Your Email]
- **GitHub**: [@ransikasilva](https://github.com/ransikasilva)

## 🙏 Acknowledgments

- **Design Inspiration**: Premium hospitality websites
- **Tech Stack**: Next.js, Tailwind CSS, Framer Motion teams
- **UI Components**: shadcn/ui library
- **Icons**: Lucide React

---

**Built with ❤️ for the hospitality industry**

*Creating extraordinary experiences, one website at a time.*
