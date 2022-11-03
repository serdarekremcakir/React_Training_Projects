import React from 'react'
import { ErrorMessage, useField } from 'formik'

const Select = ({...props}) => {


    const [field,meta,helpers] = useField(props)
  return (
    <label>
        <div>{props.label}</div>
        <select {...field} {...props}>
            {props.options?.map((option,key) => <option disabled={option.dsb || false} value={option.key} key={key}>{option.value}</option> )}
        </select>
        <ErrorMessage name={field.name} component='small' />
        
    </label>
  )
}

export default Select