import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/conig/i18n/i18n';
import { Story } from '@storybook/react';

export const i18nDecorator = (StoryComponent: Story) => (
    <I18nextProvider i18n={i18n}>
        <StoryComponent />
    </I18nextProvider>
);
