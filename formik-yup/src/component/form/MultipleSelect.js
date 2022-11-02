import React, { useEffect } from 'react'
import { useField } from 'formik'
import { MdError,MdCheckCircle } from 'react-icons/md'

const MultipleSelect = ({ ...props }) => {
  const [field, meta, helpers] = useField(props);


  const changeHandle = (e, option) => {
    if (e.target.classList.contains('checked')) {
      helpers.setValue([...field.value.filter(val => val !== option.value)])
    } else {
      helpers.setValue([...field.value, option.value])
    }
    e.target.classList.toggle('checked');
  }


  return (
    <>
      <div>{props.label}</div>
      <label>

        <div  {...props} style={{ maxHeight: '70px', overflow: 'auto', display: 'inline-block' }}>
          {props.options?.map((option, key) =>
            <div className={field.value.find(val => val === option.value) && 'checked'} key={key} style={{ display: 'flex', width: '100%' }} onClick={(e) => changeHandle(e, option)}>
              <span >{field.value.find(val => val === option.value) ? <MdCheckCircle color='#11e90a' /> : <MdError/>} {option.value}</span>
            </div>
          )}
        </div>
      </label>
    </>
  )
}

export default MultipleSelect