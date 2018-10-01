import sayHello from './lib/sayHello.js';
import FilterArr from './tasks/filter';
import Sorted from './tasks/sorted';
import Map from './tasks/loopMap';
import ToggleAll from './tasks/toggleAll';
import capitalize from './tasks/capitalize';
import AverageAge from './tasks/averageAge';
sayHello();

let test = new FilterArr([10,'',0,2, 8, 6, 9, 11, 5, 32, 1]);
console.log(test.filtered());



let sorted = new Sorted([
  { id: 5, name: 'Tokio' },
  { id: 3, name: 'Kyiv' },
  { id: 8, name: 'New York' },
  { id: 1, name: 'Milan' },
  { id: 6, name: 'San Marino' }
]);

console.log(sorted.sortedObjects());

let map = new Map(['Есть', 'жизнь', 'на', 'Марсе']);

map.loopMap();

let toggle = new ToggleAll(
  [
    {title: 'First', isCompleted: true},
    {title: 'Second', isCompleted: true},
    {title: 'Third', isCompleted: true},
    {title: 'Fourth', isCompleted: true},
    {title: 'Fifth', isCompleted: true}
  ]
);
toggle.toggleAll();


capitalize('Lorem ipsum dolor sit amet, ius no quas dissentiunt, ex aeque phaedrum mel');

let average = new AverageAge(
  [
    {type: 'dog', age: 3 },
    {type: 'dog', age: 8 },
    {type: 'cat', age: 3 },
    {type: 'dog', age: 4 },
    {type: 'cat', age: 6 }
  ]
);
average.averageAge();


var arr = [1, 2, 3, 4, 5];

