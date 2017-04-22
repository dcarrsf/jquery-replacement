# jquery-replacement
Light-weight wrapper for DOM traversal and simple web API operations.

## Premise

This mini-project came about after a gradual change from using jQuery to vanilla ES6 and web API. jQuery is heavy and I find I only need a small portion of it in my common work. So instead, I use vanilla web API, but that tends to be verbose - making me long for the breivity of jQuery. In response, I decided to create a light-weight jQuery-like syntax for use in my DOM manipulation projects.

## Design Patterns

The funny thing about this exercise is that you start to see classic design patterns immediately. The concept starts with a factory function ($) that accepts a query selector in the form of a string. The factory returns a matches to the query formatted as a series of decorators. The decoratored results of the query include simple jQuery-like methods used to manipulate the DOM.

The factory function itself includes a handful of static methods that can be used to respond to event timing in the DOM, and other common tasks.

## Core API

I'd like the core API to remain simple, however the project is design in a way where you can easily add utilities as needed.

The core API supports:

- DOM traversal
- DOM events (ready, scroll, resize, mouse, touch)
- CSS manipulation
- AJAX (XMLHttpRequest, fetch, JSONP)


