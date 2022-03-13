import React, { useState, useEffect} from 'react'

function List({contacts}) {

  const [filterText, setFilterText] = useState('');

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key)=>{
      console.log("key", key);
      return item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase());
    })
  })

  return (
    <div>

      <input 
      placeholder='Filter Contact' 
      value={filterText} 
      onChange= {(e)=> setFilterText(e.target.value)}
      />

      <ul className='list'>
        {
          filtered.map((contact, i)=>(
            <li key={i}>
              <span id='name'>
                {contact.fullname}
              </span>
              <span id='no'>
                {contact.phoneNo}
              </span>
            </li>
          ))
        }
      </ul>

      <h4>Total contacts: {filtered.length}</h4>

      <hr />

      <h3>Add Contact</h3>
    </div>
  )
}

export default List     