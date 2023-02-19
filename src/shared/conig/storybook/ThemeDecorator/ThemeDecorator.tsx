import { Story } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/theme';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <ThemeProvider>
            <StoryComponent />
        </ThemeProvider>
    </div>
);
