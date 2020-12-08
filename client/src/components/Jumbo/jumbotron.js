import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import "./style.css";

function Jumbo() {
  return (
    
    <Jumbotron>
      <div>
        <h1 className="display-3">Welcome to Pet Pals!</h1>
        <p className="lead">Start tracking your pet today!</p>
        <br className="my-2" />
        <p className="lead">
          <Button className="btn" href="/Signup">Sign up here!</Button>
        </p>
      </div>
    </Jumbotron>

  );
};

export default Jumbo;