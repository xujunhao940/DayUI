import {LitElement, html,} from 'lit'
import {customElement} from 'lit/decorators.js'
import {styles, stylesItem} from "./style.ts";

@customElement('day-menu')
export class Menu extends LitElement {
    static styles = styles

    render() {
        return html`
            <div class="day-menu-container" tabindex="-1">
                <div class="day-menu">
                    <slot></slot>
                </div>
            </div>
        `
    }
}

@customElement('day-menu-item')
export class MenuItem extends LitElement {
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
