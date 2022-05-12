import gulp from "gulp";
import autoprefixer from "gulp-autoprefixer";
import minifyCSS from "gulp-csso";
import gulpSass from "gulp-sass";
import nodeSass from "node-sass";
const sass = gulpSass(nodeSass);


const paths = {
    styles: {
        src: 'assets/scss/styles.scss',
        dest: 'src/static/styles',
        watch: 'assets/scss/**/*.scss'
    }
}

function styles () {
    return gulp
        .src(paths.styles.src)
        .pipe(sass())
        .pipe(autoprefixer({
            overrideBrowserslist: ["last 2 versions"],
            cascade: false
            })
        )
        .pipe(minifyCSS())
        .pipe(gulp.dest(paths.styles.dest))
}

const watchFiles = () => {
    gulp.watch(paths.styles.watch, styles);
};

const dev = gulp.series([styles, watchFiles]);

export default dev