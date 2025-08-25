# Nikhil Bajantri - Portfolio Website

A modern, responsive portfolio website built with Astro.js, featuring a clean dark theme and comprehensive SEO optimization.

## 🚀 Features

### Responsive Design
- **Mobile-First Approach**: Optimized for all screen sizes from 320px to 4K displays
- **Flexible Grid System**: Uses CSS Grid and Flexbox for adaptive layouts
- **Touch-Friendly**: Optimized for mobile and tablet interactions
- **Progressive Enhancement**: Works on all devices with graceful degradation

### SEO Optimization
- **Comprehensive Meta Tags**: Open Graph, Twitter Cards, and structured data
- **Schema.org Markup**: Rich snippets for better search engine understanding
- **Sitemap.xml**: Automatic site indexing for search engines
- **Robots.txt**: Proper crawling instructions
- **Performance Optimized**: Fast loading times and Core Web Vitals compliance

### Technical Stack
- **Framework**: Astro.js for static site generation
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Satoshi Variable Font
- **Deployment**: Netlify with automatic builds

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px - 1600px
- **Large Desktop**: 1601px+

## 🎨 Design System

### Colors
- **Primary Background**: `#0a0a0a` (Dark)
- **Card Background**: `#1a1a1a` (Dark Card)
- **Neon Cyan**: `#00ffff` (Accent)
- **Neon Purple**: `#8b5cf6` (Secondary Accent)
- **Neon Green**: `#00ff88` (Success)

### Typography
- **Primary Font**: Satoshi Variable Font
- **Fallback**: Inter, Poppins, system-ui
- **Responsive Sizing**: 14px (mobile) to 16px (desktop)

## 🔧 Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/nick-devfolio.git
cd nick-devfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── About.astro     # Hero/About section
│   ├── Navigation.astro # Header navigation
│   ├── Skills.astro    # Skills showcase
│   ├── Projects.astro  # Projects grid
│   ├── Experience.astro # Work experience
│   ├── Timeline.astro  # Timeline component
│   ├── Contact.astro   # Contact form
│   └── Footer.astro    # Footer section
├── layouts/            # Page layouts
│   └── Layout.astro    # Main layout with SEO
├── pages/              # Route pages
│   ├── index.astro     # Home page
│   ├── blog.astro      # Blog page
│   ├── now.astro       # Now page
│   └── ...             # Other pages
└── assets/             # Static assets
```

## 📊 SEO Features

### Meta Tags
- Title and description optimization
- Open Graph tags for social sharing
- Twitter Card support
- Canonical URLs
- Robots meta directives

### Structured Data
- Person schema for personal information
- Organization schema for work details
- Breadcrumb navigation
- Social media profiles

### Performance
- Image lazy loading
- Font display optimization
- CSS and JS minification
- Preconnect to external domains
- DNS prefetching

## 🌐 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push to main branch

### Environment Variables
```env
# Add to Netlify environment variables if needed
NODE_ENV=production
```

## 📈 Analytics & Monitoring

### Google Analytics
- Track page views and user behavior
- Monitor Core Web Vitals
- Analyze mobile vs desktop usage

### Search Console
- Monitor search performance
- Submit sitemap for indexing
- Track keyword rankings

## 🔍 Accessibility

- **WCAG 2.1 AA Compliance**: High contrast ratios and keyboard navigation
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Focus Management**: Visible focus indicators
- **Skip Links**: Quick navigation for keyboard users
- **Alt Text**: Descriptive image alt attributes

## 📱 PWA Features

- **Manifest.json**: App-like installation experience
- **Service Worker**: Offline functionality (if implemented)
- **App Icons**: Multiple sizes for different devices
- **Theme Colors**: Consistent branding across platforms

## 🚀 Performance Optimizations

### Loading Speed
- **Image Optimization**: WebP format with fallbacks
- **Code Splitting**: Lazy loading of components
- **Minification**: Compressed CSS and JavaScript
- **Caching**: Browser and CDN caching strategies

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

- **Website**: [nikhilbajantri.dev](https://nikhilbajantri.dev)
- **GitHub**: [@programmer-nick234](https://github.com/programmer-nick234)
- **LinkedIn**: [Nikhil Bajantri](https://www.linkedin.com/in/nikhil-bajantri-dev)
- **Twitter**: [@nikkkkhil_2604](https://x.com/nikkkkhil_2604)

---

Built with ❤️ by Nikhil Bajantri using Astro.js and Tailwind CSS
