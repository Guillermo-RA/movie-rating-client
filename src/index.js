import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

import home_es from "./locales/es/pages/home.json";
import home_en from "./locales/en/pages/home.json";

import './assets/scss/general/index.scss';

i18next.init({
    fallbackLng: "es",
    debug:true,
    interpolation: {
        escapeValue: false
    },
    resources: {
        es: {
            home: home_es
        },
        en: {
            home: home_en
        }
    }
});

const root = createRoot(document.getElementById('root'));

root.render(
    < I18nextProvider i18n={i18next}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </I18nextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
