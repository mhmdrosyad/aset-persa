import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <p className="text-center">by <a href="/">rosyad</a> &copy; 2023</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;