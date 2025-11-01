// tailwind.config.js
/** @type {import('tailwindcss').Config} */
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
        primary: {
          DEFAULT: '#2A3A6F', // Dark Blue
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#2A3A6F', // Main dark blue
          600: '#24325d',
          700: '#1e294b',
          800: '#182039',
          900: '#121727',
        },
        accent: {
          DEFAULT: '#5D85C0', // Medium Blue
          50: '#f0f5ff',
          100: '#e0eaff',
          200: '#c7d7fe',
          300: '#a4bcfd',
          400: '#5D85C0', // Main medium blue
          500: '#4a76b0',
          600: '#3d6399',
          700: '#345182',
          800: '#2d446b',
          900: '#283a59',
        },
        brand: {
          teal: '#70C4C8', // Light Blue/Teal
          lavender: '#A3A6D7', // Lavender
          yellow: '#FDCB6E', // Warm Yellow
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#D2D2D2', // Light Gray
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}