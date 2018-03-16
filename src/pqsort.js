//  function partial_quicksort(A, i, j, k)
//      if i < j
//          p ← pivot(A, i, j)
//          p ← partition(A, i, j, p)
//          partial_quicksort(A, i, p-1, k)
//          if p < k-1
//              partial_quicksort(A, p+1, j, k)

/**
 * Swap the firstIndex element with the secondIndex one.
 * 
 * @param {object[]} items 
 * @param {number} firstIndex 
 * @param {number} secondIndex 
 */
function swap (items, firstIndex, secondIndex) {
  let temp = items[firstIndex]
  items[firstIndex] = items[secondIndex]
  items[secondIndex] = temp
}

function partition (items, left, right) {
  let pivot = items[Math.floor((right + left) / 2)]
  let i = left
  let j = right
  while (i <= j) {
    while (items[i].value < pivot.value) { i++ }
    while (items[j].value > pivot.value) { j-- }
    if (i <= j) {
      swap(items, i, j)
      i++
      j--
    }
  }
  return i
}

function quickSort (items, left = 0, right = items.length - 1) {
  var index
  if (items.length > 1) {
    index = partition(items, left, right)
    if (left < index - 1) {
      quickSort(items, left, index - 1)
    }
    if (index < right) {
      quickSort(items, index, right)
    }
  }
  return items
}

/**
 * sort the k-minimum values from an array.
 * 
 * space complexity O(n)
 * expected time O(n + k*log(k))
 *
 * @see {@link https://en.wikipedia.org/wiki/Partial_sorting}
 * @param {{value, data}[]} items - value is used for sorting, data is the content attached to the value
 * @param {number} k - [1, items.length]
 * @returns {{value, data}[k]}
 */
function partial_quicksort (items, k, i = 0, j = items.length - 1) {
  // if (items.length <= 1) {
  //   return items
  // }

  // if (k <= 0) {
  //   return []
  // } else if (k >= items.length) {
  //   return items
  // }

  if (i < j) {
    let p = partition(items, i, j)
    partial_quicksort(items, k, i, p - 1)
    if (p < k - 1) {
      // partial_quicksort(A, p+1, j, k)
      partial_quicksort(items, k, p, j)
    }
  }

  // let less = []
  // let greater = []

  // let pivot = arr.splice(Math.floor(arr.length / 2), 1)

  // for (let i = arr.length - 1; i >= 0; i--) {
  //   if (r[i] <= pivot) {
  //     less.push(r[i])
  //   } else {
  //     greater.push(r[i])
  //   }
  // }

  // let c = []

  // return c.concat(less.quickSort(), pivot, greater.quickSort())
}

export {partial_quicksort, quickSort}
