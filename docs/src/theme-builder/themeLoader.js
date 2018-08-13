import 'url-polyfill' // eslint-disable-line import/no-unassigned-import
import queryString from 'query-string'

function addThemeSeachQuery(object) {
  const url = new URL(window.location.href)
  url.searchParams.set('theme', JSON.stringify(object))

  // Avoid a refresh on a HTML5/modern browser
  if (history.pushState) {
    const newurl =
      window.location.protocol +
      '//' +
      window.location.host +
      window.location.pathname +
      '?' +
      url.searchParams
    window.history.pushState({ path: newurl }, '', newurl)
  } else {
    // Otherwise force a refresh :(
    window.location.search = url.searchParams
  }
}

/**
 * A catch all for the all the potential weird states
 * location can be in from SSR or window.location
 */
function getThemeFromParams(location) {
  return (queryString.parse(location.search) || {}).theme
}

function getThemeFromLocalStorage() {
  if (typeof localStorage !== 'undefined')
    return JSON.parse(localStorage.getItem('custom_theme_styles'))
}

function saveTheme(themeStyles) {
  addThemeSeachQuery(themeStyles)
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('custom_theme_styles', JSON.stringify(themeStyles))
  }
}

function loadTheme(location) {
  const themeFromParams = getThemeFromParams(location)
  if (themeFromParams) return JSON.parse(themeFromParams)

  const themeFromLocalStorage = getThemeFromLocalStorage()
  if (themeFromLocalStorage) {
    addThemeSeachQuery(themeFromLocalStorage)
    return themeFromLocalStorage
  }

  return null
}

export { loadTheme, saveTheme }
