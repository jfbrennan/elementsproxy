# Elements Proxy
Get direct access to any HTMLElement with an ID:
```html
<div id="myId">Hi</div>
<div id="myOtherId">Other</div>

<script>
  import elementsProxy from 'https://unpkg.com/elementsproxy@1.1.0';

  const elements = elementsProxy();
  elements.myId.textContent = 'Bye';
  elements.myOtherId.hidden = true;
</script>
```
This function returns a Proxy object. When a property is accessed on that object, the Proxy takes the property name and uses `document.getElementById()` to find an element with that id. It then caches a reference to that element on the returned object for direct and instant access. If an element is not found, `document.getElementById()` returns `null` which is the value saved for that property. However, subsequent access to properties with no element will attempt `getElementById()` again until an element is found and cached.
## Why?
Because `document.all` is unreliable and `document.getElementById()` gets messy:
```javascript
// You have to do tons of explicit lookups and create variables for all the elements you'll need
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
// Repeated use of the id, wasted lookups, and noisy code
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
