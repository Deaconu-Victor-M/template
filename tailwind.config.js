/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

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
          400: '#F66137',
          500: '#F04941',
        },
        grey: {
          100: '#F2F0F0'
        },
      },
      borderRadius: {
        'small': '8px',
        'regular': '12px',
        'medium': '22px',
        'big': '44px',
        'full': '9999px', //buttons
      },
      boxShadow: {
        'big': '51px 52px 112.8px -13px rgba(0, 0, 0, 0.31)',
        'inner': '0px 0px 74.2px 30px rgba(0, 0, 0, 0.03) inset',
        'glow': '0px 0px 20px 12px rgba(242, 80, 60, 0.2)',
        'border-glow': '0px 0px 20px 0px rgba(245, 91, 50, 0.1), 0px 0px 20px 0px rgba(245, 91, 50, 0.1) inset',
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
      },
      keyframes: {
        'jump' : {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'jump': 'jump 0.5s ease-in-out',
      },

    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'animate-delay': (value) => ({
            animationDelay: value,
          }),
        },
        { values: theme('transitionDelay') }
      )
    }),
  ],
}

