import React from 'react';
import { Container, Row, Col, Card, CardBody, CardText, CardImg } from 'reactstrap';
import JumboProfile from '../../components/JumboProfile/jumboprofile';
import '../style.css';

function AboutUs() {
    return (
        <div className="abt">
        <JumboProfile />
        <h1 className="abtUs">About Erika & Ben</h1>
        <Container>
            <Row>
                <Col>
                    <Card>
                        <CardImg className="img-1" width="200px" src="/assets/images/Charlie.jpg" alt="This is Erika" />
                        <CardBody>
                            <CardText className="text1">
                                Erika Zibelnik is a former vet tech that knows how important fur and feather babies are to their parents, which is what inspired this web app. When she isn't coding she is walking her dog, doing yoga or hanging out with friends.
                            </CardText>
                            <a className="color1" href="https://github.com/eschiavoni2">Github</a>
                            <a className="color3" href="https://www.linkedin.com/in/erika-zibelnik-5ab">LinkedIn</a>

                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardImg className="img-1" top width="200px" src="/assets/images/Ben_and_Mandy.JPG" alt="Ben and his wife, Mandy" />
                        <CardBody>
                            <CardText className="text2">
                                Ben Brumby lives in Orlando with his wife, Mandy, and their two sons, William and Nathan. When he's not coding, he enjoys jogging and playing with his pitbull, April.
                            </CardText>
                            <a className="color2" href="https://github.com/DrunkOnMystery">
                                Github
                            </a>
                            <a className="color4" href="https://www.linkedin.com/in/benjamin-brumby-98183546/">LinkedIn</a>

                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default AboutUs;