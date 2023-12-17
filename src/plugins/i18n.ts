// https://vue-i18n.intlify.dev/guide/installation.html
import { createI18n } from 'vue-i18n'
import fa from "@/statics/i18n/fa"
import en from "@/statics/i18n/en"

const i18n = createI18n({
    legacy: false, // you must set `false`, to use Composition API
    locale: 'en', //'fa'
    fallbackLocale: 'en',
    // Refer a global scope Composer instance of i18n
    globalInjection: true,
    messages: { en, fa }
})

export default i18n

