import React from 'react';
import Reminder from './Reminder';

const Reminders = (props) => {
    return (
        <ul>
         {props.state.reminders.map(reminder => <Reminder key={reminder.id} topic={reminder.topic} time={reminder.time}/>)}
        </ul>
    )
}

export default Reminders;