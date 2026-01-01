/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: '#0a0a0a',
                card: '#171717',
                primary: '#3b82f6', // Professional Blue
                secondary: '#64748b', // Slate
                accent: '#f59e0b', // Subtle Amber for highlights
                text: '#f3f4f6',
                muted: '#9ca3af',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
