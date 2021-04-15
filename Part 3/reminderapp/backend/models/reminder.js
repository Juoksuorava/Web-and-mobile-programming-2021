const mongoose = require('mongoose')

const url = 'mongodb+srv://<dBusername>:<dBpassword>@<clusterAddr>/<dbName>'

mongoose.connect(url)

const Reminder = new mongoose.model('Reminder', {
    topic: String,
    time: String
})

module.exports = Reminder