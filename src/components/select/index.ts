import {LitElement, html,} from 'lit'
import {customElement, property, queryAssignedElements} from 'lit/decorators.js'

@customElement('day-select')
export class Select extends LitElement {
    @property({type: String})
    label: string = ""

    @queryAssignedElements()
    private _menuElements!: Array<HTMLElement>;

    public value: string = ""

    firstUpdated() {
        this._menuElements.forEach(element => {
            element.onclick = () => {
                // @ts-ignore
                console.log("click", element, element.value)
                // @ts-ignore
                this.value = element.value
                this.requestUpdate()
            }
        })
    }

    render() {
        return html`
            <div class="day-select-container">
                <day-dropdown>
                    <day-input label=${this.label} value=${this.value} slot="trigger" tabIndex="0" readonly @focus=${(e: { target: { click: () => void; }; })=>{e.target.click()}}></day-input>
                    <day-menu>
                        <slot></slot>
                    </day-menu>
                </day-dropdown>
            </div>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'day-select': Select,
    }
}
