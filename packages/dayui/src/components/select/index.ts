import {LitElement, html,} from 'lit'
import {customElement, property, queryAssignedElements} from 'lit/decorators.js'
import {userSelectNone} from "../share/style.js";

@customElement('day-select')
export class Select extends LitElement {
    static styles = userSelectNone


    @property({type: String})
    public name: string = ""
    @property({type: String})
    label: string = ""
    @property({type: Boolean})
    disabled: boolean = false

    @queryAssignedElements()
    private _menuElements!: Array<HTMLElement>;

    public value: string = ""

    firstUpdated() {
        this._menuElements.forEach(element => {
            element.onclick = () => {
                // @ts-ignore
                this.value = element.value
                this.requestUpdate()
            }
        })
    }

    render() {
        return html`
            <style>
                :host {
                    display: block;
                }
            </style>
            <div class="day-select-container">
                <day-dropdown ?disabled=${this.disabled}>
                    <day-input label=${this.label} value=${this.value} slot="trigger" readonly
                               @focus=${(e: { target: { click: () => void; }; }) => {
                                   e.target.click()
                               }} ?disabled=${this.disabled} name=${this.name}></day-input>
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
