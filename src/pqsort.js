/**
 * @fileoverview partial quicksort and related functions
 * @author Jingbo Liu <jingbo@connect.ust.hk>
 */

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

function partition (items, i, j) {
  let pivot = items[Math.floor((j + i) / 2)]
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
  if (i < j) {
    let p = partition(items, i, j)
    partial_quicksort(items, k, i, p - 1)
    if (p < k - 1) {
      partial_quicksort(items, k, p, j)
    }
  }
}

export {partial_quicksort, quickSort}
