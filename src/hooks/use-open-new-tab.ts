import { useCallback } from 'react'

/** Returns onClick that will open a new tab of your browser with the given link */
// TODO: If i do not provide header, what happens?
export const useOpenNewTab = (link: string) => {
  const onOpenNewTab = useCallback(() => {
    const win = window.open(link, `_blank`)
    if (win) win.focus()
  }, [link])

  return onOpenNewTab
}
