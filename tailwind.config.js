/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'scroll-left': 'scroll-left var(--scroll-speed, 40s) linear infinite',
                'scroll-right': 'scroll-right var(--scroll-speed, 40s) linear infinite',
                'gradient': 'gradient 8s linear infinite',
            },
            colors: { // Custom colors matching index.css
                navy: {
                    900: '#0f172a',
                    950: '#020617',
                },
                gold: {
                    500: '#f59e0b',
                    600: '#d97706',
                },
                // blue-500 is standard Tailwind but we can explicit define if needed, 
                // but standard colors like blue and orange should work if they are default.
                // However, user might have stripped defaults or wants specific hex codes.
                // Let's add them to be safe as per index.css
            },
            fontFamily: {
                heading: ['Outfit', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
            keyframes: {
                'scroll-left': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                'scroll-right': {
                    '0%': { transform: 'translateX(-50%)' },
                    '100%': { transform: 'translateX(0)' },
                },
                'gradient': {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center'
                    },
                },
            },
        },
    },
    plugins: [],
}
