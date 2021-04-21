const supportedLanguages = ['en', 'sl']
const defaultLanguage = 'en'

// Adds lang prefix to the URL path
function resolveLangPath(defaultLang, lang, path) {
  // Default lang is without prefix
  if (defaultLang == lang) {
    return path
  }

  // If lang prefix already exists skip
  const [, base] = path.split(`/`)
  if (base == lang) {
    return path
  }

  return `/${lang}${path}`
}

exports.onCreatePage = ({ page, actions }, themeOptions) => {
  const { createPage, deletePage } = actions
  // Check if originalPath was already set and bail early as otherwise an infinite loop could occur
  // as other plugins like gatsby-plugin-mdx could modify this
  if (page.context.originalPath) {
    return
  }
  const originalPath = page.path

  deletePage(page)

  supportedLanguages.forEach((lang) => {
    const newPage = {
      ...page,
      path: resolveLangPath(defaultLanguage, lang, page.path),
      matchPath: page.matchPath
        ? resolveLangPath(defaultLanguage, lang, page.matchPath)
        : page.matchPath,
      context: {
        ...page.context,
        lang,
        originalPath,
      },
    }

    // Check if the page is a localized 404
    if (newPage.path.match(/^\/[a-z]{2}\/404\/$/)) {
      // Match all paths starting with this code (apart from other valid paths)
      newPage.matchPath = `/${locale.code}/*`
    }

    createPage(newPage)
  })
}