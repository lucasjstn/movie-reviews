import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";

const Login = (props) => {
    const params = useParams();
    const [name, setName] = useState("");
    const [id, setId] = useState("");

    const onChangeName = (e) => {
        const name = e.target.value;
        setName(name);
    };

    const onChangeId = (e) => {
        const id = e.target.value;
        setId(id);
    };

    const login = () => {
        props.login({ name: name, id: id });
        props.history.push("/");
    };

    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        value={name}
                        onChange={onChangeName}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Id</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter id"
                        value={id}
                        onChange={onChangeId}
                    />
                </Form.Group>
                <Button variant="primary" onClick={login}>Submit</Button>
            </Form>
        </div>
    );
};

export default Login;
