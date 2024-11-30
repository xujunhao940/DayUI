import {css} from "lit";

export const styles = css`
    .day-switch-container {
        display: inline-flex;
        position: relative;
        border-radius: 16px;
        height: 32px;
        width: 52px;
        transition: 150ms;
        background: transparent;
        box-sizing: border-box;
        border: 2px solid rgba(var(--dayui-color-primary));

        .day-switch-input {
            display: none;
        }

        .day-switch-thumb {
            transition: 150ms;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            border-radius: 7px;
            width: 14px;
            height: 14px;
            background: rgba(var(--dayui-color-primary));
            left: 7px;
        }

        &[disabled] {
            border-color: rgba(var(--dayui-color-outline));
            
            .day-switch-thumb {
                background: rgba(var(--dayui-color-outline));
            }
        }

        &:not([disabled]) {
            &:focus-visible {
                outline: 2px solid rgba(var(--dayui-color-primary), .8);
            }

            &:active .day-switch-thumb {
                border-radius: 13px;
                left: 1px;
                width: 26px;
                height: 26px;
            }

            &:hover .day-switch-thumb {
                box-shadow: 0 0 0px 8px rgba(var(--dayui-color-primary-container), .4);
            }
        }

        &[checked] {
            background: rgba(var(--dayui-color-primary));

            .day-switch-thumb {
                border-radius: 12px;
                left: unset;
                //right: 2px;
                left: 22px;
                width: 24px;
                height: 24px;
                background: rgba(var(--dayui-color-primary-container));
            }

            &:active .day-switch-thumb {
                left: 14px;
                width: 32px;
            }
        }
    }
`