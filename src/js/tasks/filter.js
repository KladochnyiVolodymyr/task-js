export default class FilterArr {
  constructor(arr) {
    this.arr = arr;
  }
  filtered(arr) {
    let newArr = this.arr.filter(function(element, index) {
      if( index%2) {
        return true;
      }else{
        return false;
      }
    });
    return newArr;
  }
}
