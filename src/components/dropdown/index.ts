import {LitElement, html,} from 'lit'
import {customElement, queryAssignedElements} from 'lit/decorators.js'
import {provide} from '@lit/context';
import {dropdownCloseFuncContext} from "../sharing";
import {styles} from "./style.ts";

@customElement('day-dropdown')
export class Dropdown extends LitElement {
    @queryAssignedElements({slot: 'trigger'})
    private _triggerElements!: Array<HTMLElement>;
    @queryAssignedElements()
    private _menuElements!: Array<HTMLElement>;

    static styles = styles

    @provide({context: dropdownCloseFuncContext})
    private _close = () => {
        this._menuElements[0].style.display = "none"
    }

    firstUpdated() {
        this._triggerElements[0].addEventListener("click", () => {
            this._menuElements[0].style.display = "block"
        })
        this._menuElements[0].addEventListener("blur", () => {
            this._close()
        })
    }

    render() {
        return html`
            <div class="day-dropdown-container">
                <slot name="trigger"></slot>
                <div>
                    <div>
                        <slot></slot>
                    </div>
                </div>
            </div>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'day-dropdown': Dropdown,
    }
}
