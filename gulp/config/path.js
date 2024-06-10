import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        js: `internet-shop/${buildFolder}/js/`,
        css: `internet-shop/${buildFolder}/css/`,
        html: `${buildFolder}/html/`,
        images: `internet-shop/${buildFolder}/img/`,
        fonts: `internet-shop/${buildFolder}/fonts`,
        files: `internet-shop/${buildFolder}/files/`,
    },
    src: {
        js: `internet-shop/${srcFolder}/scripts/scripts.js`,
        images: `src/${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `internet-shop/${srcFolder}/img/**/*.svg`,
        scss: `internet-shop/${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/CBC_adaptive_layout/CBC_Main_Page/*.html`,
        files: `internet-shop/${srcFolder}/files/**/*.*`,
        svgIcons: `internet-shop/${srcFolder}/svgIcons/*.svg`,
    },
    watch: {
        js: `internet-shop/${srcFolder}/**/*.js`,
        scss: `internet-shop/${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/CBC_adaptive_layout/CBC_Main_Page/**/*.html`,
        images: `internet-shop/${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
        files: `internet-shop/${srcFolder}/files/**/*.*`
    },
    clean: `internet-shop/${buildFolder}`,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: 'test'
}