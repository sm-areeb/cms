const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const nodePolyfills = require('rollup-plugin-polyfill-node');

module.exports = {
  input: 'src/admin/customWidgets.js',
  output: {
    file: '_site/admin/customWidgets.js',
    format: 'iife',
    name: 'customWidgets',
    globals: {
      crypto: 'node:crypto'
    }
  },
  plugins: [
    resolve(
      {browser: true}
    ),
    commonjs(),
    nodePolyfills()
  ]
};