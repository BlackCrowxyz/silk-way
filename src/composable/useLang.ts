// import useLang from "@/composable/useLang";
// const { toggle, locale, isRtl } = useLang();

import { useI18n } from 'vue-i18n';
import { useLocale } from 'vuetify'

export default function useLang() {
  const { locale } = useI18n();
  const { current, isRtl } = useLocale()

  const toggle = () => {
    if (locale.value === 'en') {
      current.value = locale.value = 'fa';
      // TODO: isRtl is computed :(
      isRtl.value = true;
    } else if (locale.value === 'fa') {
      current.value = locale.value = 'en';
      isRtl.value = false;
    }
  };

  return { locale, toggle, isRtl };
}