
/** @type {import('tailwindcss').Config} */

export default {

    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
          fontFamily:{
            zentry: ['zentri', 'sans-serif'],
            general: ['general', 'sans-serif'],
            'circular-web': ['circular-web', 'sans-serif'],
            'robert-medium': ['robert-medium', 'sans-serif'],
            'robert-regular': ['robert-regular', 'sans-serif'],
          }
        },
    },
    plugins: [],
}