export default class Sorted {
  constructor(arr) {
    this.arr = arr;
  }
  sortedObjects(arr) {
    this.arr.sort(function(a,b) {
      return a.id > b.id;
    });
    return this.arr;
  }
}
