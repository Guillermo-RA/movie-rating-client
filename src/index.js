import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {I18nextProvider} from "react-i18next";
import __ from "i18next";

import './assets/scss/general/index.scss';
import {languageResources as resources} from "./constants/languages/language-resources";

__.init({
    lng: JSON.parse(localStorage.getItem('language'))?.code || 'es',
    fallbackLng: "es",
    debug: true,
    interpolation: {
        escapeValue: false
    },
    resources,
}).then(() => {
    const root = createRoot(document.getElementById('root'));

    root.render(
        <React.StrictMode>
            < I18nextProvider i18n={__}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </I18nextProvider>
        </React.StrictMode>
    );
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
