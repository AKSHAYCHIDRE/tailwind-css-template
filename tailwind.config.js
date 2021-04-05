const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: 'hsl(207, 73%, 52%)',
          default: 'hsl(207, 73%, 57%)',
          darker: 'hsl(207, 73%, 44%)'
        }
      }
    }
  },
  variants: {},
  plugins: [
    plugin(function({ addVariant, e, postcss }) {
      addVariant('supports-grid', ({ container, separator }) => {
        const supportsRule = postcss.atRule({ name: 'supports', params: '(display: grid)' })
        supportsRule.append(container.nodes)
        container.append(supportsRule)
        supportsRule.walkRules(rule => {
          rule.selector = `.${e(`supports-grid${separator}${rule.selector.slice(1)}`)}`
        })
      })
    })
  ]
};



