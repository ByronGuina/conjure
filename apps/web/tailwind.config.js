/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
        },
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
};
