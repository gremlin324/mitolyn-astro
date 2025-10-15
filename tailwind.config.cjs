/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f8',
          100: '#d9f0ee',
          200: '#b3e1dd',
          300: '#7eccc5',
          400: '#4eb0a8',
          500: '#329893',
          600: '#257b79',
          700: '#1f6461',
          800: '#1b504e',
          900: '#184442',
        },
        navy: {
          50: '#f7f8fa',
          100: '#eef1f5',
          200: '#dde3eb',
          300: '#bcc7db',
          400: '#9ba8c4',
          500: '#7a8aad',
          600: '#6b7a9a',
          700: '#5b6a87',
          800: '#4a5470',
          900: '#2c3e50',
        },
        coral: {
          50: '#fff5f3',
          100: '#ffe8e1',
          200: '#ffd0c3',
          300: '#ffb39e',
          400: '#ff8f6b',
          500: '#ff6b42',
          600: '#f55a2b',
          700: '#d94820',
          800: '#b23c1a',
          900: '#923217',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      spacing: {
        128: '32rem',
        144: '36rem',
        160: '40rem',
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(1rem)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
