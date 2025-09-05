/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                slogan: 'var(--font-family-slogan)',
                header: 'var(--font-family-header)',
            },
            boxShadow: {
                custom: '0px 4px 48px 0px rgba(0, 0, 0, 0.25)',
            },
            screens: {
                s: '425px',
                lgx: '900px',
            },
            keyframes: {
                scrollLeft: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(calc(-1 * 4 * (320px + 20px)))' },
                },
                scrollRight: {
                    '0%': { transform: 'translateX(calc(-1 * 4 * (320px + 20px)))' },
                    '100%': { transform: 'translateX(0)' },
                },
            },
            animation: {
                scrollLeft: 'scrollLeft 50s linear infinite',
                scrollRight: 'scrollRight 50s linear infinite',
            },
        },
    },
    plugins: [],
};
