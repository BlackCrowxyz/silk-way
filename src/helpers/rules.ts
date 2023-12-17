type Input = string | number

// https://github.com/intlify/vue-i18n-next/issues/904#issuecomment-1056984826
import i18n from '@/plugins/i18n'
const t = i18n.global.t

export const rules = {
    required: (v: Input) => !!v || t('forms.req'),
    email: (v: Input) => /.+@.+\..+/.test(v.toString()) || t('forms.validEmail'),
    min: (v: Input) => v.toString().length >= 8 || t('forms.min8'),
    minCount: (minLength: number) => (v: Input) => v.toString()?.split(' ').length >= minLength || t('forms.minCount', { minLength })
};
