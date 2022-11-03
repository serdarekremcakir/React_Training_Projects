import React from 'react'
import { ErrorMessage, useField } from 'formik'

const Textarea = ({...props}) => {

    const [field,meta,helpers] = useField(props)
  return (
    <label >

        <div>{props.label}</div>
        <textarea style={{resize:'none'}} {...field} {...props}  cols="30" rows="5"></textarea><br /> 
        <ErrorMessage name={field.name} />
    </label>
  )
}

export default Textarea