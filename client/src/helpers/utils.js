class Utilility {
  getCurrentActiveRoute(path) {
    let splittedPath = path.split('/');
    if (splittedPath && Array.isArray(splittedPath) && splittedPath.length > 1) {
      return splittedPath[1];
    }
    return null;
  }
  // Doesn't really check if it's a style Object
  // Basic implemenetation to check if it's not a string
  // of classNames and is an Object
  // TODO: Better implementation
  isStyleObject(obj) {
    return typeof obj === 'object';
  }
  parseHeader(requestObj, headerName) {
    if (requestObj && requestObj.headers[headerName]) {
      return requestObj.headers[headerName];
    }
    return null;
  }
  millisToSeconds(millis) {
    var seconds = millis / 1000;
    return `${seconds}`;
  }
}
const util = new Utilility();

export { util };
