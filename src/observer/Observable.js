// API: Result
export default class Observable {
  constructor() {
    // Cache registered observers
    this.observers = {};
  }

  subscribe(name, callback) {
    if (!this.observers[name]) {
      this.observers[name] = [];
    }
    this.observers[name].push(callback);
  }

  unsubscribe(name, callback) {
    const callbacks = this.observers[name];
    Object.keys(callbacks).forEach((func) => {
      if (callback === func) {
        delete this.observers[name];
      }
    });
  }

  publish(eventObj) {
    const name = eventObj.name;
    const callbacks = this.observers[name];
    if (callbacks !== undefined) {
      callbacks.forEach((func) => {
        func.call(null, eventObj);
      });
    }
  }
}
