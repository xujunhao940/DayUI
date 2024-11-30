import {css} from "lit"


export const styles = css`
    .day-menu-container {
        position: relative;
    }

    .day-menu {
        z-index: 99;
        transition: 200ms;
        width: 200px;
        padding: 4px;
        border-radius: 16px;
        -webkit-backdrop-filter: blur(12px);
        backdrop-filter: blur(12px);
        scale: 1;
        opacity: 1;
    }

    .day-menu::before {
        z-index: -1;
        border-radius: 16px;
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(var(--dayui-color-primary-container), .2);
    }

    [shadowed] {
        box-shadow: 0 0 16px -8px rgba(var(--dayui-color-shadow));
    }

    [position=top-left] {
        transform-origin: 0 0;
    }

    [position=top-right] {
        transform-origin: 100% 0;
    }

    [position=bottom-left] {
        transform-origin: 0 100%;
    }

    [position=bottom-right] {
        transform-origin: 100% 100%;
    }

    [closed] {
        scale: .9;
        opacity: .8;
    }
`

export const stylesItem = css`
    .day-menu-item {
        box-sizing: border-box;
        text-align: left;
        user-select: none;
        display: flex;
        justify-items: center;
        align-items: center;
        color: rgb(var(--dayui-color-on-primary-container));
        border: none;
        outline: none;
        width: 100%;
        background: transparent;
        font-size: 14px;
        margin: 2px 0 2px 0;
        padding: 8px;
        border-radius: 12px;
        transition: 150ms;
        user-select: none;
        tab-index: -1;

        & > * {
            touch-action: none;
            pointer-events: none;
        }

        & > span {
            margin: auto;
            margin-left: 0;
            user-select: none;
        }

        .day-menu-item-start {
            display: flex;
            margin-right: 8px;
        }

        .day-menu-item-end {
            display: flex;
        }

        &:hover {
            background-color: rgba(var(--dayui-color-primary-container), .8);
        }

        &:active {
            scale: .95;
            background-color: rgba(var(--dayui-color-primary), .2);
        }

        &.disabled {
            background: rgba(var(--dayui-color-on-surface), .2);
        }

        &:focus-visible {
            outline: 2px solid rgba(var(--dayui-color-primary), .8);
        }

        &:first-child {
            margin-top: 0;
        }

        &:last-child {
            margin-bottom: 0;
        }
    }
`