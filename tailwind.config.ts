import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#992e2e',
        secondary: '#f9bebe',
        accent: '#b93737',
        text: '#180202',
        darkText: '#fde7e7',
        bg: '#fafafa',
        darkBg: '#050505',
      },
      screens: {
        xs: '400px'
      }
    },
  },
  plugins: [],
  darkMode: "class"
}
export default config
