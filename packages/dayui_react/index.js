import '@xujunhao2010/dayui/dist/dayui.css'
import React from 'react';
import {createComponent} from '@lit/react';
import {
    Icon,
    Button,
    IconButton,
    ButtonGroup,
    Menu,
    MenuItem,
    MenuDivider,
    Dropdown,
    Input,
    Select, Checkbox, Switch, Radio, RadioGroup
} from "@xujunhao2010/dayui";

const DayIcon = createComponent({
    tagName: 'day-icon',
    elementClass: Icon,
    react: React
});
const DayButton = createComponent({
    tagName: 'day-button',
    elementClass: Button,
    react: React
});
const DayButtonIcon = createComponent({
    tagName: 'day-button-icon',
    elementClass: IconButton,
    react: React
});
const DayButtonGroup = createComponent({
    tagName: 'day-button-group',
    elementClass: ButtonGroup,
    react: React
});
const DayMenu = createComponent({
    tagName: 'day-menu',
    elementClass: Menu,
    react: React
});
const DayMenuItem = createComponent({
    tagName: 'day-menu-item',
    elementClass: MenuItem,
    react: React
});
const DayMenuDivider = createComponent({
    tagName: 'day-menu-divider',
    elementClass: MenuDivider,
    react: React
});
const DayDropdown = createComponent({
    tagName: 'day-dropdown',
    elementClass: Dropdown,
    react: React
});
const DayInput = createComponent({
    tagName: 'day-input',
    elementClass: Input,
    react: React
});
const DaySelect = createComponent({
    tagName: 'day-select',
    elementClass: Select,
    react: React
});
const DayCheckbox = createComponent({
    tagName: 'day-checkbox',
    elementClass: Checkbox,
    react: React
});
const DaySwitch = createComponent({
    tagName: 'day-switch',
    elementClass: Switch,
    react: React
});
const DayRadio = createComponent({
    tagName: 'day-radio',
    elementClass: Radio,
    react: React
});
const DayRadioGroup = createComponent({
    tagName: 'day-radio-group',
    elementClass: RadioGroup,
    react: React
});
export {
    DayIcon,
    DayButton,
    DayButtonIcon,
    DayButtonGroup,
    DayMenu,
    DayMenuItem,
    DayMenuDivider,
    DayDropdown,
    DayInput,
    DaySelect,
    DayCheckbox,
    DaySwitch,
    DayRadio,
    DayRadioGroup
};