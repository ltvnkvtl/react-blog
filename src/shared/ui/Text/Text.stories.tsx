import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/conig/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/theme';
import { Text, TextType } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TitleAndText = Template.bind({});
TitleAndText.args = {
    title: 'Title lorem impsun',
    text: 'Text lorem impsun',
};

export const TitleAndTextError = Template.bind({});
TitleAndTextError.args = {
    title: 'Title lorem impsun',
    text: 'Text lorem impsun',
    type: TextType.ERROR,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title lorem impsun',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Text lorem impsun',
};

export const TitleAndTextDark = Template.bind({});
TitleAndTextDark.args = {
    title: 'Title lorem impsun',
    text: 'Text lorem impsun',
};
TitleAndTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Title lorem impsun',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Text lorem impsun',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
