import {LitElement, html} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {ref, Ref, createRef} from 'lit/directives/ref.js';
import {styles} from "./style.js";
import {userSelectNone} from "../share/style.js";

@customElement('day-input')
export class Input extends LitElement {
    @property({type: String})
    public name: string = ""

    @property({type: String})
    public label: string = "Input"

    @property({type: Number})
    public tabIndex: number = 0

    @property({type: String})
    public variant: "filled" | "outlined" = "outlined"

    @property({type: String})
    public type: "text" | "number" | "password" | "email" | "date" | "time" | "datetime-local" | "month" | "week" | "search" | "tel" | "url" = "text"

    @property({type: String})
    public value: string = ""

    @property({type: Boolean})
    public disabled: boolean = false

    @property({type: Boolean})
    public readonly: boolean = false

    public inputRef: Ref<HTMLInputElement> = createRef();

    static styles = [styles, userSelectNone]

    render() {
        const input = this.inputRef.value
        // @ts-ignore
        input?.parentElement?.classList.remove("filled")
        // @ts-ignore
        if (this.value.length > 0) input?.parentElement?.classList.add("filled")

        return html`
            <div class=${`day-input-container variant-${this.variant}`}>
                <span class="day-input-label">${this.label}</span>
                <input class="day-input" ${ref(this.inputRef)} tabindex=${this.tabIndex} ?disabled=${this.disabled}
                       ?readonly=${this.readonly} name=${this.name}
                       type=${this.type} value=${this.value}/>
            </div>
        `
    }

    firstUpdated() {
        const input = this.inputRef.value
        input?.addEventListener("focus", () => {
            input.parentElement?.classList.add("focused")
        })

        input?.addEventListener("blur", () => {
            input.parentElement?.classList.remove("focused")
        })

        input?.addEventListener("input", () => {
            if (input.value.length > 0) {
                input.parentElement?.classList.add("filled")
            } else {
                input.parentElement?.classList.remove("filled")
            }
        })
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'day-input': Input
    }
}
