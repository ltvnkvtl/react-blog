import { addDecorator } from '@storybook/react';
import { styleDecorator } from '../../src/shared/conig/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/conig/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/app/providers/theme';
import { i18nDecorator } from '../../src/shared/conig/storybook/i18nDecorator/i18nDecorator';
import { RouteDecorator } from '../../src/shared/conig/storybook/RouterDecorator/RouteDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(i18nDecorator);
addDecorator(styleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouteDecorator);
