import Query from './decorators/Query.js';

// Factory function
function $(selector) {
  // Returns matching elements
  return new Query(selector);
}

// DOCUMENT

// Events
$.ready = function (callback, scope) {
  document.addEventListener('DOMContentLoaded', (event) => {
    callback.call(scope, event);
    document.removeEventListener('DOMContentLoaded', callback);
  });
};

export default $;
