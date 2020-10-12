import { newSpecPage } from '@stencil/core/testing'
import { UnoButton } from '../uno-button'

describe('uno-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UnoButton],
      html: `<uno-button></uno-button>`
    })
    expect(page.root).toEqualHtml(`
      <uno-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uno-button>
    `)
  })
})
