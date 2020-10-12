import { Config } from '@stencil/core'
import { postcss } from '@stencil/postcss'

const purgecss = require('@fullhuman/postcss-purgecss')({

  // Specify the paths to all of the template files in your project
  content: [
    './src/**/*.html',
    './src/**/*.tsx',
    // etc.
  ],

  // This is the function used to extract class names from your templates
  defaultExtractor: content => {
    // Capture as liberally as possible, including things like `h-(screen-1.5)`
    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
    return broadMatches
  }
})

export const config: Config = {
  namespace: 'uno',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'dist-custom-elements-bundle'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  plugins: [
    postcss({
      injectGlobalPaths: ['assets/styles/tailwind.css'],
      plugins: [
        require('postcss-import'),
        require('postcss-preset-env')({
          features: {
            'nesting-rules': true
          }
        }),
        require('tailwindcss'),
        require('autoprefixer')(),
        purgecss
      ]
    })
  ]
}
