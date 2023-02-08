import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <div>
            {t('about:ABOUT.TITLE')}
        </div>
    );
};

export default AboutPage;
