import React from 'react';

const Reminder = (props) => {
    return (
      <li>
        {props.topic} at {(props.time)} {" "}
        <button onClick={() => props.deleteReminder(props.id)}>Delete</button>
      </li>
    )
}

export default Reminder;