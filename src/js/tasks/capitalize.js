export default function capitalize(str) {
  var arr = str.split(' ');
  var res = $.map( arr, function( item, index ) {
    return item[0].toUpperCase() + item.slice(1);
  });
  console.log(res);
  return res;
}


