const fs = require('fs')

const messages = require('./messages.json')

const winMessages = []

// This makes it super easy to add more groups in the future

for (const type of Object.keys(messages)) {
  const vals = messages[type]
  vals.forEach(text => winMessages.push({ type, text }))
}

const data =
`const winMessages = ${JSON.stringify(winMessages, null, 2)}

export default winMessages
`

console.log(data)

process.exit()
//fs.writeFile('./src/data/messages.js', data, err => console.log(err))