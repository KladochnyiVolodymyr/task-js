import sayHello from './lib/sayHello.js';
import FilterArr from './tasks/filter';
import Sorted from './tasks/sorted';
import Map from './tasks/loopMap';
import ToggleAll from './tasks/toggleAll';
sayHello();

let test = new FilterArr([10,'',0,2, 8, 6, 9, 11, 5, 32, 1]);
test.filtered();

let sorted = new Sorted([
  { id: 5, name: 'Tokio' },
  { id: 3, name: 'Kyiv' },
  { id: 8, name: 'New York' },
  { id: 1, name: 'Milan' },
  { id: 6, name: 'San Marino' }
]);

sorted.sortedObjects();

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
