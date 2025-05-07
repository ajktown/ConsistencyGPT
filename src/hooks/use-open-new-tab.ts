import { useCallback } from 'react'

/** Returns onClick that will open a new tab of your browser with the given link */
// useOpenNewTab also handles path for "/hello/world" , and this will
// open a new tab with the link "http://localhost:3000/hello/world" if you are
// running the app on localhost:3000 (or any other host)
export const useOpenNewTab = (link: string) => {
  const onOpenNewTab = useCallback(() => {
    const win = window.open(link, `_blank`)
    if (win) win.focus()
  }, [link])

  return onOpenNewTab
}
