import { action } from '@storybook/addon-actions'

export default {
  title: 'Components/UnoButton',
  argTypes: {
    slot: { control: 'text' },
    variant: { control: { type: 'select', options: ['', 'outlined'] } }
  }
}

const Template = ({ onClick, slot, variant }) => {
  const btn = document.createElement('uno-button')
  btn.type = 'button'
  btn.innerText = slot
  btn.variant = variant
  btn.addEventListener('click', onClick)
  return btn
}

export const Text = Template.bind({})
Text.args = {
  slot: 'Button',
  onClick: action('onClick')
}

export const Emoji = Template.bind({})
Emoji.args = {
  slot: 'Outlined',
  variant: 'outlined'
}
