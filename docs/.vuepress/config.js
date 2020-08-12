require('dotenv').config()
const webpack = require('webpack')
module.exports = {
    configureWebpack: () => {
        return { plugins: [new webpack.EnvironmentPlugin({ ...process.env })] }
    },
    title: process.env.TITLE,
    description: process.env.DESCRIPTION,
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
