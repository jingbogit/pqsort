Partial quicksort.

## install ##
```bash
npm install pqsort --save-prod
```

## Usage ##
```js
const pqsort = require('pqsort')

var t1 = transform([5, 7, 4, 2, 8, 6, 1, 9, 0, 3])
var t2 = transform([5, 7, 4, 2, 8, 6, 1, 9, 0, 3])

/** Here we construct an object `{value: value, data: index}` to keep the sorted index under the `data` attribute.
 You may put anything under the `data` attribute.
 The sorting will be performed on the `value` attribute. **/
function transform (arr) {
  return arr.map(function (v, index) { return {value: v, data: index} })
}

// sort the 3 minimum values in the array and put them at the beginning
pqsort(t1, 3)
/* t1 = [ { data: 8, value: 0 },
     { data: 6, value: 1 },
     { data: 3, value: 2 }, ...] */

// sort 10 values in the array (all of them)
pqsort(t2)
/* t2 = [{ data: 8, value: 0 },
    { data: 6, value: 1 },
    { data: 3, value: 2 },
    { data: 9, value: 3 },
    { data: 2, value: 4 },
    { data: 0, value: 5 },
    { data: 5, value: 6 },
    { data: 1, value: 7 },
    { data: 4, value: 8 },
    { data: 7, value: 9 }] */
```

## TODO ##

* self-defined comparision function
