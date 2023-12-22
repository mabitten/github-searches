import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { pt as PTLocale } from "./pt";

void i18n.use(initReactI18next).init({
    fallbackLng: "pt",
    interpolation: {
        escapeValue: false,
    },
    lng: "pt", // Apenas suportamos pt por agora, podemos detectar localização do usuário para definir o idioma
    resources: {
        pt: {
            ...PTLocale,
        },
    },
});
