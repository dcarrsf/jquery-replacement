
import Utils from '../singleton/Utils.js';
import Result from './Result.js';

// API: Query
export default class Query {

  constructor(selector) {
    // Selector as String
    this.selector = selector;
    // Decorate NodeList
    this.nodeList = Utils.shared().queryAll(selector);
    // Wrap nodes
    this.results = this.map((item) => new Result(item));
  }

  // METHODS

  map(func) {
    const newArr = [];
    this.nodeList.forEach((item) => {
      newArr.push(func.call(null, item));
    });
    return newArr;
  }

  get(index) {
    if (index > 0 && index < this.length) {
      return this.results[index];
    }
    return null;
  }

  isEmpty() {
    return this.length === 0;
  }

  // GETTERS

  get length() {
    return this.results.length;
  }
}
