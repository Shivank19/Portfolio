/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary color system
        primary: {
          50: 'rgb(var(--color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--color-primary-900) / <alpha-value>)',
        },
        // Accent color system
        accent: {
          50: 'rgb(var(--color-accent-50) / <alpha-value>)',
          100: 'rgb(var(--color-accent-100) / <alpha-value>)',
          200: 'rgb(var(--color-accent-200) / <alpha-value>)',
          300: 'rgb(var(--color-accent-300) / <alpha-value>)',
          400: 'rgb(var(--color-accent-400) / <alpha-value>)',
          500: 'rgb(var(--color-accent-500) / <alpha-value>)',
          600: 'rgb(var(--color-accent-600) / <alpha-value>)',
          700: 'rgb(var(--color-accent-700) / <alpha-value>)',
          800: 'rgb(var(--color-accent-800) / <alpha-value>)',
          900: 'rgb(var(--color-accent-900) / <alpha-value>)',
        },
        // Highlight color system
        highlight: {
          50: 'rgb(var(--color-highlight-50) / <alpha-value>)',
          100: 'rgb(var(--color-highlight-100) / <alpha-value>)',
          200: 'rgb(var(--color-highlight-200) / <alpha-value>)',
          300: 'rgb(var(--color-highlight-300) / <alpha-value>)',
          400: 'rgb(var(--color-highlight-400) / <alpha-value>)',
          500: 'rgb(var(--color-highlight-500) / <alpha-value>)',
          600: 'rgb(var(--color-highlight-600) / <alpha-value>)',
          700: 'rgb(var(--color-highlight-700) / <alpha-value>)',
          800: 'rgb(var(--color-highlight-800) / <alpha-value>)',
          900: 'rgb(var(--color-highlight-900) / <alpha-value>)',
        },
        // App-specific colors
        app: {
          bg: {
            primary: 'rgb(var(--color-bg-primary) / <alpha-value>)',
            secondary: 'rgb(var(--color-bg-secondary) / <alpha-value>)',
            tertiary: 'rgb(var(--color-bg-tertiary) / <alpha-value>)',
            overlay: 'rgb(var(--color-bg-overlay) / <alpha-value>)',
            card: 'rgb(var(--color-bg-card) / <alpha-value>)',
            input: 'rgb(var(--color-bg-input) / <alpha-value>)',
          },
          text: {
            primary: 'rgb(var(--color-text-primary) / <alpha-value>)',
            secondary: 'rgb(var(--color-text-secondary) / <alpha-value>)',
            tertiary: 'rgb(var(--color-text-tertiary) / <alpha-value>)',
            muted: 'rgb(var(--color-text-muted) / <alpha-value>)',
            inverse: 'rgb(var(--color-text-inverse) / <alpha-value>)',
          },
          border: {
            primary: 'rgb(var(--color-border-primary) / <alpha-value>)',
            secondary: 'rgb(var(--color-border-secondary) / <alpha-value>)',
            accent: 'rgb(var(--color-border-accent) / <alpha-value>)',
          }
        }
      },
      boxShadow: {
        'primary': '0 10px 15px -3px rgb(var(--color-shadow-primary) / 0.1), 0 4px 6px -2px rgb(var(--color-shadow-primary) / 0.05)',
        'accent': '0 10px 15px -3px rgb(var(--color-shadow-accent) / 0.1), 0 4px 6px -2px rgb(var(--color-shadow-accent) / 0.05)',
        'highlight': '0 10px 15px -3px rgb(var(--color-shadow-highlight) / 0.1), 0 4px 6px -2px rgb(var(--color-shadow-highlight) / 0.05)',
        'primary-lg': '0 25px 50px -12px rgb(var(--color-shadow-primary) / 0.25)',
        'accent-lg': '0 25px 50px -12px rgb(var(--color-shadow-accent) / 0.25)',
        'highlight-lg': '0 25px 50px -12px rgb(var(--color-shadow-highlight) / 0.25)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, rgb(var(--color-primary-600)), rgb(var(--color-primary-800)))',
        'gradient-accent': 'linear-gradient(135deg, rgb(var(--color-accent-600)), rgb(var(--color-accent-800)))',
        'gradient-highlight': 'linear-gradient(135deg, rgb(var(--color-highlight-600)), rgb(var(--color-highlight-800)))',
        'gradient-primary-accent': 'linear-gradient(135deg, rgb(var(--color-primary-600)), rgb(var(--color-accent-600)))',
        'gradient-accent-highlight': 'linear-gradient(135deg, rgb(var(--color-accent-600)), rgb(var(--color-highlight-600)))',
        'gradient-app-bg': 'linear-gradient(135deg, rgb(var(--color-bg-primary)), rgb(var(--color-bg-secondary)))',
      }
    },
  },
  plugins: [],
};