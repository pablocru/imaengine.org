/**
 * @param {Node} element - Node to bind the event listener
 * @param eventType - Type of event: click, mouseup, submit
 * @param callback - Callback that must be executed by the event
 * @returns - A way to create and delete the event
 */
export function setupEventListener(
  element: Node,
  eventType: string,
  callback: EventListenerOrEventListenerObject,
) {
  return {
    addEvent: () => element.addEventListener(eventType, callback),
    removeEvent: () => element.removeEventListener(eventType, callback),
  };
}

/**
 * @param element - Node to bind the event listener
 * @param callback - Callback that must be executed by the event
 * @returns - A way to create and delete the event
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export function setupClickOutsideEvent(element: Node, callback: Function) {
  return setupEventListener(document, "click", event => {
    const { target } = event;

    if (!(target && target instanceof Node && element.contains(target))) callback();
  });
}
