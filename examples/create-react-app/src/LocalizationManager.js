import { i18n } from "@lingui/core"

export function localize (key, ...variable) {
  return i18n.t(key, { postProcess: 'sprintf', sprintf: variable })
}

// export function changeLanguage (newLanguage) {
//   i18n.changeLanguage(newLanguage, (err, t) => {
//     if (err) throw new Error('There is an error with language change' + err)
//   })
// }
//
// export function getCurrentLanguage () {
//   return i18n.language
// }
