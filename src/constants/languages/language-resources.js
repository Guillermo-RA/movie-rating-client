import global_es from "../../locales/es/global.json"
import global_en from "../../locales/en/global.json"
import home_es from "../../locales/es/components/home.json"
import home_en from "../../locales/en/components/home.json"
import navbar_es from "../../locales/es/components/navbar.json"
import navbar_en from "../../locales/en/components/navbar.json"
import ratingGroups_es from "../../locales/es/components/rating-groups.json"
import ratingGroups_en from "../../locales/en/components/rating-groups.json"
import account_es from "../../locales/es/components/account.json"
import account_en from "../../locales/en/components/account.json"
import errors_es from "../../locales/es/forms/errors.json"
import errors_en from "../../locales/en/forms/errors.json"

const languageResources =  {
    es: {
        home: home_es,
        navbar: navbar_es,
        ratingGroups: ratingGroups_es,
        global: global_es,
        account: account_es,
        errors: errors_es
    },
    en: {
        home: home_en,
        navbar: navbar_en,
        ratingGroups: ratingGroups_en,
        global: global_en,
        account: account_en,
        errors: errors_en
    }
}

export {languageResources}