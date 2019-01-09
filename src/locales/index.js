import Vue from 'vue'
import VueI18n from 'vue-i18n'
import cn from './cn.js'
import en from './en.js'
Vue.use(VueI18n)

const DEFAULT_LANG = 'cn'
const LOCALE_KEY = 'localeLanguage'
// const locales = {
// 	cn: {
// 		guide: '导航',
// 		msg: '信息',
// 	},
// 	en: {
// 		guide: 'guide',
// 		msg: 'message',
// 	},
// }
const locales = {
	cn: cn,
	en: en,
}

const i18n = new VueI18n({
	locale: DEFAULT_LANG,
	messages: locales,
})

export const setLanguage = lang => {
	if (lang === undefined || lang === null) {
		// lang = window.localStorage.getItem(LOCALE_KEY)
		lang = DEFAULT_LANG
		window.localStorage.setItem(LOCALE_KEY, lang)
	} else {
		window.localStorage.setItem(LOCALE_KEY, lang)
	}
	// 清除 body 不同类型语言对应的class以及属性
	// Object.keys(locales).forEach(lang => {
	// 	document.body.classList.remove(`lang-${lang}`)
	// })
	// document.body.classList.add(`lang-${lang}`)
	// document.body.setAttribute('lang', lang)
	Vue.config.lang = lang
	// 切换语言类型时 渲染不同类型语言
	i18n.locale = lang
}
setLanguage()
export default i18n