# Elements Proxy
Direct access to any HTMLElement with an ID:
```html
<div id="myId">Hi</div>

<script>
  import elementsProxy from 'https://unpkg.com/elementsproxy@1.1.0';

  const elements = elementsProxy();
  elements.myId.textContent; // "Hi"
</script>
```
This function returns a Proxy object. When a property is accessed on that object, the Proxy takes the property name and uses `getElementByIdI()` to find an element with an id of the same name. It then caches the element on the returned object for direct and instant access.
## Why?
Because `document.all` is unreliable and `document.getElementById()` gets messy:
```javascript
// Create lots of references to all the elements you need
const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');
const d = document.getElementById('d');
const e = document.getElementById('e');
const f = document.getElementById('f');
const g = document.getElementById('g');

// do stuff with them
if (x > y) {
  a.textConent = 'Hello world';
  a.hidden = false;
}

b.classList.toggle('flex-col');
c.addEventListener('click', callback);
// and so on...

// Or worse:
// Repeated use of the id string, wasted lookups, noisy code
if (x > y) {
  document.getElementById('a').textConent = 'Hello world';
  document.getElementById('a').hidden = false;
}

document.getElementById('b').classList.toggle('flex-col');
document.getElementById('c').addEventListener('click', callback)
```
Clean all that up with Elements Proxy:
```javascript
// One line of code regardless of the number of elements
const elements = elementsProxy();

if (x > y) {
  // Simple access to elements as properties
  elements.a.textConent = 'Hello world';
  // Cached lookups on subsequent access
  elements.a.hidden = false;
}

elements.b.classList.toggle('flex-col');
elements.c.addEventListener('click', callback)
```
## Install
Don't bother! It's only a few lines of code, just copy-paste `index.js` into your app and be done. 

Or import it:
```javascript
import elementsProxy from 'https://unpkg.com/elementsproxy@1.1.0';
```
Or install:
```
npm install elementsproxy
```

## Requirements
This package has no dependencies and uses JavScript's [Proxy object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) internally. `Proxy` has had full browser support for many years and should not require a polyfill. Compare your site's traffic to [caniuse](https://caniuse.com/?search=proxy) to see which browser versions would require a polyfill.
