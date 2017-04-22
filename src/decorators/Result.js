import Observable from '../observer/Observable.js';

// API: Result
export default class Result extends Observable {
  constructor(node) {
    super();
    // Decorate Node
    this.el = node;
    // ------------------
    // Event Wrapper Example:

    this.node.addEventListener('click', (event) => {
      // Cancel event delegation
      event.preventDefault();
      // Map native click to observable click...
      this.publish({
        type: 'click',
        target: this,
      });
    });
  }

  // METHODS

  hasClass(cls) {
    return this.el.classList.contains(cls);
  }
  addClass(cls) {
    return this.el.classList.add(cls);
  }
  removeClass(cls) {
    return this.el.classList.remove(cls);
  }
  css(str) {
    this.el.setAttribute('style', str);
  }

  // GETTERS

  get children() {
    // TODO: Map to Result objects
    return this.el.children;
  }
}
