import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import modals from '../modals/modals'
import { closeModal } from '../stores/modal'

const Modal = () => {


  const { name, data } = useSelector(state => state.modal)


  const modal = modals.find(modal => modal.name === name)

  const dispatch = useDispatch()

  const close = () => {
    dispatch(closeModal())
  }

  return (
    <div className='modal'>
      <div className='modal-inner'>

        <modal.element close={close} data={data} />
      </div>
    </div>
  )
}

export default Modal