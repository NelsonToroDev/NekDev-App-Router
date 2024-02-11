import { EVENTS } from './consts'

export function navigate(href) {
  window.history.pushState({}, '', href)

  // create a custom event to notify that URL was changed
  const navigationEvent = new Event(EVENTS.PUSHEVENT)
  window.dispatchEvent(navigationEvent) // Trigger our custom event
}
