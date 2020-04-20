import React from 'react';
import {
    Container,
    Row,
    Col,
    Form,
    Button,
    Card
}
    from 'react-bootstrap';

class Login extends React.Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <Card>
                            <Card.Header>Admin Login</Card.Header>
                            <Card.Body>
                                <Form>
                                    <Form.Group controlId="email">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group controlId="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">Submit</Button>
                                </Form>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col></Col>

                </Row>
            </Container>
        );
    }
}

export default Login;