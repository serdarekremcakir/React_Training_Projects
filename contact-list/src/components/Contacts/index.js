import List from './List/';

import Form from './Form';

import React, { useState , useEffect} from 'react'

import'./styles.css'

function Contacts() {

  const [contacts, setContacts] = useState([
    {fullname:"Ahmet", phoneNo:"601 666 89 89"},
    {fullname:"Mehmet", phoneNo:"601 874 85 89"},
    {fullname:"Ashley", phoneNo:"785 641 41 41 "}
  ]);

  useEffect(()=> {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts</h1>
        <List contacts={contacts}/>
        <Form addContact={setContacts} contacts={contacts}/>

    </div>
  )
}

export default Contacts