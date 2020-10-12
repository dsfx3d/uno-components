// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, Host, Prop, h } from '@stencil/core'

/**
 * Docs here
 */
@Component({
  tag: 'uno-button',
  styleUrl: 'uno-button.css',
  shadow: true
})
export class UnoButton {
  /** add button variant */
  @Prop() variant: UnoButtonVariant = ''

  classes = {
    button: true,
    outlined: this.variant === 'outlined'
  }
  render(): HTMLElement {
    return (
      <Host>
        <button class={this.classes}>
          <slot />
        </button>
      </Host>
    )
  }
}

export type UnoButtonVariant = 'outlined' | ''
