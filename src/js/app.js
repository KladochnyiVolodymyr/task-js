import sayHello from './lib/sayHello.js';
import FilterArr from './tasks/filter';
import Sorted from './tasks/sorted';
sayHello();

let test = new FilterArr([2, 8, 6, 9, 11, 5, 32, 1]);
test.filtered();

let sorted = new Sorted([
  { id: 5, name: 'Tokio' },
  { id: 3, name: 'Kyiv' },
  { id: 8, name: 'New York' },
  { id: 1, name: 'Milan' },
  { id: 6, name: 'San Marino' }
]);

sorted.sortedObjects();
