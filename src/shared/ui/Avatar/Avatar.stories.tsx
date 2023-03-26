import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AvatarImg from 'shared/assets/tests/storybook.jpg';
import { Avatar } from './Avatar';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
    src: AvatarImg,
};

export const SmallSize = Template.bind({});
SmallSize.args = {
    size: 50,
    src: AvatarImg,
};
