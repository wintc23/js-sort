// 归并排序
function merge(l1, l2) {
  let i1 = 0, i2 = 0, result = []
  while (i1 < l1.length && i2 < l2.length) result.push(l1[i1] < l2[i2] ? l1[i1++] : l2[i2++])
  let rest = i1 >= l1.length ? l2.slice(i2) : l1.slice(i1)
  return result.concat(rest)
}

function mergeSort(list) {
  if (list.length <= 1) return [...list]
  let mid = Math.floor(list.length / 2)
  return merge(mergeSort(list.slice(0, mid)), mergeSort(list.slice(mid)))
}

console.log(mergeSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3]))
module.exports = mergeSort
