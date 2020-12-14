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
                                <CardTitle id="petPalTitle" tag="h3">Pet Pal</CardTitle>
                                <br />
                                <CardSubtitle id="petPalName" tag="h5" className="mb-2">
                                Name:
                                        {" "}
                                    {post.name}
                                    </CardSubtitle>
                                <CardText>    
                                <h6 className="petAttributes">Age: {""} {post.age} {""}</h6>
                                <h6 className="petAttributes">Gender: {""} {post.gender} {""}</h6>
                                <h6 className="petAttributes">Species: {""} {post.species} {""}</h6>
                                <h6 className="petAttributes">Breed: {""} {post.breed} {""}</h6>
                                <h6 className="petAttributes">Microchip: {""} {post.microchip} {""}</h6>
                                <h6 className="petAttributes">Weight: {""} {post.weight} {""}</h6>
                                <h6 className="petAttributes">Location: {""} {post.location} {""}</h6>
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
