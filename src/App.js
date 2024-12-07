import {
    DayButton,
    DayButtonGroup,
    DayButtonIcon, DayCheckbox,
    DayDropdown,
    DayIcon, DayInput,
    DayMenu,
    DayMenuDivider,
    DayMenuItem, DayRadio, DayRadioGroup, DaySelect, DaySwitch
} from "dayui_react";

function App() {
    return <div>
        <div>
            <h1>Buttons</h1>
            <DayButton>Filled</DayButton>
            <DayButton variant={"outlined"}>Outlined</DayButton>
            <DayButton variant={"text"}>Text</DayButton>
            <DayButton disabled>Disabled</DayButton>
            <h3>Buttons with icons</h3>
            <DayButton>
                <DayIcon slot={"startEl"}>save</DayIcon>
                Save
            </DayButton>
            <DayButton variant={"outlined"}>
                Send
                <DayIcon slot={"endEl"}>send</DayIcon>
            </DayButton>
            <h3>IconButtons</h3>
            <DayButtonIcon>
                <DayIcon>add</DayIcon>
            </DayButtonIcon>
            <DayButtonIcon variant={"outlined"}>
                <DayIcon>add</DayIcon>
            </DayButtonIcon>
            <DayButtonIcon variant={"text"}>
                <DayIcon>add</DayIcon>
            </DayButtonIcon>
            <DayButtonIcon disabled>
                <DayIcon>add</DayIcon>
            </DayButtonIcon>
            <h3>ButtonGroups</h3>
            <DayButtonGroup>
                <DayButton>Filled</DayButton>
                <DayButton variant={"outlined"}>Outlined</DayButton>
                <DayButton variant={"text"}>Text</DayButton>
                <DayButton disabled>Disabled</DayButton>
            </DayButtonGroup>
        </div>
        <div>
            <h1>Menu</h1>
            <DayMenu>
                <DayMenuItem>
                    <DayIcon slot={"startEl"}>cut</DayIcon>
                    <span>Cut</span>
                    <span slot={"endEl"}>⌘X</span>
                </DayMenuItem>
                <DayMenuItem>
                    <DayIcon slot={"startEl"}>content_copy</DayIcon>
                    <span>Copy</span>
                    <span slot={"endEl"}>⌘C</span>
                </DayMenuItem>
                <DayMenuItem>
                    <DayIcon slot={"startEl"}>content_paste</DayIcon>
                    <span>Paste</span>
                    <span slot={"endEl"}>⌘V</span>
                </DayMenuItem>
                <DayMenuDivider></DayMenuDivider>
                <DayMenuItem>
                    <DayIcon slot={"startEl"}>cloud</DayIcon>
                    <span>Web Clipboard</span>
                </DayMenuItem>
            </DayMenu>
        </div>
        <div>
            <h1>Dropdown</h1>
            <DayDropdown>
                <DayButton slot={"trigger"}>Open</DayButton>
                <DayMenu>
                    <DayMenuItem>
                        <DayIcon slot={"startEl"}>cut</DayIcon>
                        <span>Cut</span>
                        <span slot={"endEl"}>⌘X</span>
                    </DayMenuItem>
                    <DayMenuItem>
                        <DayIcon slot={"startEl"}>content_copy</DayIcon>
                        <span>Copy</span>
                        <span slot={"endEl"}>⌘C</span>
                    </DayMenuItem>
                    <DayMenuItem>
                        <DayIcon slot={"startEl"}>content_paste</DayIcon>
                        <span>Paste</span>
                        <span slot={"endEl"}>⌘V</span>
                    </DayMenuItem>
                    <DayMenuDivider></DayMenuDivider>
                    <DayMenuItem>
                        <DayIcon slot={"startEl"}>cloud</DayIcon>
                        <span>Web Clipboard</span>
                    </DayMenuItem>
                </DayMenu>
            </DayDropdown>
            <DayDropdown disabled>
                <DayButton slot={"trigger"}>Disabled</DayButton>
                <DayMenu>
                    <DayMenuItem>
                        <DayIcon slot={"startEl"}>cut</DayIcon>
                        <span>Cut</span>
                        <span slot={"endEl"}>⌘X</span>
                    </DayMenuItem>
                    <DayMenuItem>
                        <DayIcon slot={"startEl"}>content_copy</DayIcon>
                        <span>Copy</span>
                        <span slot={"endEl"}>⌘C</span>
                    </DayMenuItem>
                    <DayMenuItem>
                        <DayIcon slot={"startEl"}>content_paste</DayIcon>
                        <span>Paste</span>
                        <span slot={"endEl"}>⌘V</span>
                    </DayMenuItem>
                    <DayMenuDivider></DayMenuDivider>
                    <DayMenuItem>
                        <DayIcon slot={"startEl"}>cloud</DayIcon>
                        <span>Web Clipboard</span>
                    </DayMenuItem>
                </DayMenu>
            </DayDropdown>
        </div>
        <div>
            <h1>Input</h1>
            <DayInput label={"outlined"} onInput={(e) => console.log(e)}></DayInput>
            <DayInput variant={"filled"} label={"filled"}></DayInput>
            <DayInput label={"disabled"} disabled></DayInput>
            <DayInput label={"readonly"} readonly></DayInput>
        </div>
        <div>
            <h1>Select</h1>
            <DaySelect label={"Select"}>
                <DayMenuItem value={"cut"}>
                    <DayIcon slot={"startEl"}>cut</DayIcon>
                    <span>Cut</span>
                    <span slot={"endEl"}>⌘X</span>
                </DayMenuItem>
                <DayMenuItem value={"copy"}>
                    <DayIcon slot={"startEl"}>content_copy</DayIcon>
                    <span>Copy</span>
                    <span slot={"endEl"}>⌘C</span>
                </DayMenuItem>
                <DayMenuItem value={"paste"}>
                    <DayIcon slot={"startEl"}>content_paste</DayIcon>
                    <span>Paste</span>
                    <span slot={"endEl"}>⌘V</span>
                </DayMenuItem>
                <DayMenuDivider></DayMenuDivider>
                <DayMenuItem value={"web clipboard"}>
                    <DayIcon slot={"startEl"}>cloud</DayIcon>
                    <span>Web Clipboard</span>
                </DayMenuItem>
            </DaySelect>
            <DaySelect label={"Disabled"} disabled>
                <DayMenuItem value={"cut"}>
                    <DayIcon slot={"startEl"}>cut</DayIcon>
                    <span>Cut</span>
                    <span slot={"endEl"}>⌘X</span>
                </DayMenuItem>
                <DayMenuItem value={"copy"}>
                    <DayIcon slot={"startEl"}>content_copy</DayIcon>
                    <span>Copy</span>
                    <span slot={"endEl"}>⌘C</span>
                </DayMenuItem>
                <DayMenuItem value={"paste"}>
                    <DayIcon slot={"startEl"}>content_paste</DayIcon>
                    <span>Paste</span>
                    <span slot={"endEl"}>⌘V</span>
                </DayMenuItem>
                <DayMenuDivider></DayMenuDivider>
                <DayMenuItem value={"web clipboard"}>
                    <DayIcon slot={"startEl"}>cloud</DayIcon>
                    <span>Web Clipboard</span>
                </DayMenuItem>
            </DaySelect>
        </div>
        <div>
            <h1>Checkbox</h1>
            <DayCheckbox></DayCheckbox>
            <DayCheckbox checked></DayCheckbox>
            <DayCheckbox indeterminate></DayCheckbox>
            <DayCheckbox disabled></DayCheckbox>
            <span>disabled</span>
        </div>
        <div>
            <h1>Switch</h1>
            <DaySwitch></DaySwitch>
            <DaySwitch checked></DaySwitch>
            <DaySwitch disabled></DaySwitch>
            <span>disabled</span>
        </div>
        <div>
            <h1>Radio</h1>
            <DayRadioGroup>
                <DayRadio value={"female"}>Female</DayRadio>
                <DayRadio value={"male"}>Male</DayRadio>
                <DayRadio value={"ratherNotSay"}>Rather not say</DayRadio>
            </DayRadioGroup>
        </div>
    </div>
}

export default App;
