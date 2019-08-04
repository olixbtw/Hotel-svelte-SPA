var ammReference = ['wifi', 'Утюг', 'Завтрак в постель']

function ammenitiesFilter(inputArray, inputFilter) {
  console.log('ammenities')
  // var changed = 0
  // var push = {}
  // inputFilter.forEach(element => {
  //   if (element) changed++
  // })

  // if (changed > 0) {
  //   //если фильтровать нужно
  //   var tempRooms = []
  //   // создаем новый массив = новый список отображения
  //   // проходимся по ВСЕМ элементам
  //   for (var jj = 0; jj < inputArray.length; jj++) {
  //     var additional = inputArray[jj].amenities.additional
  //     var abscent = inputArray[jj].amenities.abscent

  //     // смотрим есть ли услуга = добавляем
  //     inputFilter.forEach((element, index) => {
  //       additional.forEach(el => {
  //         if (element && ammReference[index] === el) {
  //           push[jj] = true
  //           // console.log(REFERENCE[jj]);
  //           // console.log(additional);
  //           // console.log(jj + " " + el);
  //         }
  //       })
  //     })
  //     inputFilter.forEach((element, index) => {
  //       abscent.forEach(el => {
  //         if (element && ammReference[index] === el) {
  //           push[jj] = false
  //         }
  //       })
  //     })
  //   }
  //   for (var jj = 0; jj < inputArray.length; jj++) {
  //     if (push[jj]) tempRooms.push(inputArray[jj])
  //   }
  //   // console.log(push);
  //   console.log('changed content')
  //   changed_before = true
  //   tempRooms = roomSort($roomsFilter.sort, tempRooms)
  //   return tempRooms
  // } else {
  //   console.log('nothing changed')
  //   //ничего не поме

  //   if (changed === 0 && changed_before) {
  //     var newRooms = roomSort($roomsFilter.sort, inputArray)
  //     return inputArray
  //   }
  //   rooms = roomSort($roomsFilter.sort, rooms)
  //   return rooms
  // }
}

export default ammenitiesFilter
