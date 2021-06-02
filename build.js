const fs = require("fs");
const ejsRenderFile = require("ejs").renderFile;
const { src, dest } = require("gulp");
const concat = require("gulp-concat");
const cleancss = require("gulp-clean-css");
const sort = require('gulp-sort');

ejsRenderFile(`src/index.ejs`)
.then(html => fs.writeFileSync(`index.html`, html))
.catch(err => console.error(err));

// CSS GENERATOR
src("src/**/*.css")
.pipe(sort())
.pipe(concat("index.css"))
.pipe(cleancss())
.pipe(dest("./"));