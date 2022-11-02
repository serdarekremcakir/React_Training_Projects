import React from 'react'
import { useField } from 'formik'
import { FiCheck } from 'react-icons/fi'

const Checkbox = ({ ...props }) => {

    const [field, meta, helpers] = useField(props)
    return (
        <label style={{display:'flex',alignItems:'center'}}>
          
            <button type='button' style={{border:'1px solid gray',marginRight:'5px',width:20,height:20,borderRadius:'6px', outline:'none',display:'inline-flex',alignItems:'center',justifyContent:'center',padding:0, borderColor: field.value ? 'blue' : 'gray' , color: field.value ? 'white' : 'transparent', backgroundColor: field.value ? 'blue' : 'transparent'}}
            onClick={() => helpers.setValue(!field.value)} >
                <FiCheck size={16}  />
            </button>
            {props.label}

        </label>
    )
}

export default Checkbox