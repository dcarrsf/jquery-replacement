
// API: Result
export default class Observable {

  constructor() {
    // Cache registered observers
    this.observers = {};
  }

  addListener(name, callback) {
    if (!this.observers[name]) {
      this.observers[name] = [];
    }
    this.observers[name].push(callback);
  }

  removeListener(name, callback) {
    const callbacks = this.observers[name];
    Object.keys(callbacks).forEach((func) => {
      if (callback === func) {
        delete this.observers[name];
      }
    });
  }

  dispatchEvent(eventObj) {
    const name = eventObj.name;
    const callbacks = this.observers[name];
    if (callbacks !== undefined) {
      callbacks.forEach((func) => {
        func.call(null, eventObj);
      });
    }
  }
}
