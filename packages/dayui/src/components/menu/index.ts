import {LitElement, html, css} from 'lit'
import {customElement, property, queryAssignedElements} from 'lit/decorators.js'
import {styles, stylesItem} from "./style.js";
import {createRef, Ref, ref} from "lit/directives/ref.js";
import {userSelectNone} from "../share/style.js";

@customElement('day-menu')
export class Menu extends LitElement {
    @property({type: Boolean})
    public shadowed = false

    @property({type: Boolean})
    public closed = false

    @property({type: String})
    public position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' = 'top-left'

    @queryAssignedElements({selector: 'day-menu-item'})
    public items!: Array<HTMLElement>;

    static styles = [styles,userSelectNone]

    updated() {
        // @ts-ignore
        if (this.items.length > 0) this.items[0].tabindex = 0
    }

    render() {
        return html`
            <div class="day-menu-container">
                <div class="day-menu" ?shadowed=${this.shadowed} ?closed=${this.closed} position=${this.position}>
                    <slot></slot>
                </div>
            </div>
        `
    }
}

@customElement('day-menu-item')
export class MenuItem extends LitElement {
    @property({type: String})
    public value = ''

    static styles = stylesItem

    public tabindex = -1

    public buttonRef: Ref<HTMLButtonElement> = createRef()

    focusNext(node: HTMLElement) {
        const nextItem = node.nextElementSibling as HTMLElement
        if (nextItem === null) {
            return
        }
        if (nextItem.tagName === "DAY-MENU-ITEM") {
            // @ts-ignore
            nextItem.buttonRef.value.focus()
            return
        } else {
            this.focusNext(nextItem)
            return
        }
    }

    focusPrev(node: HTMLElement) {
        const prevItem = node.previousElementSibling as HTMLElement
        if (prevItem === null) {
            return
        }
        if (prevItem.tagName === "DAY-MENU-ITEM") {
            // @ts-ignore
            prevItem.buttonRef.value.focus()
            return
        } else {
            this.focusPrev(prevItem)
            return
        }
    }

    firstUpdated() {
        this.buttonRef.value?.addEventListener('keydown', (e: KeyboardEvent) => {
            if (e.key === 'ArrowDown') {
                this.focusNext(this)
                e.preventDefault()
            }
            if (e.key === 'ArrowUp') {
                this.focusPrev(this)
                e.preventDefault()
            }
        })
    }


    render() {
        return html`
            <button class="day-menu-item" tabindex=${this.tabindex} ${ref(this.buttonRef)}>
                <div class="day-menu-item-start">
                    <slot name="startEl"></slot>
                </div>
                <span><slot></slot></span>
                <div class="day-menu-item-end">
                    <slot name="endEl"></slot>
                </div>
            </button>
        `
    }
}

@customElement('day-menu-divider')
export class MenuDivider extends LitElement {

    static styles = css`
        .day-menu-divider {
            background: rgba(var(--dayui-color-primary-container));
            height: 2px;
        }
    `

    render() {
        return html`
            <div class="day-menu-divider"></div>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'day-menu': Menu,
        'day-menu-divider': MenuDivider,
        'day-menu-item': MenuItem
    }
}
