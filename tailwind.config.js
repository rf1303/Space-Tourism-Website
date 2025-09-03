module.exports = {
    content: [
        "./**/*.html",
        "./**/*.js",
        "./**/*.jsx",
        "./**/*.ts",
        "./**/*.tsx",
        "./**/*.vue",
        "./**/*.svelte",
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],


    theme: {
        extend: {
            backgroundImage: {
                "tech-mobile": "url('./assets/images/technology/background-technology-mobile.jpg')",
                "tech-tablet": "url('./assets/images/technology/background-technology-tablet.jpg')",
                "tech-desktop": "url('./assets/images/technology/background-technology-desktop.jpg')",
            },
        },
    },
    plugins: [
    ],
    corePlugins: {
        backdropFilter: true,
    },
}

