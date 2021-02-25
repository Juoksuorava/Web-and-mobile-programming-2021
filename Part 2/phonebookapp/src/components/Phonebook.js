import React from 'react';
import Header from './Header';
import Contents from './Contents';
import Total from './Total';

const Phonebook = (props) => {
    return (
        <div>
            <Header title={props.phonebook.name}></Header>
            <Contents contacts={props.phonebook.contacts}></Contents>
            <Total length={props.phonebook.contacts.length}></Total>
        </div>
    )
}

export default Phonebook;