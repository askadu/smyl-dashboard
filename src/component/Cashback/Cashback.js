import React from 'react';
import {
    Container,
    Row,
    Col,
    Form,
    Table,
    Button
}
    from 'react-bootstrap';

function Cashback() {
    return (
        <Container>
            <Row>
                <Col>
                    <Form.Control as="select">
                        <option>Amazon</option>
                        <option>Wallmart</option>
                        <option>Costco</option>
                        <option>Aldi</option>
                        <option>Publix</option>
                    </Form.Control>
                </Col>
                <Col>
                    <Form.Control as="select">
                        <option>Electronics</option>
                        <option>Fashion</option>
                        <option>Grocery</option>
                        <option>Toletries</option>
                        <option>Breverages</option>
                    </Form.Control>
                </Col>
                <Col>
                    <Form.Control type="text" placeholder="cashback" />
                </Col>
                <Col>
                    <Button variant="secondary" type="submit">Add</Button>
                </Col>
            </Row>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Retailer</th>
                        <th>Category</th>
                        <th>Cashback %</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Amazon</td>
                        <td>Fashion</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Amazon</td>
                        <td>Electronics</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Walmart</td>
                        <td>Grocery</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Amazon</td>
                        <td>Grocery</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Amazon</td>
                        <td>Books</td>
                        <td>12</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}

export default Cashback;
