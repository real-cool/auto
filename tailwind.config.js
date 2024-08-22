import plugin from 'tailwind-scrollbar'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,vue,ts}'],
  theme: {
    extend: {
      zIndex: {
        999: 999,
        9999: 9999
      },
      borderWidth: {
        0.5: "0.5px",
        1: "1px",
      },
      padding: () => {
        const padding = {}
        for (let i = 1; i <= 100; i++) {
          padding[i] = `${i / 4}rem`;
        }
        return padding
      },
      width: () => {
        const width = {}
        for (let i = 1; i <= 100; i++) {
          width[i] = `${i / 4}rem`;
        }
        return width
      },
      height: () => {
        const height = {}
        for (let i = 1; i <= 100; i++) {
          height[i] = `${i / 4}rem`;
        }
        return height
      },
      fontSize: {
        ss: '0.5rem',
        sm: '0.6rem',
        base: '0.75rem',
        md: '0.9rem',
      },
      colors: {
        default: {
          DEFAULT: '#232324',
          50: '#D0D0D2',
          100: '#C6C6C7',
          200: '#B1B1B3',
          300: '#9D9D9F',
          400: '#88888B',
          500: '#737377',
          600: '#5F5F62',
          700: '#4B4B4D',
          800: '#373739',
          900: '#232324',
          950: '#151516'
        },
        primary: {
          DEFAULT: "#629BF8",
          50: "#EBF2FE",
          100: "#D7E6FD",
          200: "#B0CDFB",
          300: "#89B4FA",
          400: "#629BF8",
          500: "#3B82F6",
          600: "#0B61EE",
          700: "#084BB8",
          800: "#063583",
          900: "#041F4D",
          950: "#021532",
        },
        info: {
          DEFAULT: "#8B5CF6",
          50: "#FFFFFF",
          100: "#F9F7FF",
          200: "#DED0FC",
          300: "#C2A9FA",
          400: "#A783F8",
          500: "#8B5CF6",
          600: "#6527F3",
          700: "#4A0CD6",
          800: "#3709A1",
          900: "#25066C",
          950: "#1C0451",
        },
        success: {
          DEFAULT: "#10B981",
          50: "#8CF5D2",
          100: "#79F3CB",
          200: "#53F0BC",
          300: "#2EEDAE",
          400: "#13DF9B",
          500: "#10B981",
          600: "#0C855D",
          700: "#075239",
          800: "#031E15",
          900: "#000000",
          950: "#000000",
        },
        warning: {
          DEFAULT: "#F59E0B",
          50: "#FCE4BB",
          100: "#FBDCA8",
          200: "#FACD81",
          300: "#F8BD59",
          400: "#F7AE32",
          500: "#F59E0B",
          600: "#C07C08",
          700: "#8A5906",
          800: "#543603",
          900: "#1E1401",
          950: "#030200",
        },
        danger: {
          DEFAULT: "#EF4444",
          50: "#FDEDED",
          100: "#FCDADA",
          200: "#F9B5B5",
          300: "#F58F8F",
          400: "#F26A6A",
          500: "#EF4444",
          600: "#E71414",
          700: "#B30F0F",
          800: "#800B0B",
          900: "#4C0707",
          950: "#320404",
        },
      },
    },

  },

  plugins: [
    plugin({nocompatible: true, preferredStrategy: 'pseudoelements'})
  ],
}

