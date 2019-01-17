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

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');
mix.copy('node_modules/admin-lte/dist/css/adminlte.css', 'public/css/adminlte.css')
    .copy('node_modules/admin-lte/dist/js/adminlte.js', 'public/js/adminlte.js')
    .copy('node_modules/jquery-slimscroll/jquery.slimscroll.min.js', 'public/plugins/slimScroll/jquery.slimscroll.min.js')
    .copy('node_modules/jquery-knob/js/jquery.knob.js', 'public/plugins/knob/jquery.knob.js')
    .copy('node_modules/morris.js/morris.css', 'public/plugins/morris/morris.css')
    .copy('node_modules/morris.js/morris.js', 'public/plugins/morris/morris.min.js')
    .copy('node_modules/jvectormap-next/jquery-jvectormap.css', 'public/plugins/jvectormap/jquery-jvectormap-1.2.2.css')
    .copy('node_modules/jvectormap-next/jquery-jvectormap.min.js', 'public/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js')
    .copy('node_modules/jvectormap-next/tests/assets/jquery-jvectormap-world-mill-en.js', 'public/plugins/jvectormap/jquery-jvectormap-world-mill-en.js')
    // .copy('node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.css', 'public/plugins/datepicker/datepicker.css')
    // .copy('node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker3.css', 'public/plugins/datepicker/datepicker3.css')
    // .copy('node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.js', 'public/plugins/datepicker/bootstrap-datepicker.js')
    // above bootstrap-datepicker files are not working..
    .copy('node_modules/admin-lte/plugins/datepicker/datepicker3.css', 'public/plugins/datepicker/datepicker3.css')
    .copy('node_modules/admin-lte/plugins/datepicker/bootstrap-datepicker.js', 'public/plugins/datepicker/bootstrap-datepicker.js')
    .copy('node_modules/bootstrap-daterangepicker/daterangepicker.css', 'public/plugins/daterangepicker/daterangepicker-bs3.css')
    .copy('node_modules/bootstrap-daterangepicker/daterangepicker.js', 'public/plugins/daterangepicker/daterangepicker.js')
    .copy('node_modules/jquery-sparkline/jquery.sparkline.min.js', 'public/plugins/sparkline/jquery.sparkline.min.js')
    .copy('node_modules/fastclick/lib/fastclick.js', 'public/plugins/fastclick/fastclick.js')
    .copy('node_modules/icheck/icheck.min.js', 'public/plugins/icheck/icheck.min.js');
mix.copyDirectory('node_modules/admin-lte/dist/img', 'public/img')
    .copyDirectory('node_modules/admin-lte/dist/js/pages', 'public/dist/js/pages')
    .copyDirectory('node_modules/ionicons/dist/css', 'public/plugins/ionicons/css')
    .copyDirectory('node_modules/ionicons/dist/fonts', 'public/plugins/ionicons/fonts')
    .copyDirectory('node_modules/icheck/skins', 'public/plugins/icheck/skins');

