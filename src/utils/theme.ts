export const toggleMode = () => {
  const isDarkMode = document.documentElement.classList.toggle('dark')
  window.localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
}

export const setInitialMode = () => {
  const darkIsDefaultTheme = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches
  const savedTheme = window.localStorage.getItem('theme')

  document.documentElement.classList.toggle(
    'dark',
    savedTheme ? savedTheme === 'dark' : darkIsDefaultTheme
  )
}
