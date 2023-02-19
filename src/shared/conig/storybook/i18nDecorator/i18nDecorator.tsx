import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/conig/i18n/i18nForTests';
import { Story } from '@storybook/react';

export const i18nDecorator = (StoryComponent: Story) => (
    <I18nextProvider i18n={i18nForTests}>
        <StoryComponent />
    </I18nextProvider>
);
