import gulp from "gulp";

import {path} from "./gulp/config/path.js";

import {plugins} from "./gulp/config/plugins.js";

global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins
}

import {reset} from "./gulp/tasks/reset.js";
import {html} from "./gulp/tasks/html.js";
import {scss} from "./gulp/tasks/scss.js";
import {js} from "./gulp/tasks/js.js";
import {images} from "./gulp/tasks/images.js";
import {otfToTtf, ttfToWoff, fontsStyle} from "./gulp/tasks/fonts.js";

function watcher() {
    gulp.watch(path.watch.html, {usePolling: true}, html);
    gulp.watch(path.watch.scss, {usePolling: true}, scss);
    gulp.watch(path.watch.js, {usePolling: true}, js);
    gulp.watch(path.watch.images, {usePolling: true}, images);
}

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

const mainTasks = gulp.series(fonts, gulp.parallel(html, scss, js, images));

const dev = gulp.series(reset, mainTasks, watcher);

const build = gulp.series(reset, mainTasks);

export {dev};
export {build};

gulp.task('default', dev);