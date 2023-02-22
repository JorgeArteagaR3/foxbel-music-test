/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#E86060",
                secondary: "#662323",
                softgray: "#BDBDBD",
                gray: "#828282",
                lightred: "#FF7676",
            },
        },
    },
    plugins: [],
};
