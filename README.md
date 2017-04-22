# jquery-replacement
Light-weight wrapper for DOM traversal and simple web API operations.

## Overview

This mini-project evolved out of a need to drop jQuery in favor of vanilla web API. Why? jQuery is powerful, but it's heavy and includes many features that I don't commonly use. That said, the simplicity and breivity of the jQuery syntax is preferable to the more verbose web API methods. So, I created a light-weight jQuery-like syntax.

## Design Patterns

The concept starts with a factory function ($) that accepts a query selector in the form of a string. The factory returns matches to the query formatted as a series of decorator objects. The decoratored results of the query include simple jQuery-like methods used to manipulate the DOM.

## Core API

The core API is simple, supporting:

- DOM traversal
- DOM events (ready, scroll, resize, mouse, touch)
- CSS manipulation
- AJAX (XMLHttpRequest, fetch, JSONP)


