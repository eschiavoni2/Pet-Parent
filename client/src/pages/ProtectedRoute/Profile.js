import Expenses from "../../components/Expenses/expense";
import PetCard from "../../components/PetCard/card";
import { useStoreContext } from "../../components/utils/GlobalState";
import React, { useEffect } from "react";
import { REMOVE_POST, UPDATE_POSTS, LOADING } from "../../components/utils/actions";
import API from "../../components/utils/API";
import TodoApp from "../../components/TodoApp/todo";
import "../style.css";
import Jumbo from "../../components/Jumbo/jumbotron";


function Profile() {

    const [state, dispatch] = useStoreContext();

    const removePost = id => {
        API.deleteProfile(id)
            .then(() => {
                dispatch({
                    type: REMOVE_POST,
                    _id: id
                });
            })
            .catch(err => console.log(err));
    };

    

    useEffect(() => {
        const getProfiles = () => {
            dispatch({ type: LOADING });
            API.getProfiles()
                .then(results => {
                    dispatch({
                        type: UPDATE_POSTS,
                        posts: results.data
                    });
                })
                .catch(err => console.log(err));
        };
        getProfiles();
    }, []);


    return (
        <div>
        <Jumbo />
        <div className="container">
            <div className="row">
            <div className="col">

            <div>
                    <PetCard removePost={removePost} posts={state.posts} />
            </div>
            </div>
            <div className="col">

            <div>
                    <Expenses />
                    <TodoApp />
            </div>        
            </div>
            </div>
        </div>
        </div>
    );
};


export default Profile;