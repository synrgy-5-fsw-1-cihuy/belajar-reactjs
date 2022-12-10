import { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


const LOGIN_AUTH_URL = 'http://localhost:8001/api/auth/login';

const Login = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleSubmitForm = (event) => {
        console.log(form);

        doLoginUser(form);

        event.preventDefault();
    };

    async function doLoginUser(form) {
        const user = await axios.post(LOGIN_AUTH_URL, form);

        localStorage.setItem('AUTH_TOKEN', user.data['token']);

        navigate('/content');

        console.log(user.data['token']);
    };

    const handleSetForm = (type, event) => {
        if (type === 'email') {
            setForm({
                email: event.target.value
            });
        }

        if (type === 'password') {
            setForm((prevState) => ({
                ...prevState,
                password: event.target.value
            }));
        }
    };

    return (
        <div>
            <Form onSubmit={(event) => handleSubmitForm(event)}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    type="email" 
                    placeholder="name@example.com"
                    onChange={(event) => handleSetForm('email', event)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="***********"
                    onChange={(event) => handleSetForm('password', event)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Button variant="success" type='submit'>Login</Button>
                    <Button variant="secondary">Cancel</Button>
                </Form.Group>
            </Form>
        </div>
    );
};

export default Login;
