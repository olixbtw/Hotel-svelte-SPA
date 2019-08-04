var ammReference = ['wifi', 'Утюг', 'Завтрак в постель']

function amenitiesFilter(inputArray, inputFilter) {
  inputFilter = inputFilter.amenities
  var checkecProperties = 0
  inputFilter.forEach(element => {
    if (element) checkecProperties++
  })

  if (checkecProperties > 0) {
    var push = {}
    var tempRooms = []
    //если фильтровать нужно
    // создаем новый массив = новый список отображения
    // проходимся по ВСЕМ элементам
    for (var jj = 0; jj < inputArray.length; jj++) {
      push[jj] = 0
      var additional = inputArray[jj].amenities.additional
      var abscent = inputArray[jj].amenities.abscent

      console.log(inputFilter)
      // смотрим есть ли услуга = добавляем
      // проверить все отмеченые
      inputFilter.forEach((element, index) => {
        additional.forEach(el => {
          if (element && ammReference[index] === el) {
            push[jj]++
          }
        })
      })

      inputFilter.forEach((element, index) => {
        abscent.forEach(el => {
          if (element && ammReference[index] === el) {
            push[jj] = false
          }
        })
      })
    }

    ///
    ///

    for (var jj = 0; jj < inputArray.length; jj++) {
      if (push[jj] === checkecProperties) tempRooms.push(inputArray[jj])
    }

    return tempRooms
  } else {
    return inputArray
  }
}

export default amenitiesFilter
