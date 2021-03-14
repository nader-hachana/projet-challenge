import React from "react";
import {
  ListGroup,
  Form,
  FormControl,
  Button,
  ListGroupItem,
  Badge,
  Container,
  Row,
  Col,
  Table,
} from "react-bootstrap";
import Users_data from "./Users_data";
import { Supprimer } from "./Supprimer";
import Modifier from "./Modifier";
function Users_List(props) {
  return (
    <div>
      <Container>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Recherche"
            className="mr-sm-2"
          />
          <button className="smallround-button"> Recherche</button>
        </Form>
        <div className="tous">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Date de naissance</th>
                <th>Numero</th>
                <th>Email</th>
                <th>Pole</th>
                <th>Role</th>
              </tr>
            </thead>

            {props.data.map((n) => (
              <tbody>
                <tr>
                  <td style={{ textAlign: "left", color: "#292F36" }}>
                    {" "}
                    {n.first_name}
                  </td>
                  <td style={{ textAlign: "left", color: "#292F36" }}>
                    {n.last_name}
                  </td>
                  <td style={{ textAlign: "left", color: "#292F36" }}>
                    {n.date_of_birth}
                  </td>
                  <td style={{ textAlign: "left", color: "#292F36" }}>
                    {n.phone_number}
                  </td>
                  <td style={{ textAlign: "left", color: "#292F36" }}>
                    {n.email}
                  </td>
                  <td style={{ textAlign: "left", color: "#292F36" }}>
                    {n.pole}
                  </td>
                  <td style={{ textAlign: "left", color: "#292F36" }}>
                    {n.role}
                  </td>

                  <td>
                    <button
                      onClick={Supprimer(n.email)}
                      className="smallround-button"
                    >
                      Supprimer{" "}
                    </button>{" "}
                  </td>
                  <td>
                    <Modifier />{" "}
                  </td>
                </tr>
              </tbody>
            ))}
            
          </Table>
        </div>
      </Container>
    </div>
  );
}

export default Users_List;
