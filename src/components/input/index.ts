import {LitElement, html} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {ref, Ref, createRef} from 'lit/directives/ref.js';
import {styles} from "./style.ts";

@customElement('day-input')
export class Input extends LitElement {
    @property({type: String})
    public label: string = "Input"

    @property({type: String})
    public variant: "filled"|"outlined" = "outlined"

    public inputRef: Ref<HTMLInputElement> = createRef();

    static styles = styles

    render() {
        return html`
            <div class=${`day-input-container variant-${this.variant}`}>
                <span class="day-input-label">${this.label}</span>
                <input class="day-input" ${ref(this.inputRef)}/>
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
