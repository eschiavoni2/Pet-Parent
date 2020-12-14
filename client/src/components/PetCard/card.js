import { ListItem, List } from "../List";
import DeleteBtn from "../DeleteBtn";
import React from "react";
import "./style.css";
import { Card, CardBody, CardImg, CardSubtitle, CardText } from "reactstrap";


function PetCard(props) {
    
    return (

        <div>
      {props.posts.length ? (
            <List>
                {props.posts.map(post => (
                    <ListItem key={post._id}>
                            <Card>
                            <CardImg src="../assets/images/pets1.jpg" alt="placeholder" />
                            <CardBody>
                                {/* <CardTitle id="petPalTitle" tag="h3">Pet Pal</CardTitle> */}
                                {/* <br /> */}
                                <CardSubtitle id="petPalName" tag="h5" className="mb-2">
                                Name:
                                        {" "}
                                    {post.name}
                                    </CardSubtitle>
                                    <br />
                                <CardText>    
                                <p className="petAttributes">Age: {""} {post.age} {""}</p>
                                <p className="petAttributes">Gender: {""} {post.gender} {""}</p>
                                <p className="petAttributes">Species: {""} {post.species} {""}</p>
                                <p className="petAttributes">Breed: {""} {post.breed} {""}</p>
                                <p className="petAttributes">Microchip: {""} {post.microchip} {""}</p>
                                <p className="petAttributes">Weight: {""} {post.weight} {""}</p>
                                <p className="petAttributes">Location: {""} {post.location} {""}</p>
                                </CardText>
                                <br />
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
