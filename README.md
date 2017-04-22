# jquery-replacement
Light-weight wrapper for DOM traversal and simple web API operations.

## Overview

This mini-project evolved out of a need to move away from jQuery in favor of vanilla web API. jQuery is powerful, but it's heavy and includes many features we don't commonly use. That said, the simplicity and breivity of the jQuery syntax is preferable to the more verbose web API methods. This library provides a simple jQuery-like syntax, built around a minimal core API.

## Design Patterns

The concept starts with a factory function ($) that accepts a query selector in the form of a string. The factory returns matches to the query formatted as a series of decorator objects. The decoratored results include simple jQuery-like methods used to manipulate the DOM.

## Core API

The core API is simple, supporting:

- DOM traversal
- DOM events (ready, resize)
- CSS manipulation
- AJAX (XMLHttpRequest, fetch, JSONP) (TODO)


