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
This function returns a Proxy object. When a property is accessed on that object, the Proxy takes the property name and uses `document.getElementById()` to find an element with that id. It then caches a reference to that element on the returned object for direct and instant access. If an element is not found, `document.getElementById()` returns `null` which is the value saved for that property. However, subsequent access to properties with no element will attempt `document.getElementById()` again until an element is found and cached.
## Why?
Because `document.all` is unreliable and `document.getElementById()` gets messy:
```javascript
// You have to do all these lookups and create
// variables for all the elements you need.
const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');
const d = document.getElementById('d');
const e = document.getElementById('e');
const f = document.getElementById('f');
const g = document.getElementById('g');

// Do stuff to those elements
if (data.length > 0) {
  a.textConent = 'Hello world';
  a.hidden = false;
}

b.classList.toggle('flex-col');
c.addEventListener('click', callback);
// and so on...

// Or worse: Repeated use of the id string, wasted lookups, and noisy code
if (x > y) {
  document.getElementById('a').textConent = 'Hello world';
  document.getElementById('a').hidden = false;
}

document.getElementById('b').classList.toggle('flex-col');
document.getElementById('c').addEventListener('click', callback)
```
Get cleaner faster code with Elements Proxy:
```javascript
// One line of code regardless of the number of elements needed
const elements = elementsProxy();

if (data.length > 0) {
  // Simple access to elements as properties instead of string names
  elements.a.textConent = 'Hello world';
  // Cached lookups on subsequent access
  elements.a.hidden = false;
}

// Much cleaner all around
elements.b.classList.toggle('flex-col');
elements.c.addEventListener('click', callback)
```
## Install
Honestly, don't bother! It's only a few lines of code, so just copy-paste `index.js` into your app and be done :)

Or import it:
```javascript
import elementsProxy from 'https://unpkg.com/elementsproxy@1.1.0';
```
Or install:
```
npm install elementsproxy
```

## Requirements
This package has no dependencies and uses JavScript's [Proxy object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) internally.
