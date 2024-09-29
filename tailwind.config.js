export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#ffff',
        secondary: '#3c6e71',
        background: '#0F0F19',
        textPrimary: '#2B4B4F',
        textSecondary: '#7F8C8D',
        accent: '#E74C3C',
        primaryHover: '#357ABD',
        accentHover: '#357ABD',
        textPrimary_transparent: 'rgba(74, 144, 226, 0.5)',
        colorCSS:"#42A5F5"
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}