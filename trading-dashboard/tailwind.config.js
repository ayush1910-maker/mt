/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0f172a', // very dark blue background
        'panel-bg': '#1e293b', // lighter panel background
        'accent-green': '#10b981', // green for positive numbers/buttons
        'accent-red': '#ef4444', // red for negative numbers/buttons
        'accent-blue': '#3b82f6', // blue for highlights
        'accent-yellow': '#f59e0b',
        'border-color': '#334155'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
