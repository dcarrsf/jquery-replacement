// API: Utils
export default class Utils {
  // Static Method
  static shared() {
    if (!Utils.instance) {
      Utils.instance = Object.create(Utils.prototype);
    }
    return Utils.instance;
  }

  // METHODS

  queryAll(selector, nullIfEmpty = false) {
    const results = document.querySelectorAll(selector);
    if (results.length === 0 && nullIfEmpty) {
      return null;
    }
    return results;
  }
}
