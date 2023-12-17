import { reactive } from 'vue';
import { version } from '../../package.json';

export const config = reactive({
    appVersion: version,
    BASE_URL: window?.location?.href,
    BASE_API: import.meta.env.VITE_BASEURL
})

