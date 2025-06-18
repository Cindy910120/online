/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./composables/**/*.{js,ts}",
    "./utils/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        'tech-blue': '#06b6d4',
        'tech-dark': '#0f172a',
      },
      boxShadow: {
        'tech': '0 0 20px rgba(6, 182, 212, 0.3)',
        'tech-lg': '0 0 30px rgba(6, 182, 212, 0.5)',
      },
      animation: {
        'tech-shine': 'tech-shine 3s infinite',
        'button-shine': 'button-shine 0.6s ease-out',
      }
    },
  },
  plugins: [],
}
