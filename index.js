/**
 * Proxy object that uses `getElementById` to look up an element with an id matching the
 * accessed property name and stores the element as a property on the returned object.
 * @typedef {string} elementId
 * @returns {Object.<elementId, HTMLElement>}
 */
export default function elementsProxy() {
  return new Proxy({}, {
    get(target, elementId) {
      if (!target[elementId]) {
        target[elementId] = document.getElementById(elementId);
      }
      return target[elementId];
    }
  })
}