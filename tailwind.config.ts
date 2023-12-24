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
        "primary": "#0D0C26",
        "text-primary": "#080D26",
        "gradient-from": "#B75CFF",
        "gradient-to": "#671AE4",
      },
      backgroundImage: {
        'texture': "url('/assets/bg-textura.png')",
      },
    },
    fontFamily: {
      'archivo-black': ['Archivo Black'],
      'poppins': ['Poppins'],
      'poppins-bold': ['Poppins-Bold'],
    }
  },
  plugins: [],
}
export default config
