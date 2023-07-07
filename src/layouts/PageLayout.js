import React from 'react';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import { Container, Row, Col} from 'react-bootstrap';

const PageLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <Container className="my-3">
        <Row className="justify-content-center">
          <Col md={6}>
            {children}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default PageLayout;