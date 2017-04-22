import Query from './decorators/Query.js';

// Factory function
function $(selector) {
  // Returns matching elements
  return new Query(selector);
}
// function $(selector) {
//   // Configure
//   const elements = Utils.shared.queryAll(selector);
//   if (elements === null) {
//     return null;
//   }
//   // Returns matching elements
//   return elements;
// }

// DOCUMENT

// Events
$.ready = function (callback, scope) {
  document.addEventListener('DOMContentLoaded', (event) => {
    callback.call(scope, event);
    document.removeEventListener('DOMContentLoaded', callback);
  });
};

// PLUGINS

$.addExt = function (name, extension) {
  // Create a proxy object
  $[name] = {};
  // Add references to proxy (i.e. calling methods on the proxy,
  // calls methods on the extension)
  Object.keys(extension).forEach((key) => {
    const api = extension[key];
    // Expose method references (only)...
    if (api === Function) {
      $[name][key] = api;
    }
  });
};

export default $;
