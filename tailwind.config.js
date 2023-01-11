/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {    
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
     'Marineblue': 'hsl(213, 96%, 18%)',
     'Purplishblue': 'hsl(243, 100%, 62%)',
     'Pastelblue': 'hsl(228, 100%, 84%)',
     'Lightblue': 'hsl(206, 94%, 87%)',
     'Strawberryred': 'hsl(354, 84%, 57%)'
    }
  },
  plugins: [],
}
