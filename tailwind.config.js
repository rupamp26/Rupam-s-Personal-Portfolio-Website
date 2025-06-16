/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'premium-black': '#000000',
        'platinum': '#E5E4E2',
        'gold': '#FFD700',
        'silver': '#C0C0C0',
        'pearl': '#F8F8FF',
        'ivory': '#FFFFF0',
        'electric-blue': '#0080FF',
        'neon-cyan': '#00FFFF',
        'charcoal': '#36454F',
        'graphite': '#41424C',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'particle-float': 'particleFloat 8s ease-in-out infinite',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'premium': '0 0 50px rgba(255, 215, 0, 0.1), 0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'glow': '0 0 20px rgba(255, 215, 0, 0.3)',
        'glow-lg': '0 0 40px rgba(255, 215, 0, 0.6)',
      },
    },
  },
  plugins: [],
};