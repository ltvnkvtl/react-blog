import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from 'shared/ui/Modal/Modal';
import { ThemeDecorator } from 'shared/conig/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/theme';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores consectetur consequuntur cumque debitis deserunt distinctio dolorem doloremque doloribus earum, eos exercitationem expedita facere harum illum inventore itaque iure laborum libero magni nesciunt, nisi nobis non obcaecati officiis placeat provident quas quibusdam quisquam reiciendis rem reprehenderit sit suscipit tempore totam vero voluptatum? Accusamus animi at aut consequuntur dignissimos earum et eum hic, ipsa iste labore libero maiores nemo non numquam officia perferendis perspiciatis quam quibusdam quisquam sapiente suscipit voluptatibus! Esse est explicabo quod reprehenderit sequi. Alias assumenda dolore eligendi nisi quibusdam sapiente sequi ut vero. Architecto distinctio nobis quos velit?',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores consectetur consequuntur cumque debitis deserunt distinctio dolorem doloremque doloribus earum, eos exercitationem expedita facere harum illum inventore itaque iure laborum libero magni nesciunt, nisi nobis non obcaecati officiis placeat provident quas quibusdam quisquam reiciendis rem reprehenderit sit suscipit tempore totam vero voluptatum? Accusamus animi at aut consequuntur dignissimos earum et eum hic, ipsa iste labore libero maiores nemo non numquam officia perferendis perspiciatis quam quibusdam quisquam sapiente suscipit voluptatibus! Esse est explicabo quod reprehenderit sequi. Alias assumenda dolore eligendi nisi quibusdam sapiente sequi ut vero. Architecto distinctio nobis quos velit?',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
