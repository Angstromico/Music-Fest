const {src, dest, watch, series} = require('gulp');
var sass = require('gulp-dart-sass');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const concat = require('gulp-concat');
const patchs = {
    scss: 'src/scss/**/*.scss',
    css: './shield/css',
    img: 'shield/img/**/*', 
    js: 'JavaScript/**/*.js',
    jf: './shield/JavaScript'
}
//CSS Utilities
const autoprefixer = require('autoprefixer');
const postcss = requiere('postcss');
const cssnano  = require('cssnano');
//Functions that turning file scss on css on expended or compress way
function experiment() {
    return src(patchs.scss)
    .pipe( sass({
        //outputStyle: 'expanded'
        outputStyle: 'compressed'
    }) )
    .pipe( postcss( [autoprefixer(), cssnano() ] ) )
    .pipe(dest(patchs.css))
}
function cssExpand() {
    return src(patchs.scss)
    .pipe( sass({
        outputStyle: 'expanded'
    }) )
    //.pipe( postcss(autoprefixer() )
    .pipe(dest(patchs.css))
}
function gulpScript() {
    return src(patchs.js)       
    .pipe(concat('bundle.js'))
    .pipe(dest(patchs.jf))
}
exports.experiment = experiment;
exports.expand = cssExpand;
//Logs any changes on scss file and executes a certain function when it happens 
function watchFiles() {
    watch(patchs.scss, experiment) //* only search on the main file **/*.scss search em'all
} 
function watchDog() {
    watch(patchs.scss, cssExpand);
    watch(patchs.js, gulpScript) 
} 
function watchExp() {
    watch(patchs.scss, experiment);
    watch(patchs.js, gulpScript) 
} 
exports.default = watchExp;
exports.eye = watchFiles; 
exports.dog = watchDog;
function reduceImg() {
    return src(patchs.img)
    .pipe( imagemin() )
    .pipe( dest('./shield/img'))
};
exports.reduce = reduceImg;
function transforImg()  {
    return src(patchs.img)
    .pipe(webp())
    .pipe(dest('./shield/img'))
};
exports.trans = transforImg;
exports.default = (gulpScript, watchDog);

