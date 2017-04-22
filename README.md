# jquery-replacement
Light-weight wrapper for DOM traversal and simple web API operations.

This mini-project came about after a gradual change from using jQuery to vanilla ES6 and web API. jQuery is heavy and I find I only need a small portion of it in my common work. So instead, I use vanilla web API, but that tends to be verbose - making me long for the breivity of jQuery. In response, I created a light-weight jQuery-like syntax.

## Design Patterns

The funny thing about this exercise is that you start to see classic design patterns immediately. The concept starts with a factory function ($) that accepts a query selector in the form of a string. The factory returns matches to the query formatted as a series of decorator objects. The decoratored results of the query include simple jQuery-like methods used to manipulate the DOM.

The factory function itself includes a handful of static methods that can be used to respond to event timing, AJAX, and other common tasks.

## Core API

The core API is simple, supporting:

- DOM traversal
- DOM events (ready, scroll, resize, mouse, touch)
- CSS manipulation
- Flexbox support
- AJAX (XMLHttpRequest, fetch, JSONP)


