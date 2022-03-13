import React, { useState } from 'react'


function Form({addContact, contacts}) {


  const [ form, setForm ] = useState({fullname: "", phoneNo:""});

  const onChangeInput = (e) => {
    setForm({...form, [e.target.name]:e.target.value});
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if(form.fullname == '' || form.phoneNo == ''){
      return false;
    }

    addContact([...contacts, form])

    setForm({fullname:"" , phoneNo:""})
    console.log(form);
  }


  return (
    <form onSubmit={onSubmit}>
        <div>
            <input 
            name="fullname" 
            placeholder='Full Name' 
            onChange={onChangeInput}
            value = {form.fullname}
            />
            
        </div>
        <div>
          <input 
          name="phoneNo"
          placeholder='Phone Number' 
          onChange={onChangeInput}
          value = {form.phoneNo}
          /> 
        </div>

        <div className='btn'>
         <button>Add</button>
        </div>
    </form>
  )
}

export default Form