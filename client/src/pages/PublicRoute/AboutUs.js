import React from 'react';
import { Container, Row, Col, Card, CardBody, CardText, CardImg } from 'reactstrap';

function AboutUs() {
    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <CardImg className="img-1" top width="200px" src="/assets/images/Erika.JPG" alt="This is Erika" />
                        <CardBody>
                            <CardText>
                                Erika is extremely sus, and is almost certainly an imposter. Vote Erika.
                            </CardText>
                            <a href="https://github.com/eschiavoni2">Erika's Github is here.</a>
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
                            <a href="https://github.com/DrunkOnMystery">Ben's Github is here.</a>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutUs;