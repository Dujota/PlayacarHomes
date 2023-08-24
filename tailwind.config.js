/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{js,ts,jsx,tsx}', './intro-template/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './plugins/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
        'blue-500': '#2276FC',
        'yellow-100': '#fef7da',
        blue: '#7297af',
        white: '#fff',
        slategray: {
          100: 'rgba(119, 126, 144, 0.2)',
          200: 'rgba(119, 126, 144, 0.05)',
        },
        lightslategray: 'rgba(114, 151, 175, 0.25)',
        black: '#000',
        gray: '#fcfcfd',
        grey: '#777e90',
        'paragraph-color': '#6f7487',
        aliceblue: '#eef9fe',
        'shades-of-purple-purple-96': '#f0effb',
        bg: '#f6fcff',
        whitesmoke: {
          100: '#f9f9f9',
          200: '#f1f1f1',
        },
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      screens: {
        lg: {
          max: '1200px',
        },
        md: {
          max: '960px',
        },
        sm: {
          max: '420px',
        },
      },
      // fontFamily: {
      //   poppins: 'Poppins',
      // },
      borderRadius: {
        xl: '20px',
        '3xs': '10px',
      },
    },
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {
//       colors: {
//         blue: '#7297af',
//         white: '#fff',
//         slategray: {
//           100: 'rgba(119, 126, 144, 0.2)',
//           200: 'rgba(119, 126, 144, 0.05)',
//         },
//         lightslategray: 'rgba(114, 151, 175, 0.25)',
//         black: '#000',
//         gray: '#fcfcfd',
//         grey: '#777e90',
//         'paragraph-color': '#6f7487',
//         aliceblue: '#eef9fe',
//         'shades-of-purple-purple-96': '#f0effb',
//         bg: '#f6fcff',
//         whitesmoke: {
//           100: '#f9f9f9',
//           200: '#f1f1f1',
//         },
//       },
//       fontFamily: {
//         poppins: 'Poppins',
//       },
//       borderRadius: {
//         xl: '20px',
//         '3xs': '10px',
//       },
//     },
//     fontSize: {
//       sm: '0.88rem',
//       '5xl': '1.5rem',
//       lg: '1.13rem',
//       mini: '0.94rem',
//       '17xl': '2.25rem',
//       base: '1rem',
//       '2xl': '1.31rem',
//       smi: '0.81rem',
//       lgi: '1.19rem',
//       inherit: 'inherit',
//     },
//     screens: {
//       lg: {
//         max: '1200px',
//       },
//       md: {
//         max: '960px',
//       },
//       sm: {
//         max: '420px',
//       },
//     },
//   },
//   corePlugins: {
//     preflight: false,
//   },
// };
