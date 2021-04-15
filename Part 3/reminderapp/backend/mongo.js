const { response } = require('express')
const mongoose = require('mongoose')

const url = 'mongodb+srv://<dBusername>:<dBpassword>@<clusterAddr>/<dbName>'

mongoose.connect(url)

const reminderSchema = new mongoose.Schema({
    topic: String,
    time: String
})

const Reminder = mongoose.model('Reminder', reminderSchema);

const args = process.argv.slice(2)

if (args != null) {
    if (args.length == 2) {
        new Reminder({
            topic: args[0],
            time: args[1],
        })
        .save()
        .then(response => {
            console.log('Reminder saved!')
            mongoose.connection.close()
        })
    } else {
        console.log('Invalid reminder format: use arguments reminder time')
    }
} else {
    Reminder
        .find({})
        .then(result => {
            result.forEach(reminder => {
                console.log(reminder)
            })
        mongoose.connection.close()
    })
}