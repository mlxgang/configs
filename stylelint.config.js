import { propertyOrdering, selectorOrdering } from 'stylelint-semantic-groups'

export default {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order'],
  rules: {
    'color-function-notation': 'legacy',
    'declaration-property-unit-allowed-list': {
      'font-size': ['rem'],
      '/^gap|^padding/': ['rem'],
    },
    'unit-allowed-list': ['%', 'deg', 'px', 'rem', 'ms', 'vh'],
    'selector-class-pattern': [
      '^[a-z][a-zA-Z0-9]+$',
      { resolveNestedSelectors: true },
    ],
    'declaration-empty-line-before': [
      'always',
      {
        ignore: [
          'after-comment',
          'after-declaration',
          'first-nested',
          'inside-single-line-block',
        ],
      },
    ],
    'order/order': selectorOrdering,
    'order/properties-order': propertyOrdering,
  },
}
