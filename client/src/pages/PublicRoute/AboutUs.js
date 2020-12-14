import React from 'react';
import { Container, Row, Col, Card, CardBody, CardText, CardImg } from 'reactstrap';
import JumboProfile from '../../components/JumboProfile/jumboprofile';
import '../style.css';

function AboutUs() {
    return (
        <div className="abt">
        <JumboProfile />
        <Container>
            <Row>
                <Col>
                    <Card>
                        <CardImg className="img-1" width="200px" src="/assets/images/Charlie.jpg" alt="This is Erika" />
                        <CardBody>
                            <CardText>
                                Erika is a former vet tech that knows how important fur and feather babies are to their parents, which is what inspired this web app. When she isn't coding she is walking her dog, doing yoga or hanging out with friends.
                            </CardText>
                            <a className="color1" href="https://github.com/eschiavoni2">Click here for Erika's Github</a>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardImg className="img-1" top width="200px" src="/assets/images/Ben_and_Mandy.JPG" alt="Ben and his wife, Mandy" />
                        <CardBody>
                            <CardText>
                                Ben Brumby lives in Orlando with his wife, Mandy, and their two sons, William and Nathan. When he's not coding, he enjoys jogging and playing with his pitbull, April.
                            </CardText>
                            <a className="color2" href="https://github.com/DrunkOnMystery">Click here for Ben's Github</a>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default AboutUs;