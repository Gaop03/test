const commonjs = require('@rollup/plugin-commonjs')

module.exports = {
    input: 'index.js',
    output: {
        file: 'lib/cli/bundle.cli.cjs',
        format: 'cjs',
    },
    plugins: [commonjs()],
}