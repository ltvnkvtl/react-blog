import I18NextHttpBackend from 'i18next-http-backend';
import i18next from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18next
    .use(I18NextHttpBackend)
    .use(I18nextBrowserLanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'ru',
        debug: __IS_DEV__,
        // interpolation: {
        //   escapeValue: false, // not needed for react as it escapes by default
        // },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
    });

export default i18next;
