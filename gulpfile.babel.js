import gulp from 'gulp';
import gulpPostcss from 'gulp-postcss';
import postcss from 'postcss';

/*
 * ClassPrefix postcss plugin
 *
 * @param {string} prefix
 * @param {string}
 */
const classPrefix = (prefix, options) => {
    options = options || {};
    return function(root) {
        root.walkRules(rule => {
            if (!rule.selectors) return rule;
            rule.selectors = rule.selectors.map(selector => {
                if (!isClassSelector(selector)) return '.' + prefix + selector;
                let classes = selector.split('.');
                return classes.map(clss => {
                    if (classMatchesTest(clss, options.ignore) || clss.trim().length === 0) return clss;
                        return prefix + '.' + clss;
                    }).join('.');
            });
        });
    };
}



/**
 * Determine if selector
 * is a class
 *
 * @param {string} selector
 * @return {bool}
 */
const isClassSelector = selector => selector.indexOf('.') === 0;



/**
 * Determine if class passes test
 *
 * @param {string} clss
 * @param {string} test
 */
const classMatchesTest = (clss, test) => {
    if(!test) return false;
    clss = clss.trim();
    if(test instanceof RegExp) return test.exec(clss);

    if(Array.isArray(test)) {
        let tests = test;
        test = undefined;
        return tests.some(function(test) {
            if(test instanceof RegExp) return test.exec(clss);
            else return clss === test;
        });
    }

    return clss === test;
}



gulp.task('fix-css', () => {
    gulp.src('chrome_extension/app.js.css')
        .pipe(gulpPostcss([
            postcss.plugin('postcss-class-prefix', classPrefix)('Pumgrana__ac863f3 ')
        ]))
        .pipe(gulp.dest('chrome_extension/'));
})
