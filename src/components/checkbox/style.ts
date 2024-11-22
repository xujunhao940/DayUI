import {css} from "lit";

export const styles = css`
    .day-checkbox-container {
        display: inline-flex;
        position: relative;
        height: 24px;
        width: 24px;
        transition: 100ms;
        scale: 1;
        border-radius: 4px;

        &:hover {
            background: rgba(var(--dayui-color-primary-container), .7);
        }

        &:active {
            scale: .8;
        }
    }

    .day-checkbox-input {
        display: none;
    }

    .day-checkbox-icon {
        position: absolute;
        width: 24px;
        height: 24px;
        fill: rgba(var(--dayui-color-primary));
        transition: 100ms;
        scale: .8;
        opacity: 0;
        transform-origin: 50% 50%;

        &[selected] {
            opacity: 1;
            scale: 1;
        }
    }
`