import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import Jumbo from "../../components/Jumbo/jumbotron";
import "../../pages/style.css"

function Home() {
  return (
    <div>
      <Jumbo />
      <Container>
        <Row lg="2">
          <Col>
            <Card>
              <CardImg className="img-1" top width="100%" src="/assets/images/Todo.PNG" alt="Card image cap" />
              <CardBody>
                <CardText className="todo-text1">Help yourself stay on top of daily tasks. Keep track of your walks, feedings, and more!</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="card-2" inverse>
              <CardTitle tag="h5" className="todo-1">To Do List</CardTitle>
              <CardImg className="card2-img" top width="100%" src="/assets/images/Todo1.PNG" alt="Card image cap" />
              <CardBody>
                <hr />
                <CardText className="todo-text">This handy to do list is currently capable of: Adding a todo, Checking off a todo (just click to cross it out), Updating a todo, and Deleting a todo. In the future we hope to save it to the page, and track dates with list items. New features coming soon!
          </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row lg="2">
          <Col>
            <Card inverse>
              <CardTitle tag="h5" className="exp1-title">Expense Tracker</CardTitle>
              <CardImg className="exp1-img" width="100%" src="/assets/images/exp1.PNG" alt="Card image cap" />
              <hr />
              <CardText className="text-exp">Current features include: Adding and expense, Deleting all expenses, Saving expenses to page after closing out of the page, Adding up total expenses. In the future we plan to add dates in order to track budget per month/per year.</CardText>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg className="expT" top width="100%" src="/assets/images/exp.PNG" alt="Card image cap" />
              <CardBody>
                <CardText className="todo-text2">This handy little app will help you keep track of what you spend on your pets. This information comes in handy for budgeting, and deciding on any new fur or feather kids in the future.</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;