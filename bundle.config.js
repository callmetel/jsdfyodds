// gulpfile.esm.js
import AssetBundler from "@userfrosting/gulp-bundle-assets";
import { src, dest } from "gulp";
import cleanCss from "gulp-clean-css";
import concatCss from "gulp-concat-css";
import uglify from "gulp-uglify";
import concatJs from "gulp-concat-js";
 
export function bundle() {
    const config = {
        bundle: {
            example: {
                scripts: [
                    "src/js/*.js"
                ],
                styles: [
                    "src/css/*.css"
                ]
            }
        }
    };
    const joiner = {
        Scripts(bundleStream, name) {
            return bundleStream
                .pipe(concatJs(name + ".js"))// example.js
                .pipe(uglify());
        },
        Styles(bundleStream, name) {
            return bundleStream
                .pipe(concatCss(name + ".css"))// example.css
                .pipe(cleanCss({
                    compatibility: "ie10"
                }));
        }
    };
 
    return src("src/**")
        .pipe(new AssetBundler(config, joiner))
        .pipe(dest("dist/"));
}
