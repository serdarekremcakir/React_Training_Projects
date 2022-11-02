import React from 'react'
import { useField } from 'formik'

const Select = ({...props}) => {


    const [field,meta,helpers] = useField(props)
  return (
    <label>

        <div>{props.label}</div>
        <select {...field} {...props}>
            {props.options?.map((option,key) => <option disabled={option.dsb || false} value={key} key={key}>{option.value}</option> )}
        </select>
    </label>
  )
}

export default Select