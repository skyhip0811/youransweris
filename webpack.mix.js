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

mix.extract();

mix.js('resources/js/homepage.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');

mix.js('resources/js/chapterdetail.js', 'public/js')
    .sass('resources/sass/chapterdetail.scss', 'public/css');

mix.js('resources/js/searchbook.js', 'public/js');

mix.js('resources/js/template.js', 'public/js');

mix.js('resources/js/createchapter.js', 'public/js');
mix.js('resources/js/createbook.js', 'public/js');
mix.js('resources/js/login.js', 'public/js');