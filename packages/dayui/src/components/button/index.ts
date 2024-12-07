import {LitElement, html, css} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {styles, stylesIcon} from "./style.js";
import {userSelectNone} from "../share/style.js"

@customElement('day-button')
export class Button extends LitElement {

    @property({type: String})
    public variant: "filled" | "outlined" | "text" = "filled"

    @property({type: Boolean})
    public disabled: boolean = false

    render() {
        return html`
            <div part="container">
                <button type="button" class="button day-f" part="button" variant=${this.variant}
                        ?disabled=${this.disabled} tabindex="0">
                    <slot class="startEl" part="startEl" name="startEl"></slot>
                    <span class="text" part="text"><slot></slot></span>
                    <slot class="endEl" part="endEl" name="endEl"></slot>
                </button>
            </div>
        `
    }

    static styles = [styles, userSelectNone]
}

@customElement('day-button-icon')
export class IconButton extends LitElement {
    @property({type: String})
    public variant: "filled" | "outlined" | "text" = "filled"

    @property({type: Boolean})
    public disabled: boolean = false

    render() {
        return html`
            <div part="container">
                <button class="button day-f" part="button" variant=${this.variant} ?disabled=${this.disabled}
                        tabindex="0">
                    <slot></slot>
                </button>
            </div>
        `
    }

    static styles = [styles, stylesIcon, userSelectNone]
}

@customElement('day-button-group')
export class ButtonGroup extends LitElement {
    render() {
        return html`
            <div>
                <slot></slot>
            </div>
        `
    }

    static styles = css`
        :host div {
            display: inline-flex;
        }
    `
}

declare global {
    interface HTMLElementTagNameMap {
        'day-button': Button,
        'day-button-icon': IconButton,
        'day-button-group': ButtonGroup
    }
}
