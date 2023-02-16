import { fireEvent, screen } from '@testing-library/react';
import { ThemeProvider } from 'app/providers/theme';
import {
    renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    it('should be in the document', () => {
        renderWithTranslation(<ThemeProvider><Sidebar /></ThemeProvider>);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        renderWithTranslation(<ThemeProvider><Sidebar /></ThemeProvider>);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});