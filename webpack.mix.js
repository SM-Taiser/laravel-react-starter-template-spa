const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/src/app.js', 'public/js')
   .js('resources/js/src/frontend_app.js', 'public/js')
   .sass('resources/sass/backend/app.scss', 'public/css')
   .sass('resources/sass/frontend/style.scss', 'public/frontend/css');

