/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Warm cream / paper
        cream: {
          50: '#FBF6E9',
          100: '#F5EDD7',
          200: '#EFE3C2',
          300: '#E6D5A8',
        },
        // Soft pastel navy
        forest: {
          900: '#152238',
          800: '#1C3050',
          700: '#243C64',
          600: '#2E4C7A',
          500: '#3A5E92',
        },
        // Ink / warm dark
        ink: {
          900: '#1A1612',
          800: '#26211B',
          700: '#3A322A',
          600: '#5C5044',
          500: '#7A6E5F',
          400: '#9D8F7E',
        },
        // Accents
        ochre: {
          400: '#D4A656',
          500: '#C19134',
          600: '#A5781E',
        },
        terra: {
          500: '#B86F4A',
          600: '#9A5634',
        },
      },
      fontFamily: {
        serif: ['"Lora"', 'Georgia', 'serif'],
        sans: ['"Geist"', '"Helvetica Neue"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) both',
        'shimmer': 'shimmer 8s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        shimmer: {
          '0%, 100%': { transform: 'translateX(-2%)' },
          '50%': { transform: 'translateX(2%)' },
        },
      },
    },
  },
  plugins: [],
}
