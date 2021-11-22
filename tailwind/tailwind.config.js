module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                blue00: '#005383',
                yellowd3: '#d3d126'
            },
        },
        minWidth: {
            '150': '150px',

        },
        screens: {
            'sm-max': { 'max': '640px' },
            'md-max': { 'max': '768px' },
            'lg-max': { 'max': '1024px' },
            'xl-max': { 'max': '1280px' },
            '2xl-max': { 'max': '1536px' },
        },
    },
    plugins: []
}