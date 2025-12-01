# Comics Portfolio - Next.js Deployment Guide

This is a professional portfolio website for Fien De Doncker's comics, built with Next.js and optimized for Vercel deployment.

## 🚀 Quick Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Add Next.js portfolio site"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js
   - Click "Deploy"

3. **That's it!** Your site will be live in minutes.

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** - Vercel will guide you through the setup.

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.jsx         # Root layout
│   ├── page.jsx           # Home page
│   └── globals.css        # Global styles
├── components/             # React components
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Collections.jsx
│   ├── CollectionCard.jsx
│   ├── Lightbox.jsx
│   └── About.jsx
├── public/                 # Static assets (images)
│   ├── Figure 1A 2025/
│   ├── No Plane Adventures/
│   ├── Other comics/
│   └── Posters/
└── next.config.js          # Next.js configuration
```

## 🛠️ Local Development

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Features

- ✅ Modern, responsive design
- ✅ Image lightbox gallery
- ✅ Smooth scrolling navigation
- ✅ Optimized images with Next.js Image component
- ✅ SEO-friendly metadata
- ✅ Fast loading times
- ✅ Mobile-first approach

## 📝 Notes

- Images are served from the `public/` directory
- The site uses Next.js App Router (latest Next.js architecture)
- All components are client-side rendered where needed
- The build generates static pages for optimal performance

## 🔧 Customization

- **Colors**: Edit CSS variables in `app/globals.css`
- **Content**: Update collection data in `components/Collections.jsx`
- **Styling**: Modify component CSS files in `components/`

## 📧 Contact

For questions about deployment or customization, refer to the contact information in the About section of the site.

