import { useI18n } from 'vue-i18n'

export default {
  hello: '你好，世界!',
  getText(key: string) {
    const { t } = useI18n()
    return t(key)
  },
}
