import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'welcome': 'Welcome to the onboarding assistant!',
      'ask': 'Ask me anything about your program, campus, or schedule.'
    }
  },
  uk: {
    translation: {
      'welcome': 'Вітаємо у помічнику для новачків!',
      'ask': 'Питайте про програму, кампус чи розклад.'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'uk',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 