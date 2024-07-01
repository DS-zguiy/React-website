
declare module 'i18n' {
    type TranslationKeys = 'footer.detail' | 'header.title' | 'button.submit';
  
    function t(key: TranslationKeys): string;
  }

  type Translations = typeof translations;
  
  type TranslationKeys = ExtractTranslationKeys<Translations>;
  
  // 辅助类型来提取嵌套键
  type ExtractTranslationKeys<T, P extends string = ''> = {
    [K in keyof T]: T[K] extends object ? 
      `${P}${K & string}.${ExtractTranslationKeys<T[K]>}` : 
      `${P}${K & string}`
  }[keyof T];
  