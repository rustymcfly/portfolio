import { createI18n, LocaleMessages, VueMessageType } from 'vue-i18n'
import * as de from './locales/de'

/**
 * Load locale messages
 *
 * The loaded `JSON` locale messages is pre-compiled by `@intlify/vue-i18n-loader`, which is integrated into `vue-cli-plugin-i18n`.
 * See: https://github.com/intlify/vue-i18n-loader#rocket-i18n-resource-pre-compilation
 */
function loadLocaleMessages(): LocaleMessages<VueMessageType> {
  const locales = {}
  Object.defineProperty(locales, de.locale, { get: () => de.language })
  console.log(locales)
  return locales
}

const dateTimeFormats = {
  'en-US': {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    },
    long: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
    },
  },
  'de-DE': {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    },
    long: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    },
  },
}

export default createI18n({
  dateTimeFormats,
  legacy: false,
  locale: import.meta.env.VITE_I18N_LOCALE || 'en-US',
  fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || 'en-US',
  messages: loadLocaleMessages(),
})
