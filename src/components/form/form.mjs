import langs from '@/components/form/translate/index.mjs'
import { locale } from '@/composables/index.mjs'

export default {
    name: 'VuiForm',
    setup() {
        locale(langs)
        return {}
    },
    mounted() {
    },
    data() {
        return {
        }
    },
    computed: {
    },
    components: {
    }
}
