import { render, screen } from '@testing-library/react';
import { Button, ButtonType } from './Button';

describe('Button', () => {
    it('should be in the document', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    it('should has "clear" class name', () => {
        render(<Button buttonType={ButtonType.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        // screen.debug(); // show layout
    });
});
