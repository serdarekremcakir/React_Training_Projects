import React from 'react'
import { ErrorMessage, useField} from 'formik'
import { FiCheck } from 'react-icons/fi'

const File = ({...props}) => {

    const [field,meta,helpers] =useField(props);


    const changeHandle = e => {
        helpers.setValue(e.target.files[0])
    }

  return (
    <label >
        <div style={{marginBottom:'8px'}}>
            {props.label}
        </div>

        <span style={{ border:'1px solid black', padding:'6px 12px' , cursor:'pointer', display:'inline-flex' ,alignItems:'center', justifyContent:'center'}}>
        {field.value ? <> File Selected  <FiCheck size={15}/></> :'Select a file'  }

        </span>
        
        <input type='file' style={{display:'none'}} onChange={changeHandle} {...props} />
<br />
        {field.value && <span style={{cursor:'pointer', textDecoration:'underline', color:'#8414cf', fontSize:'14px',}} onClick={() => {helpers.setValue('')}}>delete file</span>}
        <ErrorMessage name={field.name} component='small' />
        <br />
    </label>
  )
}

export default File