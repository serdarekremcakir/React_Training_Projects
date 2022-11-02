import React, { useState, useEffect } from 'react'
import { useFormik, Formik, Field, Form } from 'formik'

const App = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('formikuser')) || false)


    useEffect(() => {
        localStorage.setItem('formikuser', JSON.stringify(user));
    }, [user])


    // const formik = useFormik({
    //     initialValues: {
    //         username: '',
    //         password: ''
    //     },
    //     onSubmit: values => {
    //         console.log(values);
    //         setUser(values);
    //     }
    // })



    return (
        <div>

            {/* <form onSubmit={formik.handleSubmit} >
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={formik.values.username} onChange={formik.handleChange} />
                <br />

                <label htmlFor="password">Password</label>
                <input type="password" name="" id="password" value={formik.values.password} onChange={formik.handleChange} /><br />
                <button type="submit">submit</button>
            </form> */}


            <Formik
                initialValues={{
                    username: '',
                    password: ''
                }}
                onSubmit={values => {
                    console.log(values);
                    setUser(values);

                }}
            >
                {(props) => (
                    <Form>
                        <Field name="username" /> <br />
                        <Field name="password" type="password" />
                        <button type='submit'>Submit</button>
                    </Form>
                )}

            </Formik>



            <button className='login' onClick={() => setUser(false)}>Reset User</button>

        </div>
    )
}

export default App