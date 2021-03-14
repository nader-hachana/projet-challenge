
import React, {useState} from 'react'
import {Modal} from 'react-bootstrap'
import Formulaire2 from './Formulaire2'

function Modifier() {
    function edit(){
        const newUser = {
            Nom: "Nom",
            Prenom: "Prenom",
            date_de_naissance: "date_de_naissance",
            numero: "numero",
            pole: "pole",
            role: "role",
        }
  
        fetch('http://localhost:4000/users', {
          method: "GET",
          body: JSON.stringify(newUser),
          headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json()) 
        .then(json => console.log(json))
        .catch(err => console.log(err))
      }
      const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
       
    return (
        <div>
            <button className="smallround-button" onClick={handleShow}>
                Modifier
            </button>

            <Modal className='loginbox-container' size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>

                </Modal.Header>

                <Formulaire2 user={{numero:"0"}} />
            </Modal>

        </div>
    )
}

export default Modifier

