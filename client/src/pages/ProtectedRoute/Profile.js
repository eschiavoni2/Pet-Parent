import Expenses from "../../components/Expenses/expense";
import PetCard from "../../components/PetCard/card";
import { useStoreContext } from "../../components/utils/GlobalState";
import React, { useEffect } from "react";
import { REMOVE_POST, UPDATE_POSTS, LOADING } from "../../components/utils/actions";
import API from "../../components/utils/API";
import CreateProfile from "../../components/CreateProfile/profile";
import TodoApp from "../../components/TodoApp/todo";
import "../style.css";
// import {
//     Card
// } from 'reactstrap';

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
        <div className="row">
            <div>
                    <PetCard removePost={removePost} posts={state.posts} />
                    <CreateProfile />
            </div>
            <div>
                    <Expenses />
                    <TodoApp />
            </div>
        </div>

    );
};


export default Profile;