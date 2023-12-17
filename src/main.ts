/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import '@/assets/fonts.scss' // importing the fonts css

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

import i18n from '@/plugins/i18n'
app.use(i18n)

// https://vue3-google-signin.wavezync.com/guide/
import GoogleSignInPlugin from "vue3-google-signin"
app.use(GoogleSignInPlugin, {
    clientId: import.meta.env.VITE_GOOGLE_LOGIN,
});

// https://matteo-gabriele.gitbook.io/vue-gtag/
import VueGtag from "vue-gtag";
app.use(VueGtag, {
    config: { id: import.meta.env.VITE_GTAG_ID }
})

if (process.env.NODE_ENV !== 'development') {
    // Access the environment variable
    const googleTagManagerId = import.meta.env.VITE_GOOGLE_TAG_MANAGER_ID;
    if (googleTagManagerId) {
        try {
            // Create a script tag for Google Tag Manager
            const script = document.createElement('script');
            script.async = true;
            script.src = `https://www.googletagmanager.com/gtag/js?id=${googleTagManagerId}`;

            // Insert the script tag before the first script in the document
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(script, firstScriptTag);

            // Initialize Google Tag Manager
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag("js", new Date());
            gtag("config", "G-XXZYMR71CZ");
        } catch (error) {
            console.log(error);
        }
    }

    // Access the environment variable for Hotjar ID
    const hotjarId = import.meta.env.VITE_HOTJAR_ID;
    if (hotjarId) {
        try {
            // Hotjar script integration
            (function (h, o, t, j, a, r) {
                h.hj =
                    h.hj ||
                    function () {
                        (h.hj.q = h.hj.q || []).push(arguments);
                    };
                h._hjSettings = { hjid: hotjarId, hjsv: 6 };
                a = o.getElementsByTagName("head")[0];
                r = o.createElement("script");
                r.async = 1;
                r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
                a.appendChild(r);
            })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
        } catch (error) {
            console.log(error);
        }
    }
}
registerPlugins(app)

app.mount('#app')