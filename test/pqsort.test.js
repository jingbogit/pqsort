// const pqsort = require('../dist/pqsort.min.js')

// const pqsort = require('../src/pqsort.js')
// import { partial_quicksort } from '../src/pqsort.js'
const {partial_quicksort} = require('../dist/pqsort.min.js')

var t0 = transform([9, 8, 7, 6, 5, 4, 3, 2, 1])
var t1 = transform([5, 7, 4, 2, 8, 6, 1, 9, 0, 3])
var t2 = transform([5, 7, 4, 2, 8, 6, 1, 9, 0, 3])

// construct object {data: index, value: value} to keep the sorted index
function transform (arr) {
  return arr.map((v, index) => { return {data: index, value: v} })
}

test('sort inversed array', () => {
  partial_quicksort(t0, 9)
  // expect(arr1[0]).toBe(8)
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
  partial_quicksort(t1, 3) // sort the 3 minimum elements, and put them at the beginning of the array
  // expect(arr1[0]).toBe(8)
  expect(t1.slice(0, 3)).toEqual([ { data: 8, value: 0 },
    { data: 6, value: 1 },
    { data: 3, value: 2 } ]
  )
})

test('sort arbitrary array', () => {
  partial_quicksort(t2, 10) // sort the 3 minimum elements, and put them at the beginning of the array
  // expect(arr1[0]).toBe(8)
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