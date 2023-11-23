---
title: Events
description: A brief resume of events and event listener in JavaScript
---

## Events

As defined at [MDN](https://developer.mozilla.org/en-US/docs/Web/Events), events are fired when something important happens, it will be caused mostly by user interaction like clicking a button, moving the mouse, scrolling, typing, hover an element and so on.

Here's a list of most common events on Javascript:

1. **Click**: Triggered when an element is clicked.
2. **Mouseover**: Occurs when the mouse pointer is moved over an element.
3. **Mouseout**: Occurs when the mouse pointer leaves an element.
4. **Change**: Fired when the value of an input element changes.
5. **Submit**: Triggered when a form is submitted.
6. **Keydown**: Occurs when a key on the keyboard is pressed.
7. **Load**: Triggered when a resource and its dependent resources have finished loading.
8. **Unload**: Occurs when a page is being unloaded.
9. **Resize**: Fired when the browser window is resized.
10. **DOMContentLoaded**: Fired when the initial HTML document has been completely loaded and parsed.

Events are the key for JS-based animations and effects, clicking a button could trigger an animation by using its event. But event itself doesn't execute any code, they need a counterpart that listen to them and response with code, those are called **Event Listeners**.

## Event Listeners

Event listeners are pieces of code that waits for a certain event to happen, and when that occurs, they execute a block of code, easy as that.

```js
window.addEventListener("click", () => console.log("Hello World!"));
```

Here we are adding an event listener to the global [window](https://developer.mozilla.org/en-US/docs/Web/API/Window) object that waits for click events, and when it detects one, they print "Hello World!".