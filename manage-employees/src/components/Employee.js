import React from 'react'
import { EmployeeContext } from '../context/EmployeeContext'
import { useContext, useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import EditForm from './EditForm'
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const Employee = ({ employee }) => {

    const { dispatch } = useContext(EmployeeContext);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        handleClose()
    }, [employee])


    return (
        <>

            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.address}</td>
            <td>{employee.phone}</td>
            <td>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Edit
                        </Tooltip>}>
                    <button className="edit btn text-warning" onClick={handleShow}><i className="material-icons">&#xE254;</i></button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Delete
                        </Tooltip>}>
                    <button
                        onClick={() => /*deleteEmployee(employee.id)*/
                            dispatch({
                                type: 'remove_employee', id:employee.id
                            })} className="delete btn text-danger" ><i className="material-icons">&#xE872;</i></button>
                </OverlayTrigger>
            </td>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton >
                    <Modal.Title>Update Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditForm employee={employee} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close Modal
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default Employee;

