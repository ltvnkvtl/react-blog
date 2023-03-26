import React from 'react';
import { ComponentStory, ComponentMeta, addDecorator } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/conig/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/conig/storybook/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [StoreDecorator({ user: { authData: {} } })];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authData: {} } })];

export const NoAuth = Template.bind({});
NoAuth.args = {};
NoAuth.decorators = [StoreDecorator({ user: { authData: undefined } })];
