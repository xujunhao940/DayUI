import {LitElement, html} from 'lit'
import {customElement, property, queryAssignedElements} from 'lit/decorators.js'
import {stylesRadio, stylesRadioGroup} from './style.js'
import {provide, consume, createContext} from '@lit/context';
import {ref, Ref, createRef} from 'lit/directives/ref.js';
import {userSelectNone} from "../share/style.js";


const context = createContext<string>('radioContext');

@customElement('day-radio-group')
export class RadioGroup extends LitElement {
    static styles = stylesRadioGroup

    @provide({context: context})
    @property({type: String})
    public value: string = ""

    @property({type: String})
    public direction: "row" | "column" = "row"

    @property({type: String})
    public name: string = ""

    @queryAssignedElements({selector: 'day-radio'})
    public items!: Array<HTMLElement>;

    firstUpdated() {
        this.items.forEach(item => {
            item.addEventListener("click", () => {
                // @ts-ignore
                this.value = item.value
            })
        })
    }

    updated() {
        // @ts-ignore
        if (this.items.length > 0) this.items[0].tabindex = 0
    }

    render() {
        return html`
            <div>
                <input style="display: none" class="day-radio-group-input" type="radio" value=${this.value}
                       tabindex="-1" name=${this.name}>
                <slot style=${`display:flex;gap:8px;flex-direction:${this.direction}`}></slot>
            </div>
        `
    }
}

@customElement('day-radio')
export class Radio extends LitElement {
    @consume({context: context, subscribe: true})
    @property({attribute: false})
    public groupValue: string = ""

    @property({type: Boolean})
    public disabled: boolean = false

    @property({type: String})
    public value: string = ""

    static styles = [stylesRadio, userSelectNone]

    public tabindex = -1

    public divRef: Ref<HTMLDivElement> = createRef()

    focusNext(node: HTMLElement) {
        const nextItem = node.nextElementSibling as HTMLElement
        if (nextItem === null) {
            return
        }
        if (nextItem.tagName === "DAY-RADIO") {
            // @ts-ignore
            nextItem.divRef.value.focus()
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
        if (prevItem.tagName === "DAY-RADIO") {
            // @ts-ignore
            prevItem.divRef.value.focus()
            return
        } else {
            this.focusPrev(prevItem)
            return
        }
    }

    firstUpdated() {
        this.divRef.value?.addEventListener('keydown', (e: KeyboardEvent) => {
            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                this.focusNext(this)
                e.preventDefault()
            } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                this.focusPrev(this)
                e.preventDefault()
            } else if (e.key === 'Enter' || e.key === ' ') {
                // @ts-ignore
                this.parentElement.value = this.value
                e.preventDefault()
            }
        })
    }

    render() {
        return html`
            <div class="day-radio-container">
                <div class="circle" ${ref(this.divRef)} tabindex=${this.tabindex}
                     ?checked=${this.groupValue === this.value}>
                </div>
                <slot></slot>
            </div>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'day-radio-group': RadioGroup,
        'day-radio': Radio
    }
}
