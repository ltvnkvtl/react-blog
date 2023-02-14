import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppLink, AppLinkType } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
    type: AppLinkType.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Text',
    type: AppLinkType.SECONDARY,
};

export const Dangerous = Template.bind({});
Dangerous.args = {
    children: 'Text',
    type: AppLinkType.DANGEROUS,
};
