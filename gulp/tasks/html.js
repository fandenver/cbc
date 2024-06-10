import fileInclude from "gulp-file-include";
import webpHtmlnoSvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";

export const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "HTML",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(fileInclude())
        .pipe(app.plugins.replace(/scss\//g, '../src/CBC_adaptive_layout/scss/'))
        .pipe(app.plugins.replace(/images_adaptive_layout\//g, '../src/CBC_adaptive_layout/images_adaptive_layout/'))
        .pipe(app.plugins.replace(/scripts\//g, '../src/CBC_adaptive_layout/CBC_Main_Page/scripts/'))
        .pipe(app.plugins.if(
            app.isBuild,
            webpHtmlnoSvg()
            )
           )
        .pipe(app.plugins.if(
            app.isBuild,
            versionNumber({
                'value': '%DT%',
                'append': {
                    'key': '_v',
                    'to': [
                        'css',
                        'js',
                    ]
                },
                'output': {
                    'file': 'gulp/version.json'
                }
            })
            )
        )
        .pipe(app.gulp.dest(app.path.build.html))
        // .pipe(app.plugins.browsersync.stream());
}