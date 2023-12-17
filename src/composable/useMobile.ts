// import useMobile from "@/composable/useMobile";
// const { isMobile } = useMobile();

import { computed } from "vue";
import { useDisplay } from "vuetify";

export default function useMobile() {
    const { platform, width } = useDisplay();

    const isMobile = computed(
        () =>
            platform.value.android ||
            platform.value.ios ||
            width.value <= 800
    );

    return { isMobile };
}