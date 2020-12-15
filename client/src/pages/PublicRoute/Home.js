import React from 'react';
import { Container, Row, Col, Card, CardImg } from 'reactstrap';
import Jumbo from "../../components/Jumbo/jumbotron";
import JumboLowProfile from "../../components/JumboLowerProfile/jumbolowprofile";
import "../../pages/style.css"

function Home() {
  return (
    <div>
      <Jumbo />
      <Container className="mb-5">
        <Row lg="2">
          <Col>
            <Card className="mb-5">
              <CardImg className="img-123" top width="100%" src="/assets/images/profile.PNG" alt="Card image cap" />

            </Card>
          </Col>
          <Col>
            <Card className="mb-5 cards">
              <CardImg className="img-123" top width="100%" src="/assets/images/expense.PNG" alt="Card image cap" />
            </Card>
          </Col>
        </Row>
        <div>
          <JumboLowProfile />
        </div>
        <br />
        <br />
        <br />
      </Container>
    </div>
  );
}

export default Home;