import React, { Component } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import './SignUpModal.scss';

export default class SignUpModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal show={this.props.isToggleOn} onHide={this.props.handleClick} animation={true} centered>
                <Modal.Header closeButton>  
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicFirstName">
                        <Form.Control placeholder="First Name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicLastName">
                        <Form.Control placeholder="Last Name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form>

                </Modal.Body>

                <Modal.Footer>
                <Button variant="secondary">Complete Profile</Button>
                <Button variant="primary" onClick={this.props.handleClick}>Enter Site</Button>

                </Modal.Footer>

            </Modal>
        )
    }
}