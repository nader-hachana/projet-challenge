import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import Users_List from './Users_List'
import Ajouter from './Ajouter'
import Users_Data from './Users_data'

function Admin_HP() {
    return (
        
            <div>
                <div style={{marginLeft:"45%"}}>
                <Ajouter/>
                  </div>
                  <div>
            <Users_Data></Users_Data>
            <Users_List/>
            
            </div>
            </div>
            

    )
}

export default Admin_HP
