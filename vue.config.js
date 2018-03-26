const StyleLintPlugin = require('stylelint-webpack-plugin');
const baseStyleLintPlugin = new StyleLintPlugin({
    configFile: './stylelint.config.js',
    files: ['**/*.scss'],
    syntax: 'scss',
});
const vueStyleLintPlugin = new StyleLintPlugin({
    configFile: './stylelint.config.vue.js',
    files: ['**/*.vue'],
    syntax: 'scss',
});

// Body of the config starts here.
module.exports = {
    configureWebpack: {
        plugins: [baseStyleLintPlugin, vueStyleLintPlugin]
    },
};
