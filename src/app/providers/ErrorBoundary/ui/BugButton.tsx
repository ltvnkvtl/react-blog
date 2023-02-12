import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

// Component for ErrorBoundary testing
export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    const throwError = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button onClick={throwError}>
            {t('COMMON.THROW_ERROR')}
        </Button>
    );
};
