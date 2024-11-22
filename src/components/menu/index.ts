import {LitElement, html} from 'lit'
import {customElement, property, queryAssignedElements} from 'lit/decorators.js'
import {styles, stylesItem} from "./style.ts";

@customElement('day-menu')
export class Menu extends LitElement {
    @property({type: Boolean})
    public shadowed = false

    @property({type: Boolean})
    public closed = false

    @property({type: String})
    public position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' = 'top-left'

    @queryAssignedElements()
    public items!: Array<HTMLElement>;

    static styles = styles

    render() {
        return html`
            <div class="day-menu-container">
                <div class="day-menu" ?shadowed=${this.shadowed} ?closed=${this.closed} position=${this.position}>
                    <slot></slot>
                </div>
            </div>
        `
    }
}

@customElement('day-menu-item')
export class MenuItem extends LitElement {
    @property({type: String})
    public value = ''

    static styles = stylesItem


    render() {
        return html`
            <button class="day-menu-item">
                <div class="day-menu-item-start">
                    <slot name="startEl"></slot>
                </div>
                <span><slot></slot></span>
                <div class="day-menu-item-end">
                    <slot name="endEl"></slot>
                </div>
            </button>
        `
    }
}

@customElement('day-menu-divider')
export class MenuDivider extends LitElement {
    render() {
        return html`
            <div class="day-menu-divider"></div>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'day-menu': Menu,
        'day-menu-divider': MenuDivider,
        'day-menu-item': MenuItem
    }
}
