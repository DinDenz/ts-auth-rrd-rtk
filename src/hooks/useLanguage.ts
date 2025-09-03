import { useState } from "react";

export enum Langs {
  EN = "ENGLISH",
  FR = "FRENCH",
}

export function useLanguage() {
  const [currentLanguage, setCurrentLanguage] = useState(Langs.EN);

  const changeLanguage = () => {
    const langToChange = currentLanguage === Langs.EN ? Langs.FR : Langs.EN;
    setCurrentLanguage(langToChange);
  };

  const isEnglish = currentLanguage === Langs.EN;

  return {
    currentLanguage,
    changeLanguage,
    isEnglish,
  };
}
