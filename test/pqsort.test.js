const pqsort = require('../dist/pqsort.min.js')

var t0 = transform([9, 8, 7, 6, 5, 4, 3, 2, 1])
var t1 = transform([5, 7, 4, 2, 8, 6, 1, 9, 0, 3])
var t2 = transform([5, 7, 4, 2, 8, 6, 1, 9, 0, 3])

// construct object {data: index, value: value} to keep the sorted index
function transform (arr) {
  return arr.map(function (v, index) { return {value: v, data: index} })
}

test('pqsort is a function', () => {
  console.log(pqsort)
  expect(pqsort).toBeDefined()
})

test('sort inversed array', () => {
  pqsort(t0) // sort the whole array
  expect(t0).toEqual([ { data: 8, value: 1 },
    { data: 7, value: 2 },
    { data: 6, value: 3 },
    { data: 5, value: 4 },
    { data: 4, value: 5 },
    { data: 3, value: 6 },
    { data: 2, value: 7 },
    { data: 1, value: 8 },
    { data: 0, value: 9 } ]
  )
})

test('sort first 3 elements', () => {
  pqsort(t1, 3) // sort the 3 minimum elements, and put them at the beginning of the array
  expect(t1.slice(0, 3)).toEqual([ { data: 8, value: 0 },
    { data: 6, value: 1 },
    { data: 3, value: 2 } ]
  )
})

test('sort arbitrary array', () => {
  pqsort(t2, 10)
  expect(t2).toEqual([ { data: 8, value: 0 },
    { data: 6, value: 1 },
    { data: 3, value: 2 },
    { data: 9, value: 3 },
    { data: 2, value: 4 },
    { data: 0, value: 5 },
    { data: 5, value: 6 },
    { data: 1, value: 7 },
    { data: 4, value: 8 },
    { data: 7, value: 9 }
  ])
})
