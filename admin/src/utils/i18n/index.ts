// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "~/public/locales/en/translation.json";
import zhTranslation from "~/public/locales/zh/translation.json";

i18n.use(Backend); // 加载语言资源
i18n.use(LanguageDetector); // 检测用户语言
i18n.use(initReactI18next); // 将i18n实例传递给react-i18next

const lng = 'en'  //默认语言

const config = {
  resources: {
    en: { translation: enTranslation },
    zh: { translation: zhTranslation },
  },
  lng,
  fallbackLng: lng,
  interpolation: { escapeValue: false },
  react: {
    useSuspense: false,
  },
};
i18n.init(config);
config.resources[lng].translation
export default i18n;


