const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');

module.exports = {
  input: 'src/admin/customWidgets.js',
  output: {
    file: '_site/admin/customWidgets.js',
    format: 'iife',
    name: 'customWidgets'
  },
  plugins: [
    resolve(),
    commonjs(),
  ]
};