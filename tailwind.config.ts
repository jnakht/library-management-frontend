import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",                 // for Vite
    "./src/**/*.{js,ts,jsx,tsx}",   // for all React/TS files
  ],
  theme: {
    extend: {
    //   colors: {
    //     primary: "#ff8901",
    //     secondary: "#fb923c"
    //   },
      container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    }
      // screens: {
      //   sm: '640px',
      //   md: '768px',
      //   lg: '1024px',
      //   xl: '1280px',
      //   '2xl': '1400px',
      // }
    },
    // extend: {},
  },
  plugins: [],
}

export default config
