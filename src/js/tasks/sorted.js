export default class Sorted {
  constructor(arr) {
    this.arr = arr;
  }
  sortedObjects(arr) {
    this.arr.sort(function(a,b) {
      if(a.id > b.id) {
        return true;
      }
    });
    //console.log(this.arr);
  }
}
