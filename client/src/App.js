import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
	Link
} from 'react-router-dom';
import Auth from "./utils/Auth";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Register from "./components/Register";
// import { Container } from "./components/Grid";
import PublicRoute from "./pages/PublicRoute";
import ProtectedRoute from "./pages/ProtectedRoute";
import './App.css';
import { UserProvider } from "./utils/UserContext";
import Home from './pages/PublicRoute/Home';
import Profile from './pages/ProtectedRoute/Profile';
import { StoreProvider } from "../src/components/utils/GlobalState";
import CreateProfile from "./pages/ProtectedRoute/CreateProfile/profile";
import Footer from "../src/components/Footer/footer";

//Now we have all the stuff we need .. let's render some components with the Router
const AuthExample = () => (
	<UserProvider>
		<Router>
			<div>
				<StoreProvider>
				{/* <Nav /> */}
					<Nav className="App-header" />
					{/* <Container> */}
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/public" component={PublicRoute} />
							<Route path="/login" component={Login} />
							<Route path="/register" component={Register} />
							<PrivateRoute path="/profilepage" component={ProtectedRoute} />
							<Route exact path="/profile" component={Profile} />
							<PrivateRoute exact path ="/createprofile" component={CreateProfile} />
							{/* <Route component={NoMatch} /> */}
						</Switch>
					{/* </Container> */}
					<Footer />
				</StoreProvider>
			</div>
		</Router>
	</UserProvider>
)




// This is the private route component this checks for an authorized user here
const PrivateRoute = ({ component: Component, ...rest }) => (
	<Router>
		<div>

			<Route {...rest} render={props => (

				Auth.isAuthenticated ? (
					<Component {...props} />
				) : (
						<div>
							<div className="alert alert-danger text-center" role="alert">
								This page is private, please sign up or login to gain access.
					</div>
							
							<Redirect to={{
								pathname: '/login',
								state: { from: props.location }
							}} />
						</div>
					)
			)} />
		</div>
	</Router>
)








export default AuthExample

