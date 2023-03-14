import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { memo } from 'react';

const MainPage = memo(() => {
    const { t } = useTranslation('main');

    return (
        <div>
            <BugButton />
            {t('main:MAIN.TITLE')}
            {/* <Counter /> for redux configuration */}
        </div>
    );
});

export default MainPage;
