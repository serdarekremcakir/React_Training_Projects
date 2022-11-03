import React from 'react'
import { useField, ErrorMessage} from 'formik'

const Input = ({...props}) => {


    const [field,meta,helpers] =useField(props);
    // console.log(meta);

  return (
    <label>
        <div>
        {props.label}
        </div>
        <input {...field} {...props} /> <br />
        {/* {meta.error && <div>{meta.error}</div>} */}
        <ErrorMessage name={field.name} component='small' />
    </label>
  )
}

export default Input