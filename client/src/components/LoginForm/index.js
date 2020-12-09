import React, { useRef } from 'react'
import { Container } from 'reactstrap';
import Card from "../Card"
import "./style.css"

function LoginForm({ onLogin }) {

	const formRef = useRef();
	const userNameRef = useRef();
	const passwordRef = useRef();

	return (
		<Container className="col-md-5">
		<Card id="loginP" title="Login with your Username and Password">
			<form
				ref={formRef}
				onSubmit={(e) => {
					e.preventDefault();
					return onLogin({
						username: userNameRef.current.value,
						password: passwordRef.current.value
					});
				}}
			>
				<div className="form-group">
					<input className="form-control" ref={userNameRef} type='text' name="username" placeholder='Enter Username' /><br />
					<input className="form-control" ref={passwordRef} type='password' name="password" placeholder='Password' /><br />
					<button style={{textAlign: 'center'}} className="btn btn-success" id="submit" type='submit'>
						Submit
						</button>
				</div>
			</form>
		</Card>
		</Container>
	)
}


export default LoginForm