import React from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';

function Curators() {
    return (
        <Container>
            <Row>
                <Col>
                    <Form.Control type="text" placeholder="First name" />
                </Col>
                <Col>
                    <Form.Control type="text" placeholder="Last name" />
                </Col>
                <Col>
                    <Form.Control type="email" placeholder="First name" />
                </Col>
                <Col>
                    <Button variant="secondary" type="submit">Add</Button>
                </Col>
            </Row>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Retailer</th>
                        <th>Add Retailer</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>John Smith</td>
                        <td>Amazon</td>
                        <td>
                            <Form.Control as="select">
                                <option>Amazon</option>
                                <option>Wallmart</option>
                                <option>Costco</option>
                                <option>Aldi</option>
                                <option>Publix</option>
                            </Form.Control>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Eliza Alberz</td>
                        <td>Wallmart</td>
                        <td>
                            <Form.Control as="select">
                                <option>Amazon</option>
                                <option>Wallmart</option>
                                <option>Costco</option>
                                <option>Aldi</option>
                                <option>Publix</option>
                            </Form.Control>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Zach Dsuza</td>
                        <td>Costco</td>
                        <td>
                            <Form.Control as="select">
                                <option>Amazon</option>
                                <option>Wallmart</option>
                                <option>Costco</option>
                                <option>Aldi</option>
                                <option>Publix</option>
                            </Form.Control>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Candy Smith</td>
                        <td>Aldi</td>
                        <td>
                            <Form.Control as="select">
                                <option>Amazon</option>
                                <option>Wallmart</option>
                                <option>Costco</option>
                                <option>Aldi</option>
                                <option>Publix</option>
                            </Form.Control>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Jason Leo</td>
                        <td>Publix</td>
                        <td>
                            <Form.Control as="select">
                                <option>Amazon</option>
                                <option>Wallmart</option>
                                <option>Costco</option>
                                <option>Aldi</option>
                                <option>Publix</option>
                            </Form.Control>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}

export default Curators;