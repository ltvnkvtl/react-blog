import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/conig/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/theme';
import { Button, ButtonSize, ButtonType } from './Button';

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

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'Text',
    buttonType: ButtonType.CLEAR_INVERTED,
};

export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
    children: 'Text',
    buttonType: ButtonType.OUTLINE,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Text',
    buttonType: ButtonType.OUTLINE,
    size: ButtonSize.L,
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    children: 'Text',
    buttonType: ButtonType.OUTLINE,
    size: ButtonSize.XL,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    buttonType: ButtonType.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});
Background.args = {
    children: 'Text',
    buttonType: ButtonType.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'Text',
    buttonType: ButtonType.BACKGROUND_INVERTED,
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
    children: '>',
    buttonType: ButtonType.BACKGROUND_INVERTED,
    square: true,
    // size: ButtonSize.M, // default
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    buttonType: ButtonType.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: '>',
    buttonType: ButtonType.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
};

export const SquareDark = Template.bind({});
SquareDark.args = {
    children: '>',
    buttonType: ButtonType.BACKGROUND_INVERTED,
    square: true,
};
SquareDark.decorators = [ThemeDecorator(Theme.DARK)];
