import Observable from '../observer/Observable.js';

// API: Result
export default class Result extends Observable {
  constructor(domNode) {
    super();
    // Decorate Node
    this.node = domNode;
    // Events (Example)
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

  get children() {
    // TODO: Map to Result objects
    return this.node.children;
  }
}
