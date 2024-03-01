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
        "purple": "#6A1CE5",
        "text-primary": "#080D26",
        "gradient-from": "#B75CFF",
        "gradient-to": "#671AE4",
        "vermilion": "#5a0220",
      },
      backgroundImage: {
        'texture': "url('/assets/bg-textura.png')",
      },
    },
    fontFamily: {
      'archivo-black': ['Archivo Black'],
      'poppins': ['Poppins'],
      'poppins-bold': ['Poppins-Bold'],
      'poppins-extrabold': ['Poppins-extraBold'],
    }
  },
  plugins: [],
}
export default config
