import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/store';
import { DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: Story) => (
    <StoreProvider initialState={state as StateSchema}>
        <StoryComponent />
    </StoreProvider>
);
