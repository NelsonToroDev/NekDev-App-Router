import { BUTTONS, EVENTS } from '../utils/consts.js'

export function navigate(href) {
  window.history.pushState({}, '', href)

  // create a custom event to notify that URL was changed
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent) // Trigger our custom event
}

export function Link({ target, to, ...props }) {
  const handleClick = (event) => {
    console.log(event.button)
    const isMainEvent = event.button === BUTTONS.PRIMARY // primary click
    const isModifiedEvent =
      event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    const isManageableEvent = target === undefined || target === '_self'

    console.log(
      ` isMainEvent: ${isMainEvent} \n isManageableEvent: ${isManageableEvent} \n isModifiedEvent: ${isModifiedEvent}`
    )

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      // avoid its default behaivior which is reaload all the resources on anchor ref
      event.preventDefault()
      navigate(to) // Navigation with SPA
      window.scrollTo(0, 0)
    }
  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
}
