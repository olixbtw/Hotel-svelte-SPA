function guestsFilter(inputArray, inputFilter) {
  var tempRooms = inputArray.concat()
  inputFilter = inputFilter.guests

  for (var i = 0; i < tempRooms.length; i++) {
    if (inputFilter.larger ? tempRooms[i].people < inputFilter.n : tempRooms[i].people != inputFilter.n) {
      // убираем
      tempRooms.splice(i, 1)
      i--
    }
  }

  return tempRooms
  // console.log('guest')
}

export default guestsFilter
