/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#006A4E',
        'accent-gold': '#F59E0B',
        'tech-black': '#111827',
        'background': '#FAFAFA',
        'grid-lines': '#E5E5E5',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['JetBrains Mono', 'monospace'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'brutal': '6px 6px 0px 0px #111827',
        'brutal-gold': '6px 6px 0px 0px #F59E0B',
      },
      borderRadius: {
        card: '16px',
        'card-lg': '20px',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out',
      },
      keyframes: {
        fadeUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
