const config = require('./stylelint.config');

config.processors = [
    '@mapbox/stylelint-processor-arbitrary-tags'
];

module.exports = config;
