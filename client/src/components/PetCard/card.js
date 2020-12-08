import { ListItem, List } from "../List";
import DeleteBtn from "../DeleteBtn";
import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";


function PetCard(props) {
    
    return (

        <div>
      {props.posts.length ? (
            <List>
                {props.posts.map(post => (
                    <ListItem key={post._id}>
                            <Card>
                            <CardImg src="../assets/images/pets.png" alt="placeholder" />
                            <CardBody>
                                <CardTitle tag="h5">Pet Pal</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">
                                        Name:
                                        {" "}
                                    {post.name}
                                    </CardSubtitle>
                                <CardText>
                                Age: {""} {post.age} {""}
                                Gender: {""} {post.gender} {""}
                                Species: {""} {post.species} {""}
                                Breed: {""} {post.breed} {""}
                                Microchip: {""} {post.microchip} {""}
                                Weight: {""} {post.weight} {""}
                                Location: {""} {post.location} {""}
                                </CardText>
                        <DeleteBtn onClick={() => props.removePost(post._id)} />
                        </CardBody>
                        </Card>                        
                    </ListItem>
                    

                ))
                }
                
            </List>
          
     ) : (
            <div>
            <h3 className="noPet">You haven't added any pets yet!</h3>
            <Link to="/createprofile">Add Pet</Link>
            </div>
      )}
        </div>
    
    );
}

export default PetCard;
