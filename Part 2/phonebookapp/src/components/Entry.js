import React from 'react';


const Entry = (props) => {
    return (
        <tr>
            <td>Name: {props.name}</td>
            <td>Phonenumber: {props.number}</td>
        </tr>
    )
  }

export default Entry;