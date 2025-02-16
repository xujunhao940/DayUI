import {LitElement, html} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {styles} from './style.js'
import {ref, Ref, createRef} from 'lit/directives/ref.js';
import {userSelectNone} from "../share/style.js";

@customElement('day-switch')
export class Switch extends LitElement {
    static styles = [styles, userSelectNone]

    @property({type: String})
    public name: string = ""
    @property({type: Boolean})
    public disabled: boolean = false
    @property({type: Boolean})
    public checked: boolean = false

    public inputRef: Ref<HTMLInputElement> = createRef();

    private _handleClick() {
        if (this.disabled) return;
        this.checked = !this.checked;
    }

    firstUpdated() {
        this.inputRef.value?.addEventListener("change", () => {
            if (!this.disabled) this.checked = this.inputRef.value?.checked ?? false
        })
    }

    render() {
        return html`
            <div class="day-switch-container" tabindex=${this.disabled ? "-1" : "0"} ?disabled=${this.disabled}
                 @keydown=${(e: KeyboardEvent) => {
                     if (e.key === 'Enter' || e.key === ' ') {
                         this._handleClick()
                         e.preventDefault()
                     }
                 }} ?checked=${this.checked} @click=${this._handleClick}>
                <input type="checkbox" class="day-switch-input" ${ref(this.inputRef)} ?disabled=${this.disabled}
                       name=${this.name}>
                <div>
                    <span class="day-switch-thumb"></span>
                </div>
            </div>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'day-switch': Switch
    }
}
