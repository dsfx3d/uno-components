import { newE2EPage } from '@stencil/core/testing'

describe('uno-button', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<uno-button></uno-button>')

    const element = await page.find('uno-button')
    expect(element).toHaveClass('hydrated')
  })
})
