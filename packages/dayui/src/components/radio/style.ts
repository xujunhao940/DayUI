import {css} from "lit";

export const stylesRadio = css`
    .day-radio-container {
        display: flex;
        flex-direction: row;
        gap: 8px;
    }

    .circle {
        transition: 100ms;
        position: relative;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 2px solid rgba(var(--dayui-color-primary));

        &::before {
            transition: 100ms;
            position: absolute;
            content: " ";
            width: 16px;
            height: 16px;
            background: rgba(var(--dayui-color-primary));
            border-radius: 50%;
            opacity: 0;
            scale: .5;
        }
        
        &[checked]::before {
            opacity: 1;
            scale: .7;
        }

        &:focus-visible, &:hover {
            outline: none;
            box-shadow: 0 0 0px 6px rgba(var(--dayui-color-primary-container), .4);
        }
    }
`
export const stylesRadioGroup = css`
`