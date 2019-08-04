var reg = /[^0-9]/
function compare(a, b) {
  if (+a[sortBy].replace(reg, '') < +b[sortBy].replace(reg, '')) {
    if (!displayReverse) return -1
    if (displayReverse) return 1
  }
  if (+a[sortBy].replace(reg, '') > +b[sortBy].replace(reg, '')) {
    if (!displayReverse) return 1
    if (displayReverse) return -1
  }
  return 0
}

var displayReverse, sortBy, tempRooms
function roomSortOrder(inputArray, inputSort) {
  displayReverse = inputSort.reverse
  sortBy = inputSort.sort
  tempRooms = inputArray.concat()
  if (sortBy) {
    tempRooms = tempRooms.sort(compare)
  }

  return tempRooms
}

export default roomSortOrder
