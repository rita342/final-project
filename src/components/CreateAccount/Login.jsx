import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { RiAccountCircleFill } from "react-icons/ri";
const Login = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <span onClick={handleShow} style={{ color: "brown" }}>
        Login
      </span>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header>
          <Modal.Title>Log in</Modal.Title>
        </Modal.Header>
        <div class="Modal.Body m-auto">
          <button className=" btn btn-light w-100 p-2 ml-4  mt-4 mb-4">
            <span>
              <FcGoogle style={{ color: "white" }} />
            </span>{" "}
            sign in with Google
          </button>
          <button className=" btn btn-light w-100 p-2 ml-4  mt-4 mb-4">
            <span>
              <SiFacebook style={{ color: "blue" }} />
            </span>{" "}
            sign in with Google
          </button>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Login;
