import {LitElement, html,} from 'lit'
import {customElement, queryAssignedElements} from 'lit/decorators.js'
import {styles} from './style.ts'

@customElement('day-dropdown')
export class Dropdown extends LitElement {
    @queryAssignedElements({slot: 'trigger'})
    private _triggerElements!: Array<HTMLElement>;
    @queryAssignedElements()
    private _menuElements!: Array<HTMLElement>;

    static styles = styles

    public _close = (delay?: number) => {
        this._menuElements[0].setAttribute("closed", "true")
        setTimeout(() => {
            this._menuElements[0].style.display = "none"
        }, delay)
    }

    public _open = () => {
        this._menuElements[0].style.display = "block"
        setTimeout(() => {
            this._menuElements[0].removeAttribute("closed")
            this._menuElements[0].focus()
        }, 1)
    }

    firstUpdated() {
        this._menuElements[0].tabIndex = -1
        this._menuElements[0].setAttribute("shadowed", "true")
        this._triggerElements[0].addEventListener("click", () => {
            this._open()
        })
        this._menuElements[0].addEventListener("blur", (e) => {
            if (!this._menuElements[0].contains(e.relatedTarget as Node)) {
                setTimeout(() => {
                    this._close(100)
                }, 100)
            } else {
                this._menuElements[0].focus()
            }

        })


        this._close(0)

        if (this._menuElements.length > 0) {
            // @ts-ignore
            this._menuElements[0]?.items?.forEach(item => {
                if (item.querySelectorAll("day-menu-item").length <= 0) {
                    item.addEventListener("click", () => {
                        this._close(100)
                    })
                }
            })
        }
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
