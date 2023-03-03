import I18NextHttpBackend from 'i18next-http-backend';
import i18next from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18next
    .use(I18NextHttpBackend)
    .use(I18nextBrowserLanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: __IS_DEV__,
        backend: {
            loadPath: () => {
                const isStorybook = window.location.pathname.includes('storybook-static');
                return isStorybook
                    ? '/storybook-static/locales/{{lng}}/{{ns}}.json'
                    : '/locales/{{lng}}/{{ns}}.json';
            },
        },
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        },
    });

export default i18next;
