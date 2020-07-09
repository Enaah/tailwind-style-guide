module.exports = {
    title: 'Tailwind Design System',
    themeConfig: {
        sidebar: 'auto',
        lastUpdated: 'Last Updated', // string | boolean
    },
    stylus: {
        'include css': true,
        include: [
            './node_modules/../', // Shortcut references possible everywhere, e.g. @import 'node_modules/bla'
        ],
    },
    postcss: {
        plugins: [
            require('tailwindcss')('./tailwind.js'),
            require('autoprefixer'),
        ],
    },
}
