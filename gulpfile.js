var gulp = require("gulp");
var ts = require("gulp-typescript");
var mocha = require("gulp-mocha");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("compile",() =>
{ 
    return new Promise((resolve) =>
    {
        tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
        resolve();
    });
});
  
gulp.task("runUnitTests",() =>
{ 
    return new Promise((resolve) =>
    {
        gulp.src("dist/test/**/*.js", {read: false})
        .pipe(mocha({reporter: "nyan", exit: true}))
		.on("error", console.error);
        resolve();
    });
});

gulp.task("build", gulp.parallel("compile", "runUnitTests"));
