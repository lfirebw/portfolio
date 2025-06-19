/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors:{
        'deep-space-black': '#0f1624',
        'dark-graphite-gray': '#1A1C1F',
        'gunmetal-gray': '#2D2F33',
        'vscode-blue': '#007ACC',
        'neon-cyan': '#00FFFF',
      },
      fontFamily: {
        monoplex: ['"IBM Plex Mono"', 'sans-serif'],
        sansinter: ['Inter', 'sans-serif'],
        spacegrotek: ['Space Grotesk', 'sans-serif']
      }
    },
  },
  plugins: [],
}

