export default function() {
  return new Proxy({}, {
    get(target, prop) {
      // Do the lookup and cache it for subsequent access.
      if (!target[prop]) {
        // Element id becomes a property with the element as its value, target.foo -> <div id="foo">
        target[prop] = document.getElementById(prop);
      }
      return target[prop];
    }
  })
}