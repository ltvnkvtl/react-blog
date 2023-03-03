import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            <BugButton />
            {t('main:MAIN.TITLE')}
            {/* <Counter /> for redux configuration */}
        </div>
    );
};

export default MainPage;
