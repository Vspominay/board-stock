/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#8BC83F',
                secondary: '#234F68',
                tertiary: '#252B5C',
                success: '#2dd36f',
                warning: '#ffc409',
                danger: '#eb445a',
                softGray: '#ECEDF3',
                barely: '#A1A5C1',
            },
            fontSize: {
                xs: ['12px', '18px'],
                sm: ['14px', '20px'],
                base: ['16px', '24px'],
                lg: ['20px', '26px'],
                xl: ['25px', '40px'],
            },
            fontWeight: {
                bold: 700,
                medium: 400,
                regular: 300
            },
            borderRadius: {
                default: '10px'
            }
        },
    },
    plugins: [],
}
