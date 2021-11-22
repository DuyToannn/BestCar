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
    },
    plugins: [
        function ({ addComponents }) {
          addComponents({
            '.container': {
              width: '100%',
            //   marginLeft: 'auto',
            //   marginRight: 'auto',
            //   paddingLeft: '2rem',
            //   paddingRight: '2rem',
              '@screen sm': {
                maxWidth: '640px',
              },
              '@screen md': {
                maxWidth: '767px',
              },
              '@screen lg': {
                maxWidth: '1024px',
              },
              '@screen xl': {
                maxWidth: '1280px',
              },
            }
          })
        }
      ]
}