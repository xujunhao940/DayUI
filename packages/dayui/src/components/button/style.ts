import {css} from "lit"


export const styles = css`
    :host {
        display: inline-block;
        vertical-align: middle;
    }

    .button {
        width: 100%;
        cursor: pointer;
        user-select: none;
        display: flex;
        align-items: center;
        outline: none;
        border: none;
        height: 40px;
        border-radius: 20px;
        padding-inline: 12px;
        transition: 150ms;
        background: transparent;
        font-size: 12px;
        -webkit-tap-highlight-color: transparent;
        user-select: none;
        display: flex;
        justify-content: space-around;

        &:focus-visible {
            outline: 2px solid rgba(var(--dayui-color-primary), .8);
        }

        &:active {
            scale: .85;
        }

        &[variant=filled] {
            color: rgb(var(--dayui-color-on-primary-container));
            background: rgba(var(--dayui-color-primary-container));

            &:hover {
                background: rgba(var(--dayui-color-primary-container), .8);
            }

            &:active {
                background: rgba(var(--dayui-color-primary), .3);
            }
        }

        &[variant=outlined] {
            color: rgb(var(--dayui-color-primary));
            border: 1px solid rgb(var(--dayui-color-primary-container));

            &:hover {
                background: rgba(var(--dayui-color-primary-container), .2);
            }

            &:active {
                background: rgba(var(--dayui-color-primary-container), 1);
            }
        }

        &[variant=text] {
            color: rgb(var(--dayui-color-primary));

            &:hover {
                background: rgba(var(--dayui-color-primary-container), .2);
            }

            &:active {
                background: rgba(var(--dayui-color-primary-container), 1);
            }
        }

        &[disabled] {
            cursor: default;
            background: rgba(var(--dayui-color-inverse-surface), .2);

            &:active {
                scale: 1;
                background: rgba(var(--dayui-color-inverse-surface), .2);
            }

            &:hover {
                background: rgba(var(--dayui-color-inverse-surface), .2);
            }
        }
    }

    .text {
        margin-inline: 8px;
    }

`

export const stylesIcon = css`
    .button {
        padding: 0;
        width: 40px;
        justify-content: center;
    }
`