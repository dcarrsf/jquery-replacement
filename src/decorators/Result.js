import Observable from '../observer/Observable.js';

// API: Result
export default class Result extends Observable {
  constructor(domNode) {
    super();
    // Decorate Node
    this.node = domNode;
    // Events
    this.node.addEventListener('click', () => {
      // Map native click to observable click...
      this.dispatchEvent({
        type: 'click',
        target: this,
      });
    });
  }

  get children() {
    return this.node.children;
  }
}
