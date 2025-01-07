const jsonData = {
  professions: [
    { id: '67rdca3eeb7f6fgeed471818', name: 'Доктор' },
    { id: '67rdca3eeb7f6fgeed471820', name: 'Официант' },
    { id: '67rdca3eeb7f6fgeed471814', name: 'Физик' },
    { id: '67rdca3eeb7f6fgeed471822', name: 'Инженер' },
    { id: '67rdca3eeb7f6fgeed471824', name: 'Актер' },
    { id: '67rdca3eeb7f6fgeed471829', name: 'Повар' }
  ],
  qualities: [
    {
      id: '67rdca3eeb7f6fgeed471198',
      key: 'tedious',
      name: 'Нудила',
      color: 'primary'
    },
    {
      id: '67rdca3eeb7f6fgeed471100',
      key: 'strange',
      name: 'Странный',
      color: 'secondary'
    },
    {
      id: '67rdca3eeb7f6fgeed471101',
      key: 'buller',
      name: 'Троль',
      color: 'success'
    },
    {
      id: '67rdca3eeb7f6fgeed471156',
      key: 'alcoholic',
      name: 'Алкоголик',
      color: 'danger'
    },
    {
      id: '67rdca3eeb7f6fgeed471102',
      key: 'handsome',
      name: 'Красавчик',
      color: 'info'
    },
    {
      id: '67rdca3eeb7f6fgeed471103',
      key: 'uncertain',
      name: 'Неуверенный',
      color: 'dark'
    }
  ],
  tasks: [
    {
      id: '9f6b5277-2f5b-4dfd-a769-c36103709508',
      createdAt: 1735316674538,
      done: false,
      userId: 'e192a4ad-22a0-4343-923d-e31872699874',
      title: 'dfff'
    }
  ],
  users1: [{ id: 'ef495eb5-f6f6-4209-a8b3-d84a3dc305e9', email: 'art@san.ru' }],
  users: [
    {
      id: '67rdca3eeb7f6fgeed471815',
      name: 'Джон Дориан',
      email: 'johndorian@fastcompany.ru',
      sex: 'male',
      profession: '67rdca3eeb7f6fgeed471818',
      qualities: [
        '67rdca3eeb7f6fgeed471198',
        '67rdca3eeb7f6fgeed471103',
        '67rdca3eeb7f6fgeed471100'
      ],
      completedMeetings: 36,
      rate: 2.5,
      bookmark: false
    }
  ]
}

const users = [
  {
    _id: '67rdca3eeb7f6fgeed471815',
    name: 'Джон Дориан',
    email: 'johndorian@fastcompany.ru',
    sex: 'male',
    profession: '67rdca3eeb7f6fgeed471818',
    qualities: [
      '67rdca3eeb7f6fgeed471198',
      '67rdca3eeb7f6fgeed471103',
      '67rdca3eeb7f6fgeed471100'
    ],
    completedMeetings: 36,
    rate: 2.5,
    bookmark: false
  },
  {
    _id: '67rdca3eeb7f6fgeed471816',
    name: 'Кокс',
    email: 'koks@fastcompany.ru',
    sex: 'male',
    profession: '67rdca3eeb7f6fgeed471818',
    qualities: [
      '67rdca3eeb7f6fgeed471101',
      '67rdca3eeb7f6fgeed471102',
      '67rdca3eeb7f6fgeed471156'
    ],
    completedMeetings: 15,
    rate: 2.5,
    bookmark: false
  },
  {
    _id: '67rdca3eeb7f6fgeed471817',
    name: 'Боб Келсо',
    email: 'bobkelso@fastcompany.ru',
    sex: 'male',
    profession: '67rdca3eeb7f6fgeed471818',
    qualities: ['67rdca3eeb7f6fgeed471101'],
    completedMeetings: 247,
    rate: 3.5,
    bookmark: false
  },
  {
    _id: '67rdca3eeb7f6fgeed471818',
    name: 'Рэйчел Грин',
    email: 'rachelgreene@fastcompany.ru',
    sex: 'female',
    profession: '67rdca3eeb7f6fgeed471820',
    qualities: ['67rdca3eeb7f6fgeed471103'],
    completedMeetings: 148,
    rate: 3.5,
    bookmark: false
  },
  {
    _id: '67rdca3eeb7f6fgeed471819',
    name: 'Шелдон Купер',
    email: 'sheldoncooper@fastcompany.ru',
    sex: 'male',
    profession: '67rdca3eeb7f6fgeed471814',
    qualities: ['67rdca3eeb7f6fgeed471100', '67rdca3eeb7f6fgeed471198'],
    completedMeetings: 37,
    rate: 4.6,
    bookmark: false
  },
  {
    _id: '67rdca3eeb7f6fgeed471820',
    name: 'Леонард Хофстедтер',
    email: 'leonardhofstedter@fastcompany.ru',
    sex: 'male',
    profession: '67rdca3eeb7f6fgeed471814',
    qualities: ['67rdca3eeb7f6fgeed471100', '67rdca3eeb7f6fgeed471103'],
    completedMeetings: 147,
    rate: 3.5,
    bookmark: false
  },
  {
    _id: '67rdca3eeb7f6fgeed471821',
    name: 'Говард Воловиц',
    email: 'howardwolowitz@fastcompany.ru',
    sex: 'male',
    profession: '67rdca3eeb7f6fgeed471822',
    qualities: ['67rdca3eeb7f6fgeed471100', '67rdca3eeb7f6fgeed471198'],
    completedMeetings: 72,
    rate: 3.5,
    bookmark: false
  },
  {
    _id: '67rdca3eeb7f6fgeed471822',
    name: 'Никола Тесла',
    email: 'nikolatesla@fastcompany.ru',
    sex: 'male',
    profession: '67rdca3eeb7f6fgeed471822',
    qualities: ['67rdca3eeb7f6fgeed471102'],
    completedMeetings: 72,
    rate: 5,
    bookmark: false
  },
  {
    _id: '67rdca3eeb7f6fgeed471823',
    name: 'Моника Геллер',
    email: 'monicageller@fastcompany.ru',
    sex: 'female',
    profession: '67rdca3eeb7f6fgeed471829',
    qualities: ['67rdca3eeb7f6fgeed471100', '67rdca3eeb7f6fgeed471103'],
    completedMeetings: 17,
    rate: 4.5,
    bookmark: false
  },
  {
    _id: '67rdca3eeb7f6fgeed471824',
    name: 'Рататуй',
    email: 'ratatouille@fastcompany.ru',
    sex: 'male',
    profession: '67rdca3eeb7f6fgeed471829',
    qualities: ['67rdca3eeb7f6fgeed471102', '67rdca3eeb7f6fgeed471101'],
    completedMeetings: 17,
    rate: 4.5,
    bookmark: false
  },
  {
    _id: '67rdca3eeb7f6fgeed47181f',
    name: 'Джоуи Триббиани',
    email: 'joeytribbiani@fastcompany.ru',
    sex: 'male',
    profession: '67rdca3eeb7f6fgeed471824',
    qualities: ['67rdca3eeb7f6fgeed471103', '67rdca3eeb7f6fgeed471100'],
    completedMeetings: 434,
    rate: 3.5,
    bookmark: false
  },
  {
    _id: '67rdca3eeb7f6fgeed47181r',
    name: 'Брэд Питт',
    email: 'bradpitt@fastcompany.ru',
    sex: 'male',
    profession: '67rdca3eeb7f6fgeed471824',
    qualities: ['67rdca3eeb7f6fgeed471102'],
    completedMeetings: 434,
    rate: 5,
    bookmark: false
  }
]

// Находим недостающих пользователей
const missingUsers = users.filter(
  (user) => !jsonData.users.some((jsonUser) => jsonUser.id === user._id)
)

// Добавляем недостающих пользователей в JSON
jsonData.users.push(...missingUsers)

// Выводим обновленный JSON
console.log(JSON.stringify(jsonData, null, 2))
