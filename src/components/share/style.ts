import {css} from "lit";

export const userSelectNone = css`
    :host,
    * {
        -webkit-tap-highlight-color: transparent;
        user-select: none;
        -webkit-user-select: none;
        -webkit-user-drag: none;
        -webkit-touch-callout: none;
    }
`