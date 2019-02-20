const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8000

app.use(bodyParser.json())

let nexId = 8
let users = [
  {
    id: 1,
    Name: 'Haidar'
  },
  { id: 2, name: 'Bara' },
  { id: 3, name: 'Ajin' },
  { id: 4, name: 'sakyd' },
  { id: 5, name: 'Mario Teguh' },
  { id: 6, name: 'jo' }
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

app.post('/users', (req, res) => {
  if (req.body.name) {
    const newUser = {
      id: nexId,
      name: req.body.name
    }
    users = users.concat(newUser)
    nexId++

    res.send({
      message: 'Create New Users',
      newUser: newUser,
      data: users
    })
  } else {
    res.send({
      error: 'Failed to create new user',
      message: 'name is not defined in body'
    })
  }
})

app.delete('/users/:id', (req, res) => {
  const dataUser = users.filter(user => {
    return user.id !== Number(req.params.id)
  })
  users = dataUser
  res.send({
    message: 'Delete Users',
    data: users
  })
})

app.delete('/users', (req, res) => {
  users = []
  res.send({
    message: 'Delete All Users',
    data: users
  })
})

app.put('/users/:id', (req, res) => {
  const id = Number(req.params.id)

  const newName = req.body.name

  const newUsers = users.map(user => {
    if (user.id === id) {
      user.name = newName
      return user
    } else {
      return user
    }
  })

  users = newUsers

  res.send({
    message: 'One user has been updated',
    id: id,
    newName: newName
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
