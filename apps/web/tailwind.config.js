/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './modules/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            mono: [
                'var(--font-duospace)',
                // 'Duospace',
                'JetBrains Mono',
                'Menlo',
                'Monaco',
                'Consolas',
                '"Liberation Mono"',
                '"Courier New"',
                'monospace',
            ],
            sans: [
                "'Byron', 'Inter', system, -apple-system, '.SFNSText-Regular', 'San Francisco', 'Roboto', 'Segoe UI', 'Helvetica Neue', sans-serif",
            ],
        },
        extend: {
            colors: {
                'conjure-grey-10': '#161616',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
