import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import Formulaire from './Formulaire'

function Ajouter() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <div>

            <button className="round-button" onClick={handleShow}>
                Ajouter
            </button>

            <Modal className='loginbox-container' size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>

                </Modal.Header>

                <Formulaire />
            </Modal>
        </div>
    )
}

export default Ajouter

