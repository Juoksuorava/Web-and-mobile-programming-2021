const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { response } = require('express')

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

app.get('/', (request, response) => {
    response.send('<h1>Hello world!</h1>')
})

app.get('/reminders', (request, response) => {
    response.json(reminders)
})

app.get('/reminders/:id', (request, response) => {
    const id = Number(request.params.id)
    const reminder = reminders.find(reminder => reminder.id === id)
    
    if (reminder) {
        response.json(reminder)
    } else {
        response.status(404).end()
    }
})

app.delete('/reminders/:id', (request, response) => {
    const id = Number(request.params.id)
    reminders = reminders.filter(reminder => reminder.id !== id)
    response.status(204).end()
})

const generateId = () => {
    const maxId = reminders.length > 0 ? reminders.map(r => r.id).sort((a, b) => a - b).reverse()[0] : 1
    return maxId + 1
}

app.post('/reminders', (request, response) => {
    const body = request.body

    if (body.topic === undefined) {
        return response.status(400).json({error: 'topic missing'})
    }

    if (body.time === undefined) {
        return response.status(400).json({error: 'time missing'})
    }

    const reminder = {
        topic: body.topic,
        time: body.time,
        id: generateId()
    }

    reminders = reminders.concat(reminder)

    response.json(reminder)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})