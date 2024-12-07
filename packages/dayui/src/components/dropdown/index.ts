import {LitElement, html,} from 'lit'
import {customElement, property, queryAssignedElements} from 'lit/decorators.js'
import {styles} from './style.js'
import {userSelectNone} from "../share/style.js";

@customElement('day-dropdown')
export class Dropdown extends LitElement {
    @property({type: Boolean})
    disabled: boolean = false

    @queryAssignedElements({slot: 'trigger'})
    private _triggerElements!: Array<HTMLElement>;
    @queryAssignedElements()
    private _menuElements!: Array<HTMLElement>;

    static styles = [styles, userSelectNone]

    public itemsArr: Array<HTMLElement> = []

    public _close = (delay?: number) => {
        this._menuElements[0].setAttribute("closed", "true")
        setTimeout(() => {
            this._menuElements[0].style.display = "none"
        }, delay)
    }

    public _open = () => {
        if (this.disabled) {
            return
        }
        this._menuElements[0].style.display = "block"
        setTimeout(() => {
            this._menuElements[0].removeAttribute("closed")
            // @ts-ignore
            this.itemsArr[0].buttonRef.value.focus()
        }, 1)
    }

    firstUpdated() {
        this._menuElements[0].tabIndex = -1
        this._menuElements[0].setAttribute("shadowed", "true")
        this._triggerElements[0].addEventListener("click", () => {
            this._open()
        })
        if (this._menuElements[0].children[0].tagName === "SLOT") {
            // @ts-ignore
            this.itemsArr = this._menuElements[0].children[0].assignedElements();
        } else {
            // @ts-ignore
            this.itemsArr = Array.from(this._menuElements[0].children);
        }
        // @ts-ignore
        this.itemsArr.forEach(item => {
            // @ts-ignore
            item.shadowRoot?.querySelector(".day-menu-item")?.addEventListener("blur", (e) => {
                // @ts-ignore
                if (this.itemsArr.indexOf(e.relatedTarget as Node) === -1) {
                    setTimeout(() => {
                        this._close(100)
                    }, 100)
                }
            })

            // @ts-ignore
            if (item.shadowRoot.querySelectorAll("day-menu-item").length <= 0) {
                item.addEventListener("click", () => {
                    this._close(100)
                })
            }
        })


        this._close(0)
    }

    render() {
        return html`
            <div class="day-dropdown-container">
                <slot name="trigger"></slot>
                <div class="day-dropdown-position-origin">
                    <div class="day-dropdown-position-container">
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
