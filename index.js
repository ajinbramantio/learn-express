const express = require('express')
const app = express()
const port = 8000

const users = [
  {
    id: 1,
    Name: 'Haidar'
  },
  { id: 2, Name: 'Bara' },
  { id: 3, Name: 'Ajin' },
  { id: 4, Name: 'sakyd' },
  { id: 4, Name: 'Mario Teguh' },
  { id: 4, Name: 'jo' }
]

app.get('/', (req, res) => {
  res.send({ message: 'Ajinnnnnnnnnnnnnnnn' })
})

app.get('/users', (req, res) => {
  res.send({
    message: 'List is User',
    data: users
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
