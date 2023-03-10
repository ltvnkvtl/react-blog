import { screen } from '@testing-library/react';
import { ThemeProvider } from 'app/providers/theme';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { userEvent } from '@storybook/testing-library';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    it('should be in the document', () => {
        componentRender(<ThemeProvider><Sidebar /></ThemeProvider>);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        componentRender(<ThemeProvider><Sidebar /></ThemeProvider>);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        userEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
