import React from 'react'
import { Formik, Field, Form } from 'formik'
import Input from './component/form/Input'
import File from './component/form/File'
import Checkbox from './component/form/Checkbox'
import Textarea from './component/form/Textarea'
import Select from './component/form/Select'
import Radio from './component/form/Radio'
import MultipleSelect from './component/form/MultipleSelect'

const Contact = () => {
    return (
        <>
            <h2>Contact Me</h2>
            <Formik
                initialValues={{
                    name: 'serdar',
                    accept: true,
                    avatar: '',
                    skills: ['html', 'js'],
                    about: '',
                    gender: 0,
                    level: 'jr'
                }}
                onSubmit={
                    values => console.log(values)
                }
            >
                {props => (
                    <Form>
                        {JSON.stringify(props.values)}
                        <br />
                        <File label="file" name="avatar" /><br />

                        <Input label={'name-surname'} name="name" />
                        {/* <Field name="name" /><br /> */}

                        <br />
                        <br />
                        <Textarea label='About' name="about" />
                        <br />
                        <br />
                        <Checkbox label='I Agree' name="accept" />
                        <br />

                        <Select label='Gender' name="gender" options={[{ key: 0, value: 'Select', dsb: true }, { key: 1, value: 'Man' }, { key: 2, value: 'Women' }]}>
                        </Select><br />
                        <br />

                        <Radio label='Select level' name='level' options={[
                            { key: 'jr', value: 'Junior Developer' },
                            { key: 'md', value: 'Middle Developer' },
                            { key: 'sr', value: 'Senior Developer' },
                        ]} />
                        <br />


                        <MultipleSelect label='multiple skill' name="skills" options={[{key:'1', value:'html'},{key:'2', value:'css'},{key:'3', value:'js'},{key:'4', value:'ccc'},{key:'5', value:'xxx'}]} />


                        <br />
                        <br />
                        <button disabled={!props.values.accept || props.values.gender === 0} type='submit'>submit</button>
                    </Form>
                )}

            </Formik>


        </>
    )
}

export default Contact