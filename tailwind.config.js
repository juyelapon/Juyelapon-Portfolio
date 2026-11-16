/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#09090B',
        indigo: {
          DEFAULT: '#6366F1',
          glow: 'rgba(99, 102, 241, 0.35)',
        },
        emerald: {
          DEFAULT: '#10B981',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.16) 0%, rgba(9, 9, 11, 0) 65%)',
      },
    },
  },
  plugins: [],
}
