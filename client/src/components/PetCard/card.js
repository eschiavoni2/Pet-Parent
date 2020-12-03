import { ListItem, List } from "../List";
import DeleteBtn from "../DeleteBtn";
import React from "react";
import "./style.css";

// import { Card } from 'reactstrap';


function PetCard(props) {
    
    return (

        <div>
      {props.posts.length ? (
            <List>
                {props.posts.map(post => (
                    <ListItem key={post._id}>
                        <div className="title">
                        <h1 className="pPal">Pet Pal</h1>
                        </div>
                        <div className="row">
                        <div className="col-md-6">
                        <img className="img-fluid img-thumbnail"
                        src="../assets/images/pets.png"
                        alt="placeholder"
                        />
                        </div>
                        <div className="col-md-6 ppCard">
                                <h5 className="mt-5">
                                    <strong>
                                        Name:
                                        {" "}
                                    </strong> 
                                    {post.name}
                                </h5>
                                <br />
                                <p id="profP">
                                    <strong>
                                        Age: {""}
                                    </strong> 
                                    {post.age} {""}
                                    <strong>
                                        Gender: {""}
                                    </strong> 
                                    {post.gender}
                                </p>
                                <p id="profP">
                                    <strong>
                                    Species: {""} 
                                    </strong>
                                    {post.species} {""}
                                    <strong>
                                    Breed: {""} 
                                    </strong>
                                    {post.breed}
                                </p>
                                <p id="profP">
                                    <strong>
                                    Microchip: {""} 
                                    </strong>
                                    {post.microchip} {""}
                                    <strong>
                                    Weight: {""} 
                                    </strong>
                                    {post.weight}</p>
                                <p id="profP">
                                    <strong>
                                    Location: {""}
                                    </strong>
                                    {post.location}
                                </p>
                            </div>
                            </div>
                        <DeleteBtn onClick={() => props.removePost(post._id)} />
                    </ListItem>
                    

                ))
                }
                
            </List>
          
     ) : (
        
            <h3 className="noPet">You haven't added any pets yet!</h3>
      )}
        </div>
    
    );
}

export default PetCard;
