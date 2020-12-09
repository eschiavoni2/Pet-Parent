import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import Auth from "../../utils/Auth";
import { Link } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";
import "./style.css"

// login authentication button
const AuthButton = () => {
	console.log("NAV", Auth.isAuthenticated);

	const [user, dispatch] = useContext(UserContext);
	const history = useHistory();

	return (
		Auth.isAuthenticated ? (
			<Link 
				onClick={() => {
					Auth.signout(() => history.push('/login'))
					dispatch({
						type: "GET_USER",
						payload: {}
					})
				}}>
				Logout
			</Link>
		) : (
				<Link
					className="login"
					to="/login"
				>Login
				</Link>
			)
	)
}

export default AuthButton;