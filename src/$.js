import Query from './decorators/Query.js';

// Factory function
function $(selector) {
  // Returns matching elements
  return new Query(selector);
}

// WINDOW

// Events
$.resize = function (callback, scope = null) {
  window.addEventListener('resize', (event) => {
    callback.call(scope, event);
  });
};

// DOCUMENT

// Events
$.ready = function (callback, scope = null) {
  document.addEventListener('DOMContentLoaded', (event) => {
    callback.call(scope, event);
    document.removeEventListener('DOMContentLoaded', callback);
  });
};

export default $;
