/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './modules/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
            sans: [
                "'Byron', 'Inter', system, -apple-system, '.SFNSText-Regular', 'San Francisco', 'Roboto', 'Segoe UI', 'Helvetica Neue', sans-serif",
            ],
        },
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
};
