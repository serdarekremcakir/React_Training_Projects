import React from 'react'
import {Form, FormGroup, Button} from 'react-bootstrap'
import  {EmployeeContext} from '../context/EmployeeContext';
import { useContext,useState } from 'react';

const EditForm = ({employee}) => {

    const {dispatch} = useContext(EmployeeContext);

    const [updatedEmployee, setUpdatedEmployee] = useState({
        name:employee.name,
        email:employee.email,
        address:employee.address,
        phone:employee.phone,
        id:employee.id
    })

    const {name, email, address, phone} = updatedEmployee;

    const onInputChange = (e) => {
        setUpdatedEmployee({...updatedEmployee, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'update_employee', id:employee.id, updatedEmployee:updatedEmployee})
        // updateEmployee(employee.id,updatedEmployee)
    }
  return (
    <Form onSubmit= {handleSubmit}>
        <FormGroup className="mb-3">
        <Form.Label>Name</Form.Label>
            <Form.Control
            type="Text"
            placeholder="Name *"
            name = "name"
            value={name}
            onChange = {e => onInputChange(e)}

            required

            >
            </Form.Control>
        </FormGroup>
        <FormGroup className="mb-3">
        <Form.Label>Email</Form.Label>
            <Form.Control
            type="email"
            placeholder="Email *"
            name = "email"
            value={email}
            onChange = {e => onInputChange(e)}

            required
            >
            </Form.Control>
        </FormGroup>
        <FormGroup className="mb-3">
        <Form.Label>Address</Form.Label>
            <Form.Control
            as="textarea"
            placeholder="Address *"
            name = "address"
            required
            value={address}
            onChange = {e => onInputChange(e)}

            rows={3}
            >
            </Form.Control>
        </FormGroup>
        <FormGroup className="mb-3">
        <Form.Label>Phone</Form.Label>
            <Form.Control
            type="Text"
            placeholder="Phone "
            name = "phone"
            value={phone}
            onChange = {e => onInputChange(e)}

            >
            </Form.Control>
        </FormGroup >
        <div className="d-grid gap-2 mb-2">
        <Button variant="success" type="submit">Update Employee</Button>
        </div>
    </Form>

  )
}

export default EditForm