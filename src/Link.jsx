import { BUTTONS, EVENTS } from './consts'

export function navigate(href) {
  window.history.pushState({}, '', href)

  // create a custom event to notify that URL was changed
  const navigationEvent = new Event(EVENTS.PUSHEVENT)
  window.dispatchEvent(navigationEvent) // Trigger our custom event
}

export function Link({ target, to, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === BUTTONS.PRIMARY // primary click
    const isModifiedEvent =
      event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      // avoid its default behaivior which is reaload all the resources on anchor ref
      event.preventDefault()
      navigate(to) // Navigation with SPA
    }
  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
}
