/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        'neue': ['"Neue Regrade"', 'sans-serif'],
      },
      fontWeight: {
        'light': 300,
        'regular': 400, // in use - Inter
        'medium': 500,
        'semibold': 600, // in use - Neue Regrade, Inter
        'bold': 700,
        'extrabold': 800, // in use - Neue Regrade
      },
      colors: {
        primary: {
          50: '#FFFCFB', // Background
          400: '#F55C30',
          500: '#F04941',
        },
        grey: {
          100: '#F2F0F0'
        },
      },
      borderRadius: {
        'small': '6px',
        'regular': '12px',
        'medium': '22px',
        'big': '44px',
        'full': '9999px', //buttons
      },
      boxShadow: {
        'big': '51px 52px 112.8px -13px rgba(0, 0, 0, 0.31)',
      },
      screens: {
        phone: "375px",
        // => @media (min-width: 375px) { ... }

        tablet: "440px",
        // => @media (min-width: 440px) { ... }

        tablet_landscape: "768px",
        // => @media (min-width: 768px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }

        higher: "1440px",
        // => @media (min-width: 1440px) { ... }

      },
      maxWidth: {
        'screen': '1440px',
      }
    },
  },
  plugins: [],
}

