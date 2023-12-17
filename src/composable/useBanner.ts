import { reactive, watchEffect } from "vue";

export const banner = reactive({
    modal: false,
    text: 'Bluelexi',
    color: 'deep-purple-accent-4',
    reset: () => {
        banner.modal = false;
        banner.color = "deep-purple-accent-4";
        banner.text = "Bluelexi";
    }
})

watchEffect(() => {
    if (banner.modal === true) setTimeout(() => { banner.modal = false }, 4000)
})