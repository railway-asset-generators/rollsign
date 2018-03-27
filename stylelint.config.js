module.exports = {
    'plugins': [
        'stylelint-order'
    ],
    'extends': 'stylelint-config-standard',
    'rules': {
        'order/order': [
            {
                'type': 'at-rule',
                'name': 'import'
            },
            'dollar-variables',
            'custom-properties',
            'at-variables',
            'at-rules',
            'declarations',
            {
                'type': 'at-rule',
                'name': 'media'
            },
            {
                'type': 'at-rule',
                'name': 'keyframes'
            },
            'rules'
        ],
        'order/properties-order': [
            [
                'position',
                'top',
                'right',
                'bottom',
                'left',
                'display',
                'float',
                'clear',
                'width',
                'height',
                'margin',
                'padding',
                'background',
                'border',
                'box-shadow',
                'font-family',
                'font-size',
                'color',
                'text-align',
                'text-transform',
                'cursor',
                'overflow',
                'z-index',
                'transition',
                'animation'
            ],
            {
                'unspecified': 'bottomAlphabetical'
            }
        ],
        'at-rule-no-unknown': [
            true,
            {
                'ignoreAtRules': ['util']
            }
        ],
        'indentation': 4,
        'no-empty-source': null,
        'font-family-name-quotes': 'always-unless-keyword',
        'function-url-quotes': 'never',
        'selector-attribute-quotes': 'always',
        'string-quotes': 'double',
        'at-rule-no-vendor-prefix': true,
        'media-feature-name-no-vendor-prefix': true,
        'property-no-vendor-prefix': true,
        'selector-no-vendor-prefix': true,
        'value-no-vendor-prefix': true,
        'color-named': 'never'
    }
};
