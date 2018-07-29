export default class ToggleAll {
  constructor(arr) {
    this.arr = arr;
  }
  toggleAll(arr) {
    /* let arrStatus = this.arr.every(function(status) {
      return (status.isCompleted === false);
    }); */
    let arrStatusTest = this.arr.every(function(status) {
      return (status.isCompleted === true);
    });
    if(arrStatusTest) {
      this.arr.map(function(item) {
        item.isCompleted = false;
      });
    }else{
      this.arr.map(function(item) {
        item.isCompleted = true;
      });
    }
    console.log(this.arr);
  }
}
  
