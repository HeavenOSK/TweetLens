import { useEffect, useMemo, useState } from "react"

import { Storage } from "@plasmohq/storage"

import type { ChoiceModel } from "~src/settings/SettingList"

export const STORAGE_KEY_LANGUAGE = "LANGUAGE"
const languages = [
  "en", // 英語
  "zh", // 中国語
  "es", // スペイン語
  "ja", // 日本語
  "fr", // フランス語
  "de", // ドイツ語
  "ru", // ロシア語
  "pt", // ポルトガル語
  "ar", // アラビア語
  "hi" // ヒンディー語
] as const

type Language = (typeof languages)[number]

type LanguageWithLabel = {
  [key in Language]: string
}

const languageWithLabel: LanguageWithLabel = {
  en: "English",
  zh: "中文",
  es: "Español",
  ja: "日本語",
  fr: "Français",
  de: "Deutsch",
  ru: "Русский",
  pt: "Português",
  ar: "العربية",
  hi: "हिन्दी"
}

export interface LanguageChoice extends ChoiceModel {
  id: Language
  name: string
}

export const getBrowserLanguage = () => {
  const browserLanguage = window.navigator.language
  const found = languages.find((language) => {
    return browserLanguage.startsWith(language)
  })
  return found || languages[0]
}

const storage = new Storage()

export const useLanguageSetting = () => {
  const [savedLanguage, setSavedLanguage] = useState<Language | null>(null)

  const language = useMemo<LanguageChoice>(() => {
    const lang = savedLanguage || getBrowserLanguage()
    const label = languageWithLabel[lang]
    return {
      id: lang,
      name: label
    } as LanguageChoice
  }, [savedLanguage])

  const languageChoices = useMemo(() => {
    return languages.map((_language) => {
      return {
        id: _language,
        name: languageWithLabel[_language]
      } as LanguageChoice
    })
  }, [language])

  const getLanguageFromStorage = async () => {
    const value = await storage.get(STORAGE_KEY_LANGUAGE)
    if (value) {
      setSavedLanguage(value as Language)
    }
  }

  const updateLanguage = (language: LanguageChoice) => {
    setSavedLanguage(language.id)
    storage.set(STORAGE_KEY_LANGUAGE, language.id)
  }

  useEffect(() => {
    getLanguageFromStorage()
    return () => {}
  }, [])

  return {
    language,
    languageChoices,
    updateLanguage
  }
}
