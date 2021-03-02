import React from 'react';

const Reminder = (props) => {
    return (
      <li> {props.topic} at {props.time}</li>
    )
}

export default Reminder;