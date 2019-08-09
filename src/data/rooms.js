const rooms = [
  //template object to store info about each room
  {
    id: '1',
    type: 'Комната обычная',
    title: 'Комната комфортненькая',
    slug: 'comfortable-room-3',
    people: '3',
    price: {
      currency: '$',
      value: '60',
    },
    description:
      'Как принято считать, ключевые особенности структуры проекта формируют глобальную экономическую сеть и при этом - рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Приятно, граждане, наблюдать, как диаграммы связей, вне зависимости от их уровня, должны быть ограничены исключительно образом мышления. Банальные, но неопровержимые выводы, а также сторонники тоталитаризма в науке, превозмогая сложившуюся непростую экономическую ситуацию, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. Равным образом, глубокий уровень погружения позволяет оценить значение новых предложений.',
    amenities: {
      additional: ['WiFi'],
      abscent: [],
    },
    //room page
    photos: [
      {
        src: '/_assets/img/other/image6.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image10.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image1.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image2.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image3.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image4.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image7.jpg',
        alt: 'Photo Alt',
      },
    ],
  },
  {
    id: '2',
    type: 'Отличные апартаменты',
    title: 'Красивая окна стеклянные комната',
    slug: 'glass-window-suite',
    people: '4',
    price: {
      currency: '$',
      value: '90',
    },
    description:
      'Как принято считать, ключевые особенности структуры проекта формируют глобальную экономическую сеть и при этом - рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Приятно, граждане, наблюдать, как диаграммы связей, вне зависимости от их уровня, должны быть ограничены исключительно образом мышления. Банальные, но неопровержимые выводы, а также сторонники тоталитаризма в науке, превозмогая сложившуюся непростую экономическую ситуацию, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. Равным образом, глубокий уровень погружения позволяет оценить значение новых предложений.',
    amenities: {
      additional: ['WiFi', 'Утюг'],
      abscent: ['Завтрак в постель'],
    },
    //room page
    photos: [
      {
        src: '/_assets/img/other/image1.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image7.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image2.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image3.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image10.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image6.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image4.jpg',
        alt: 'Photo Alt',
      },
    ],
  },
  {
    id: '3',
    type: 'Отличные апартаменты',
    title: 'Басейн аппартаменты',
    slug: 'pool-suite',
    people: '5',
    price: {
      currency: '$',
      value: '130',
    },
    description:
      'Как принято считать, ключевые особенности структуры проекта формируют глобальную экономическую сеть и при этом - рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Приятно, граждане, наблюдать, как диаграммы связей, вне зависимости от их уровня, должны быть ограничены исключительно образом мышления. Банальные, но неопровержимые выводы, а также сторонники тоталитаризма в науке, превозмогая сложившуюся непростую экономическую ситуацию, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. Равным образом, глубокий уровень погружения позволяет оценить значение новых предложений.',
    amenities: {
      additional: ['Завтрак в постель'],
      abscent: ['WiFi'],
    },
    //room page
    photos: [
      {
        src: '/_assets/img/other/image7.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image2.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image3.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image10.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image6.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image4.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image1.jpg',
        alt: 'Photo Alt',
      },
    ],
  },
  {
    id: '4',
    type: 'Отличные апартаменты',
    title: 'Люкс номер',
    slug: 'lux-suite',
    people: '2',
    price: {
      currency: '$',
      value: '150',
    },
    description:
      'Как принято считать, ключевые особенности структуры проекта формируют глобальную экономическую сеть и при этом - рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Приятно, граждане, наблюдать, как диаграммы связей, вне зависимости от их уровня, должны быть ограничены исключительно образом мышления. Банальные, но неопровержимые выводы, а также сторонники тоталитаризма в науке, превозмогая сложившуюся непростую экономическую ситуацию, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. Равным образом, глубокий уровень погружения позволяет оценить значение новых предложений.',
    amenities: {
      additional: [],
      abscent: [],
    },
    //room page
    photos: [
      {
        src: '/_assets/img/other/image2.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image3.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image10.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image6.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image4.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image1.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image7.jpg',
        alt: 'Photo Alt',
      },
    ],
  },
  {
    id: '5',
    type: 'Отличные апартаменты',
    title: 'Красивая окна стеклянные комната',
    slug: 'glass-window-suite-2',
    people: '4',
    price: {
      currency: '$',
      value: '90',
    },
    description:
      'Как принято считать, ключевые особенности структуры проекта формируют глобальную экономическую сеть и при этом - рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Приятно, граждане, наблюдать, как диаграммы связей, вне зависимости от их уровня, должны быть ограничены исключительно образом мышления. Банальные, но неопровержимые выводы, а также сторонники тоталитаризма в науке, превозмогая сложившуюся непростую экономическую ситуацию, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. Равным образом, глубокий уровень погружения позволяет оценить значение новых предложений.',
    amenities: {
      additional: ['WiFi', 'Утюг'],
      abscent: ['Завтрак в постель'],
    },
    //room page
    photos: [
      {
        src: '/_assets/img/other/image3.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image10.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image6.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image4.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image1.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image7.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image2.jpg',
        alt: 'Photo Alt',
      },
    ],
  },
  {
    id: '6',
    type: 'Комната обычная',
    title: 'Комната комфортненькая',
    slug: 'comfortable-room',
    people: '3',
    price: {
      currency: '$',
      value: '60',
    },
    description:
      'Как принято считать, ключевые особенности структуры проекта формируют глобальную экономическую сеть и при этом - рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Приятно, граждане, наблюдать, как диаграммы связей, вне зависимости от их уровня, должны быть ограничены исключительно образом мышления. Банальные, но неопровержимые выводы, а также сторонники тоталитаризма в науке, превозмогая сложившуюся непростую экономическую ситуацию, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. Равным образом, глубокий уровень погружения позволяет оценить значение новых предложений.',
    amenities: {
      additional: [],
      abscent: [],
    },
    //room page
    photos: [
      {
        src: '/_assets/img/other/image10.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image6.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image4.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image1.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image7.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image2.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image3.jpg',
        alt: 'Photo Alt',
      },
    ],
  },
  {
    id: '7',
    type: 'Отличные апартаменты',
    title: 'Красивая окна стеклянные комната',
    slug: 'glass-window-suite-3',
    people: '4',
    price: {
      currency: '$',
      value: '90',
    },
    description:
      'Как принято считать, ключевые особенности структуры проекта формируют глобальную экономическую сеть и при этом - рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Приятно, граждане, наблюдать, как диаграммы связей, вне зависимости от их уровня, должны быть ограничены исключительно образом мышления. Банальные, но неопровержимые выводы, а также сторонники тоталитаризма в науке, превозмогая сложившуюся непростую экономическую ситуацию, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. Равным образом, глубокий уровень погружения позволяет оценить значение новых предложений.',
    amenities: {
      additional: ['WiFi', 'Завтрак в постель'],
      abscent: ['Утюг'],
    },
    //room page
    photos: [
      {
        src: '/_assets/img/other/image6.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image4.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image1.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image7.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image2.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image3.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image10.jpg',
        alt: 'Photo Alt',
      },
    ],
  },
  {
    id: '8',
    type: 'Комната обычная',
    title: 'Комфортненько и побольше комната',
    slug: 'comfortable-large-room',
    people: '5',
    price: {
      currency: '$',
      value: '70',
    },
    description:
      'Равным образом, перспективное планирование прекрасно подходит для реализации новых предложений. Имеется спорная точка зрения, гласящая примерно следующее: реплицированные с зарубежных источников, современные исследования, превозмогая сложившуюся непростую экономическую ситуацию, смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. А также акционеры крупнейших компаний, инициированные исключительно синтетически, представлены в исключительно положительном свете.',
    amenities: {
      additional: [],
      abscent: ['Завтрак в постель'],
    },
    //room page
    photos: [
      {
        src: '/_assets/img/other/image6.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image4.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image1.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image7.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image2.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image3.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image10.jpg',
        alt: 'Photo Alt',
      },
    ],
  },
  {
    id: '9',
    type: 'Отличные апартаменты',
    title: 'Красивая окна стеклянные комната',
    slug: 'glass-window-suite-4',
    people: '4',
    price: {
      currency: '$',
      value: '90',
    },
    description:
      'Равным образом, перспективное планирование прекрасно подходит для реализации новых предложений. Имеется спорная точка зрения, гласящая примерно следующее: реплицированные с зарубежных источников, современные исследования, превозмогая сложившуюся непростую экономическую ситуацию, смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. А также акционеры крупнейших компаний, инициированные исключительно синтетически, представлены в исключительно положительном свете.',
    amenities: {
      additional: ['WiFi', 'Утюг', 'Завтрак в постель'],
      abscent: [],
    },
    //room page
    photos: [
      {
        src: '/_assets/img/other/image10.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image6.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image4.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image1.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image7.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image2.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image3.jpg',
        alt: 'Photo Alt',
      },
    ],
  },
  {
    id: '10',
    type: 'Отличные апартаменты',
    title: 'Басейн аппартаменты',
    slug: 'pool-suite-2',
    people: '5',
    price: {
      currency: '$',
      value: '130',
    },
    description:
      'Равным образом, перспективное планирование прекрасно подходит для реализации новых предложений. Имеется спорная точка зрения, гласящая примерно следующее: реплицированные с зарубежных источников, современные исследования, превозмогая сложившуюся непростую экономическую ситуацию, смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. А также акционеры крупнейших компаний, инициированные исключительно синтетически, представлены в исключительно положительном свете.',
    amenities: {
      additional: ['Завтрак в постель', 'Утюг'],
      abscent: [],
    },
    //room page
    photos: [
      {
        src: '/_assets/img/other/image3.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image10.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image6.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image4.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image1.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image7.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image2.jpg',
        alt: 'Photo Alt',
      },
    ],
  },
  {
    id: '12',
    type: 'Отличные апартаменты',
    title: 'Люкс номер',
    slug: 'lux-suite-2',
    people: '2',
    price: {
      currency: '$',
      value: '150',
    },
    description:
      'Равным образом, перспективное планирование прекрасно подходит для реализации новых предложений. Имеется спорная точка зрения, гласящая примерно следующее: реплицированные с зарубежных источников, современные исследования, превозмогая сложившуюся непростую экономическую ситуацию, смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. А также акционеры крупнейших компаний, инициированные исключительно синтетически, представлены в исключительно положительном свете.',
    amenities: {
      additional: ['Завтрак в постель'],
      abscent: ['WiFi'],
    },
    //room page
    photos: [
      {
        src: '/_assets/img/other/image2.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image3.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image10.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image6.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image4.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image1.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image7.jpg',
        alt: 'Photo Alt',
      },
    ],
  },
  {
    id: '13',
    type: 'Отличные апартаменты',
    title: 'Красивая окна стеклянные комната',
    slug: 'glass-window-suite-5',
    people: '4',
    price: {
      currency: '$',
      value: '90',
    },
    description:
      'Равным образом, перспективное планирование прекрасно подходит для реализации новых предложений. Имеется спорная точка зрения, гласящая примерно следующее: реплицированные с зарубежных источников, современные исследования, превозмогая сложившуюся непростую экономическую ситуацию, смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. А также акционеры крупнейших компаний, инициированные исключительно синтетически, представлены в исключительно положительном свете.',
    amenities: {
      additional: ['Утюг'],
      abscent: ['Завтрак в постель'],
    },
    //room page
    photos: [
      {
        src: '/_assets/img/other/image7.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image2.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image3.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image10.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image6.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image4.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image1.jpg',
        alt: 'Photo Alt',
      },
    ],
  },
  {
    id: '14',
    type: 'Комната обычная',
    title: 'Комната комфортненькая',
    slug: 'comfortable-room-2',
    people: '3',
    price: {
      currency: '$',
      value: '60',
    },
    description:
      'Как уже неоднократно упомянуто, сторонники тоталитаризма в науке, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут подвергнуты целой серии независимых исследований. В целом, конечно, выбранный нами инновационный путь не даёт нам иного выбора, кроме определения экспериментов, поражающих по своей масштабности и грандиозности.',
    amenities: {
      additional: ['WiFi'],
      abscent: [],
    },
    //room page
    photos: [
      {
        src: '/_assets/img/other/image1.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image2.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image3.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image4.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image6.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image7.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image10.jpg',
        alt: 'Photo Alt',
      },
    ],
  },
  {
    id: '15',
    type: 'Отличные апартаменты',
    title: 'Красивая окна стеклянные комната',
    slug: 'glass-window-suite-6',
    people: '4',
    price: {
      currency: '$',
      value: '90',
    },
    description:
      'Как принято считать, ключевые особенности структуры проекта формируют глобальную экономическую сеть и при этом - рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Приятно, граждане, наблюдать, как диаграммы связей, вне зависимости от их уровня, должны быть ограничены исключительно образом мышления. Банальные, но неопровержимые выводы, а также сторонники тоталитаризма в науке, превозмогая сложившуюся непростую экономическую ситуацию, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. Равным образом, глубокий уровень погружения позволяет оценить значение новых предложений.',
    amenities: {
      additional: ['Утюг'],
      abscent: ['Завтрак в постель'],
    },
    //room page
    photos: [
      {
        src: '/_assets/img/other/image10.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image7.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image6.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image4.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image3.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image2.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image1.jpg',
        alt: 'Photo Alt',
      },
    ],
  },
  {
    id: '16',
    type: 'Комната обычная',
    title: 'Комфортненько и побольше комната',
    slug: 'comfortable-large-room-2',
    people: '5',
    price: {
      currency: '$',
      value: '70',
    },
    description:
      'Как принято считать, ключевые особенности структуры проекта формируют глобальную экономическую сеть и при этом - рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Приятно, граждане, наблюдать, как диаграммы связей, вне зависимости от их уровня, должны быть ограничены исключительно образом мышления. Банальные, но неопровержимые выводы, а также сторонники тоталитаризма в науке, превозмогая сложившуюся непростую экономическую ситуацию, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. Равным образом, глубокий уровень погружения позволяет оценить значение новых предложений.',
    amenities: {
      additional: [],
      abscent: [],
    },
    //room page
    photos: [
      {
        src: '/_assets/img/other/image4.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image1.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image7.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image2.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image3.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image10.jpg',
        alt: 'Photo Alt',
      },
      {
        src: '/_assets/img/other/image6.jpg',
        alt: 'Photo Alt',
      },
    ],
  },
]

export default rooms
