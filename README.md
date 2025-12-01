# Comics Portfolio by Fien De Doncker

> *"Art touches, science enlightens, together they can lead to action."*

A professional portfolio website showcasing science and storytelling comics at the intersection of research, art, and social justice. Built with Next.js and optimized for modern web performance.

🌐 **[View Live Portfolio](https://comics-fdedonck.vercel.app)** *(Deploy to Vercel to get your live URL)*

---

## 📖 About This Project

This portfolio is a growing collection of comics that make the invisible visible. Each piece combines rigorous research with artistic expression to create accessible and impactful visual narratives exploring complex topics ranging from climate science and social justice to personal reflections.

### The Artist

**Fien De Doncker** creates science and storytelling comics that bridge the gap between academic research and public understanding. Her work has been recognized in competitions and featured in various publications.

📩 **Contact**: fien.a.c.de.doncker[at]gmail.com

> ⚠️ **Please ask before sharing these comics elsewhere.**

---

## 🎨 Explore the Collections

### [**Figure 1A 2025**](#figure-1a-2025)
*Winner of the jury award (both comics) – Figure 1A Sci-Art Competition 2025*

- **Silent Robber**: Visual reflections on glacial erosion, landscapes, and the stories hidden beneath the ice.
- **Borrowed Shade**: Urban heat islands and social inequalities in cities.

### [**No Plane Adventures**](#no-plane-adventures)
A series of short comics from sustainable travels without taking the airplane.

### [**Other Comics**](#other-comics)
A collection of standalone stories:
- **Othering**: Comic inspired by the Border Forensics report on structural inequalities behind Swiss police-related deaths
- **Another one breathes the dust**: Op-ed for REVOLVE - social inequalities in car-related emissions and vulnerabilities in Geneva
- **Summer Palimpsest**: Overflowing with emotions
- **When the pain takes over**: Introspection and resilience
- **al-Ard (فلسطين)**: Reflections on land, loss, and solidarity
- **Line 3 replacement**: A story of water protectors and care for Earth

### [**Posters**](#posters)
Artistic posters made as gifts, capturing special moments and places.

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/brumasribera/comics-fdedonck.git
cd comics-fdedonck

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 🚢 Deployment

This project is optimized for deployment on **Vercel** (free tier available).

### Deploy to Vercel

1. **Push to GitHub** (if not already done)
   ```bash
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js
   - Click "Deploy"

3. **That's it!** Your site will be live in minutes with:
   - Automatic SSL certificates
   - Global CDN
   - Automatic deployments on every push

For detailed deployment instructions, see [README-DEPLOYMENT.md](./README-DEPLOYMENT.md).

---

## 🛠️ Tech Stack

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://react.dev/)** - UI library
- **CSS Modules** - Component-scoped styling
- **Next.js Image Optimization** - Automatic image optimization
- **Vercel** - Hosting and deployment platform

---

## 📁 Project Structure

```
comics-fdedonck/
├── app/                    # Next.js App Router
│   ├── layout.jsx         # Root layout with metadata
│   ├── page.jsx           # Home page
│   └── globals.css        # Global styles and CSS variables
├── components/             # React components
│   ├── Header.jsx         # Navigation header
│   ├── Hero.jsx           # Hero section
│   ├── Collections.jsx    # Collections container
│   ├── CollectionCard.jsx # Individual collection cards
│   ├── Lightbox.jsx       # Image lightbox modal
│   └── About.jsx          # About and contact section
├── public/                 # Static assets
│   ├── Figure 1A 2025/    # Figure 1A collection images
│   ├── No Plane Adventures/ # Travel comics
│   ├── Other comics/      # Standalone comics
│   └── Posters/           # Poster artwork
├── Figure 1A 2025/         # Original source files
├── No Plane Adventures/    # Original source files
├── Other comics/          # Original source files
├── Posters/               # Original source files
└── next.config.js         # Next.js configuration
```

> **Note**: The original comic files are preserved in the root directories. The `public/` folder contains copies used by the Next.js application.

---

## 🎨 Features

- ✨ **Modern, Responsive Design** - Beautiful UI that works on all devices
- 🖼️ **Image Lightbox Gallery** - Click any comic to view in full-screen
- 🧭 **Smooth Navigation** - Easy browsing between collections
- ⚡ **Optimized Performance** - Fast loading with Next.js Image optimization
- 📱 **Mobile-First** - Designed for mobile, tablet, and desktop
- 🔍 **SEO-Friendly** - Proper metadata and semantic HTML
- ♿ **Accessible** - Follows web accessibility best practices

---

## 🔧 Customization

### Update Content

Edit collection data in `components/Collections.jsx`:

```jsx
const collections = [
  {
    id: 'your-collection',
    title: 'Your Collection',
    subtitle: 'Subtitle here',
    description: 'Description here',
    items: [
      {
        title: 'Comic Title',
        description: 'Comic description',
        image: '/path/to/image.jpg',
        fullImage: '/path/to/full-image.jpg'
      }
    ]
  }
]
```

### Customize Styling

Edit CSS variables in `app/globals.css`:

```css
:root {
  --primary-color: #1a1a1a;
  --accent-color: #d4af37;
  /* ... more variables */
}
```

### Add New Images

1. Add images to the appropriate folder in `public/`
2. Update the collection data in `components/Collections.jsx`
3. Images will be automatically optimized by Next.js

---

## 📚 Original Repository Content

This project includes all the original comics and content from the [original Comics repository](https://github.com/fdedonck/Comics). The original README content has been preserved and integrated into this portfolio website.

### Original Collections

- **[Figure 1A 2025](./Figure%201A%202025/README.md)** - Sci-art competition winners
- **[No Plane Adventures](./No%20Plane%20Adventures/)** - Sustainable travel comics
- **[Other Comics](./Other%20comics/README.md)** - Standalone stories with detailed descriptions
- **[Posters](./Posters/README.md)** - Artistic posters

Each collection folder contains its own README with detailed information about the comics.

---

## 🤝 Contributing

This is a personal portfolio project. If you'd like to:
- **Feature or collaborate**: Contact fien.a.c.de.doncker[at]gmail.com
- **Report issues**: Open an issue on GitHub
- **Suggest improvements**: Pull requests are welcome!

---

## 📄 License

All comics and artwork are © Fien De Doncker. Please ask before sharing these comics elsewhere.

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Deployed on [Vercel](https://vercel.com)
- Fonts: [Inter](https://fonts.google.com/specimen/Inter) and [Playfair Display](https://fonts.google.com/specimen/Playfair+Display)

---

## 📧 Contact & Collaboration

**Fien De Doncker**  
📩 Email: fien.a.c.de.doncker[at]gmail.com

Feel free to browse the collections or download individual comics for personal reading. If you'd like to collaborate or feature my work, please get in touch.

---

*"Art touches, science enlightens, together they can lead to action."*
