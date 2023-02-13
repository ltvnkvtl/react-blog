import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ButtonType } from './Button';
import 'app/styles/index.scss'; // TODO: add decorator

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    buttonType: ButtonType.CLEAR,
};

export const Outlined = Template.bind({});
Outlined.args = {
    children: 'Text',
    buttonType: ButtonType.OUTLINE,
};
