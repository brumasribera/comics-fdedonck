/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          900: '#171717',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: '1.5rem',
              fontWeight: '500',
              lineHeight: '1.5',
            },
            h2: {
              fontSize: '1.25rem',
              fontWeight: '500',
              lineHeight: '1.5',
            },
            h3: {
              fontSize: '1.125rem',
              fontWeight: '500',
              lineHeight: '1.5',
            },
          },
        },
      },
    },
  },
  plugins: [],
}

