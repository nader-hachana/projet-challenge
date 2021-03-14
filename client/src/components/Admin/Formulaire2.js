import img from "./eje.png";
import React from "react";
import "./Formulaire.css";
import { Form, Button } from "react-bootstrap";
export default function Formulaire2(props) {
    return (
        <div className="login-box">
            <div className="loginbox-container">
                <div class="left">
                    <input type="text" name="Nom" placeholder="Nom" />
                    <input type="text" name="Prenom" placeholder="Prenom" />

                    <input type="text" name="email" placeholder="E-mail" />

                    <Form>
                        {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <h3>Pole</h3>
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    label={`Pole projet`}

                                />

                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    label={`Pole Developpement Commercial`}
                                />
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    label={`Pole Marketing`}
                                />
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    label={`Pole Relations Externes`}
                                />
                            </div>
                        ))}
                        {["radio"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <h3>Role</h3>
                                <Form.Check type={type} id={`default-${type}`} label={`Admin`} />

                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    label={`Utilisateur`}
                                />
                            </div>
                        ))}
                    </Form>
                    <Form>
                        <div>

                            <h3>Date de naissance</h3>
                            <input id="date" type="date"  />

                        </div>
                    </Form>

                    <Form >
                        <h3 className="DDT">Numéro de téléphone</h3>
                        <input
                            type="text"
                            name="Numero de telephone"
                            placeholder="Numero de telephone"
                            value={props.user.numero}
                        />

                        <Form.Group>
                            <Form.File id="exampleFormControlFile1" label="Photo     :" />
                        </Form.Group>
                    </Form>

                    <button className="round-button" > Save </button>
                </div>
                <div className="right">
                    <img src={img} alt="Avatar" className="image" />
                </div>
            </div>
        </div>
    );
}
