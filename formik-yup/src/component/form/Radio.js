import React from 'react'
import { ErrorMessage, useField } from 'formik'
import { FiCheck } from 'react-icons/fi'

const Radio = ({ ...props }) => {


    const [field, meta, helpers] = useField(props)

    return (

        <>
            <div>{props.label}</div>
            {props.options.map((option, key) => (
                <label key={key} style={{ display: 'flex', alignItems: 'center' }}>
                    <button type='button' style={{ border: '1px solid gray', marginRight: '5px', width: 20, height: 20, borderRadius: '6px', outline: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: 0, borderColor: field.value === option.key ? 'blue' : 'gray', color: field.value === option.key ? 'white' : 'transparent', backgroundColor: field.value === option.key ? 'blue' : 'transparent' }}
                        onClick={() => helpers.setValue(option.key)} >
                        <FiCheck size={16} />
                    </button>
                    {option.value}
                    <br />

                </label>
            ))
            }
            <ErrorMessage name={field.name} component='small' />
            <br />
        </>
    )
}

export default Radio