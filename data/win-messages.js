const messages = {
  symbol: [
    '<3'
  ],

  word: [
    'Amazing',
    'Beautiful',
    'Bingo',
    'Delightful',
    'Eureka',
    'Excellent',
    'Fantastic',
    'Grand',
    'Great',
    'Incredible',
    'Lovely',
    'Nice',
    'Spectacular',
    'Swell',
    'Terrific',
    'Tremendous',
    'Well done',
    'Whew',
    'Wonderful',
    'Wow',
    'Yipee'
  ].map(word => `${word}!`),

  phrase: [
    'I hope you appreciate these messages. They took time to make.',
    'Please share with your friends. I need love.',
    'This game is the reason that I don\'t have a girlfriend ... among many.',
    'This is the most warmth I\'ve ever felt.'
  ]
}

/*
const longs = {
  symbol: [
    '<3'
  ],

  word: [
    'Amazing',
    'Beautiful',
    'Delightful',
    'Excellent',
    'Fantastic',
    'Incredible',
    'Spectacular',
    'Terrific',
    'Tremendous',
    'Well done',
    'Wonderful',
  ].map(word => `${word}!`),

  phrase: [
    'I hope you appreciate these messages. They took time to make.',
    'Please share with your friends. I need love.',
    'This game is the reason that I don\'t have a girlfriend ... among many.',
    'This is the most warmth I\'ve ever felt.'
  ]
}
*/

const winMessages = []

// This makes it super easy to add more groups in the future

for (const type of Object.keys(messages)) {
  const vals = messages[type]

  vals.forEach(text => winMessages.push({ type, text }))
}

export default winMessages
