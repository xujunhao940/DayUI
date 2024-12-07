import {LitElement, html} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {styles} from './style.js'
import {ref, Ref, createRef} from 'lit/directives/ref.js';
import {userSelectNone} from "../share/style.js";


@customElement('day-checkbox')
export class Checkbox extends LitElement {
    static styles = [styles, userSelectNone]

    @property({type: String})
    public name: string = ""
    @property({type: Boolean})
    public disabled: boolean = false
    @property({type: Boolean})
    public checked: boolean = false
    @property({type: Boolean})
    public indeterminate: boolean = false

    public inputRef: Ref<HTMLInputElement> = createRef();

    private _handleClick() {
        if (this.disabled) return;
        if (this.indeterminate) {
            this.indeterminate = false;
            this.checked = true;
            return;
        }
        this.checked = !this.checked;
    }

    updated() {
        this.shadowRoot?.querySelectorAll(".day-checkbox-icon").forEach(item => item.removeAttribute("selected"))
        if (this.indeterminate) {
            this.shadowRoot?.querySelector(".indeterminate")?.setAttribute("selected", "")
        } else if (this.checked) {
            this.shadowRoot?.querySelector(".checked")?.setAttribute("selected", "")
        } else if (!this.checked) {
            this.shadowRoot?.querySelector(".unchecked")?.setAttribute("selected", "")
        }
    }

    firstUpdated() {
        this.inputRef.value?.addEventListener("change", () => {
            if (!this.disabled) this.checked = this.inputRef.value?.checked ?? false
        })
    }

    render() {
        return html`
            <div class="day-checkbox-container" tabindex=${this.disabled ? "-1" : "0"} ?disabled=${this.disabled}
                 @keydown=${(e: KeyboardEvent) => {
                     if (e.key === 'Enter' || e.key === ' ') this._handleClick()
                 }}>
                <input type="checkbox" class="day-checkbox-input" ${ref(this.inputRef)} ?disabled=${this.disabled}
                       name=${this.name}>
                <div @click=${this._handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="day-checkbox-icon unchecked" viewBox="0 0 24 24">
                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="day-checkbox-icon checked" viewBox="0 0 24 24">
                        <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="day-checkbox-icon indeterminate" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"></path>
                    </svg>
                </div>
            </div>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'day-checkbox': Checkbox
    }
}
