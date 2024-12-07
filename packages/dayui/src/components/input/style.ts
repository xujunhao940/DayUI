import {css} from "lit"


export const styles = css`
    .day-input-container {
        position: relative;
        border-radius: 16px;
        transition: .2s;
        border: 1px solid rgba(var(--dayui-color-on-background));

        .day-input-label {
            z-index: 0;
            pointer-events: none;
            user-select: none;
            position: absolute;
            top: 50%;
            left: 14px;
            transform: translateY(-50%);
            transition: .2s;
            transform-origin: 0% 0%;
            color: rgba(var(--dayui-color-on-background));
        }

        &.focused .day-input-label,
        &.filled .day-input-label {
            transform: translateY(-125%);
            scale: .75;
        }

        &.focused {
            border-color: rgba(var(--dayui-color-primary));
        }

        &:hover {
            border-color: rgba(var(--dayui-color-secondary));
        }

        .day-input {
            padding: 12px;
            padding-top: 28px;
            color: rgba(var(--dayui-color-on-background));
            outline: none;
            border: none;
            background: transparent;
            width: 100%;
            font-size: 16px;
            box-sizing: border-box;
        }
    }

    .day-input-container.variant-filled {
        background: rgb(var(--dayui-color-surface-variant));
        border-color: transparent;
        color: rgb(var(--dayui-color-on-surface-variant));

        &.focused {
            border-color: rgba(var(--dayui-color-secondary));
        }

        &:hover {
            border-color: rgba(var(--dayui-color-primary));
        }
    }
`