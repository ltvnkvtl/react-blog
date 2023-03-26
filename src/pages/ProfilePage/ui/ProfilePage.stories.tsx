import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/conig/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/theme';
import { StoreDecorator } from 'shared/conig/storybook/StoreDecorator/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import AvatarImg from 'shared/assets/tests/storybook.jpg';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [StoreDecorator({
    profile: {
        form: {
            first: 'Vitaly',
            lastname: 'Litovkin',
            currency: Currency.USD,
            country: Country.Georgia,
            city: 'Tbilisi',
            username: 'admin',
            avatar: AvatarImg,
            age: 26,
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            first: 'Vitaly',
            lastname: 'Litovkin',
            currency: Currency.USD,
            country: Country.Georgia,
            city: 'Tbilisi',
            username: 'admin',
            age: 26,
            avatar: AvatarImg,
        },
    },
})];
