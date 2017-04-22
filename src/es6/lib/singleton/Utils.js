// API: Utils
export default class Utils {

  static shared() {
    if (!Utils.instance) {
      Utils.instance = new Utils();
    }
    return Utils.instance;
  }

  // METHODS

  queryAll(selector, nullIfEmpty = true) {
    const results = document.querySelectorAll(selector);
    if (results.length === 0 && nullIfEmpty) {
      return null;
    }
    return results;
  }
}
