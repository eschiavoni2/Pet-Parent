import React from 'react';
import { Container, Row, Col, Card, CardImg } from 'reactstrap';
import Jumbo from "../../components/Jumbo/jumbotron";
import "../../pages/style.css"

function Home() {
  return (
    <div>
      <Jumbo />
      <Container className="mb-5">
        <Row lg="2">
          <Col>
            <Card className="mb-5">
              <CardImg className="img-1" top width="100%" src="/assets/images/profile.PNG" alt="Card image cap" />
              {/* <CardBody>
                <CardText className="todo-text1">Create a Pet Profile</CardText>
              </CardBody> */}
            </Card>
          </Col>
          <Col>
            <Card className="mb-5">
              <CardImg className="img-1" top width="100%" src="/assets/images/expense.PNG" alt="Card image cap" />
              {/* <CardBody>
                <CardText className="todo-text1">Create a Pet Profile</CardText>
              </CardBody> */}
            </Card>
          </Col>
        </Row>
        {/* <Row lg="2">
          <Col>
            <Card inverse>
              <CardTitle tag="h5" className="exp1-title">Expense Tracker</CardTitle>
              <CardImg className="exp1-img" width="100%" src="/assets/images/exp1.PNG" alt="Card image cap" />
              <hr />
              <CardText className="text-exp">Current features include: Adding and expense, Deleting all expenses, Saving expenses to page after closing out of the page, Adding up total expenses. In the future we plan to add dates in order to track budget per month/per year.</CardText>
            </Card>
          </Col>
          <Col className="mb-5">
            <Card className="mb-5">
              <CardImg className="expT" top width="100%" src="/assets/images/exp.PNG" alt="Card image cap" />
              <CardBody>
                <CardText className="todo-text2">This handy little app will help you keep track of what you spend on your pets. This information comes in handy for budgeting, and deciding on any new fur or feather kids in the future.</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
}

export default Home;