const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())

app.use(bodyParser.json())

let reminders = [
    {
        "topic": "Buy some eggs",
        "time": "2021-11-10T13:00:00.141Z",
        "id": 1
      },
      {
        "topic": "Make an omelette",
        "time": "2021-11-11T08:00:00.141Z",
        "id": 2
      },
      {
        "topic": "Wash dishes",
        "time": "2021-11-11T09:00:00.000Z",
        "id": 3
      },
      {
        "topic": "Buy more eggs",
        "times": "2021-11-11T13:00:00.000Z",
        "id": 4
      }
]

app.get('/api/', (request, response) => {
    response.send('<h1>Hello world!</h1>')
})

app.get('/api/reminders', (request, response) => {
    response.json(reminders)
})

app.get('/api/reminders/:id', (request, response) => {
    const id = Number(request.params.id)
    const reminder = reminders.find(reminder => reminder.id === id)
    
    if (reminder) {
        response.json(reminder)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/reminders/:id', (request, response) => {
    const id = Number(request.params.id)
    reminders = reminders.filter(reminder => reminder.id !== id)
    response.status(204).end()
})

const generateId = (min, max) => {
    return Math.random() * (max - min) + min;
  }
  

app.post('/api/reminders', (request, response) => {
    const body = request.body

    if (body.topic === undefined) {
        return response.status(400).json({error: 'topic missing'})
    }

    if (body.time === undefined) {
        return response.status(400).json({error: 'time missing'})
    }

    if (reminders.some(reminder => reminder.topic === body.topic)) {
        return response.status(400).json({error: 'topic must be unique'})
    }

    const reminder = {
        topic: body.topic,
        time: body.time,
        id: generateId(0, 100 * 100)
    }

    reminders = reminders.concat(reminder)

    response.json(reminder)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})