import { ListItem, List } from "../List";
import DeleteBtn from "../DeleteBtn";
import React from "react";
import "./style.css";
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
                                <CardTitle tag="h3">Pet Pal</CardTitle>
                                <br />
                                <CardSubtitle tag="h5" className="mb-2">
                                Name:
                                        {" "}
                                    {post.name}
                                    </CardSubtitle>
                                <CardText>    
                                <h6>Age: {""} {post.age} {""}</h6>
                                <h6>Gender: {""} {post.gender} {""}</h6>
                                <h6>Species: {""} {post.species} {""}</h6>
                                <h6>Breed: {""} {post.breed} {""}</h6>
                                <h6>Microchip: {""} {post.microchip} {""}</h6>
                                <h6>Weight: {""} {post.weight} {""}</h6>
                                <h6>Location: {""} {post.location} {""}</h6>
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
            </div>
      )}
        </div>
    
    );
}

export default PetCard;
