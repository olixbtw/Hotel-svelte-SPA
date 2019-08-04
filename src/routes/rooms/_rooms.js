const rooms = [
  //template object to store info about each room
  {
    id: '1',
    type: 'Room',
    title: 'Комната комфортненькая',
    slug: 'comfortable-room-3',
    people: '3',
    price: {
      currency: '$',
      value: '60',
    },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, repudiandae blanditiis? Maiores cum ex neque ad aspernatur culpa minus ducimus aperiam, explicabo fuga molestias omnis quod labore. Aliquam, aliquid quod!',
    amenities: {
      additional: ['wifi'],
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
    type: 'VIP suite',
    title: 'Красвая окна стеклянные комната',
    slug: 'glass-window-suite',
    people: '4',
    price: {
      currency: '$',
      value: '90',
    },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, repudiandae blanditiis? Maiores cum ex neque ad aspernatur culpa minus ducimus aperiam, explicabo fuga molestias omnis quod labore. Aliquam, aliquid quod!',
    amenities: {
      additional: ['wifi', 'Утюг'],
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
    type: 'VIP suite',
    title: 'Басейн аппартаменты',
    slug: 'pool-suite',
    people: '5',
    price: {
      currency: '$',
      value: '130',
    },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, repudiandae blanditiis? Maiores cum ex neque ad aspernatur culpa minus ducimus aperiam, explicabo fuga molestias omnis quod labore. Aliquam, aliquid quod!',
    amenities: {
      additional: ['Завтрак в постель'],
      abscent: ['wifi'],
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
    type: 'VIP suite',
    title: 'Люкс номер',
    slug: 'lux-suite',
    people: '2',
    price: {
      currency: '$',
      value: '150',
    },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, repudiandae blanditiis? Maiores cum ex neque ad aspernatur culpa minus ducimus aperiam, explicabo fuga molestias omnis quod labore. Aliquam, aliquid quod!',
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
    type: 'VIP suite',
    title: 'Красвая окна стеклянные комната',
    slug: 'glass-window-suite-2',
    people: '4',
    price: {
      currency: '$',
      value: '90',
    },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, repudiandae blanditiis? Maiores cum ex neque ad aspernatur culpa minus ducimus aperiam, explicabo fuga molestias omnis quod labore. Aliquam, aliquid quod!',
    amenities: {
      additional: ['wifi', 'Утюг'],
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
    type: 'Room',
    title: 'Комната комфортненькая',
    slug: 'comfortable-room',
    people: '3',
    price: {
      currency: '$',
      value: '60',
    },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, repudiandae blanditiis? Maiores cum ex neque ad aspernatur culpa minus ducimus aperiam, explicabo fuga molestias omnis quod labore. Aliquam, aliquid quod!',
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
    type: 'VIP suite',
    title: 'Красвая окна стеклянные комната',
    slug: 'glass-window-suite-3',
    people: '4',
    price: {
      currency: '$',
      value: '90',
    },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, repudiandae blanditiis? Maiores cum ex neque ad aspernatur culpa minus ducimus aperiam, explicabo fuga molestias omnis quod labore. Aliquam, aliquid quod!',
    amenities: {
      additional: ['wifi', 'Утюг'],
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
    id: '8',
    type: 'Room',
    title: 'Комфортненько и побольше комната',
    slug: 'comfortable-large-room',
    people: '5',
    price: {
      currency: '$',
      value: '70',
    },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, repudiandae blanditiis? Maiores cum ex neque ad aspernatur culpa minus ducimus aperiam, explicabo fuga molestias omnis quod labore. Aliquam, aliquid quod!',
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
    type: 'VIP suite',
    title: 'Красвая окна стеклянные комната',
    slug: 'glass-window-suite-4',
    people: '4',
    price: {
      currency: '$',
      value: '90',
    },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, repudiandae blanditiis? Maiores cum ex neque ad aspernatur culpa minus ducimus aperiam, explicabo fuga molestias omnis quod labore. Aliquam, aliquid quod!',
    amenities: {
      additional: ['wifi', 'Утюг', 'Завтрак в постель'],
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
    type: 'VIP suite',
    title: 'Басейн аппартаменты',
    slug: 'pool-suite-2',
    people: '5',
    price: {
      currency: '$',
      value: '130',
    },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, repudiandae blanditiis? Maiores cum ex neque ad aspernatur culpa minus ducimus aperiam, explicabo fuga molestias omnis quod labore. Aliquam, aliquid quod!',
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
    type: 'VIP suite',
    title: 'Люкс номер',
    slug: 'lux-suite-2',
    people: '2',
    price: {
      currency: '$',
      value: '150',
    },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, repudiandae blanditiis? Maiores cum ex neque ad aspernatur culpa minus ducimus aperiam, explicabo fuga molestias omnis quod labore. Aliquam, aliquid quod!',
    amenities: {
      additional: ['Завтрак в постель'],
      abscent: ['wifi'],
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
    type: 'VIP suite',
    title: 'Красвая окна стеклянные комната',
    slug: 'glass-window-suite-5',
    people: '4',
    price: {
      currency: '$',
      value: '90',
    },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, repudiandae blanditiis? Maiores cum ex neque ad aspernatur culpa minus ducimus aperiam, explicabo fuga molestias omnis quod labore. Aliquam, aliquid quod!',
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
    type: 'Room',
    title: 'Комната комфортненькая',
    slug: 'comfortable-room-2',
    people: '3',
    price: {
      currency: '$',
      value: '60',
    },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, repudiandae blanditiis? Maiores cum ex neque ad aspernatur culpa minus ducimus aperiam, explicabo fuga molestias omnis quod labore. Aliquam, aliquid quod!',
    amenities: {
      additional: ['wifi'],
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
    type: 'VIP suite',
    title: 'Красвая окна стеклянные комната',
    slug: 'glass-window-suite-6',
    people: '4',
    price: {
      currency: '$',
      value: '90',
    },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, repudiandae blanditiis? Maiores cum ex neque ad aspernatur culpa minus ducimus aperiam, explicabo fuga molestias omnis quod labore. Aliquam, aliquid quod!',
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
    type: 'Room',
    title: 'Комфортненько и побольше комната',
    slug: 'comfortable-large-room-2',
    people: '5',
    price: {
      currency: '$',
      value: '70',
    },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, repudiandae blanditiis? Maiores cum ex neque ad aspernatur culpa minus ducimus aperiam, explicabo fuga molestias omnis quod labore. Aliquam, aliquid quod!',
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
