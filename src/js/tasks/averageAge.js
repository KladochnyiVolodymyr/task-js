export default class AverageAge {
  constructor(arr) {
    this.arr = arr;
  }
  averageAge(arr) {
    let dogs = this.arr.filter(function(element) {
      return element.type === 'dog';
    });
    let res = dogs.reduce(function(sum, current) {
      return sum + current.age;
    },0);
    console.log(res/dogs.length);
  }
}
