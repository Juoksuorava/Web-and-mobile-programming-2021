import React from 'react';
import Reminder from './Reminder';

const Reminders = (props) => {
    return (
        <ul>
         {props.reminders.map(reminder => <Reminder key={reminder.id} id={reminder.id} deleteReminder={props.deleteReminder} topic={reminder.topic} time={reminder.time}/>)}
        </ul>
    )
}

export default Reminders;