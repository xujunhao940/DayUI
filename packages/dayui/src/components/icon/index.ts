import {LitElement, html} from 'lit'
import {customElement, property} from 'lit/decorators.js'

@customElement('day-icon')
export class Icon extends LitElement {
    @property({type: Number})
    public size: 20 | 24 | 40 | 48 = 24

    render() {
        return html`
            <style>
                :host {
                    width: ${this.size}px;
                    height: ${this.size}px;
                }

                :host,
                * {
                    -webkit-tap-highlight-color: transparent;
                    user-select: none;
                    -webkit-user-select: none;
                    -webkit-user-drag: none;
                    -webkit-touch-callout: none;
                }

                span {
                    -webkit-user-select: none;
                    user-select: none;
                    font-size: ${this.size}px;
                }
            </style>
            <span part="icon" class="material-symbols-outlined"><slot></slot></span>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'day-icon': Icon
    }
}
