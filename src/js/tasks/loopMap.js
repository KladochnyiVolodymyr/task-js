export default class Map {
  constructor(arr) {
    this.arr = arr;
  }
  loopMap(arr) {
    //console.log(this.arr);
    let newArr = this.arr.map(function(name) {
      return name.length;
    });
    //console.log(newArr);
  }
}
  
