import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        fontFamily: {
            poppins: 'Poppins, sans-serif'
        },
        extend: {
            colors: {
                "green": '#9CDBA6',
                "tael": '#50B498',
                "nature": '#468585',
                "gradient": '#DEF9C4',
                "blue":"#478CCF",
                "vintage":"#F7E7DC",
                "btn-bg":"#405D72"
            },
            screens: {
                'laptopLg': '1160px',
                'laptopXl': '1440px',
            }
        }
    },

    plugins: [forms],
};
