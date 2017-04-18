import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
// import replace from 'rollup-plugin-replace';
// import uglify from 'rollup-plugin-uglify';
// import { minify } from 'uglify-js';

export default {
    entry: './combo.js',
    format: 'cjs',
    exports: 'named',
    dest: './dist/app.js',
    moduleName: 'app',
    useStrict: false,
    // external: [],
    plugins: [
        nodeResolve({
            jsnext: true,  // Default: false
            main: true
        }),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            babelrc: false,
            presets: [
                ['es2015', {
                    'modules': false
                }],
                // 以下顺序可置换
                'stage-1',
            ],
            plugins: [
                "external-helpers",
            ]
        }),
        // replace({
        // }),
        // uglify({}, minify),
    ]
};