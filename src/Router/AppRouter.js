import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import { FoodsSale } from "../pages/FoodsSale";
import { PendingOrders } from "../pages/PendingOrders";
import { Navbar } from "../components/Navbar/Navbar";
import {Login} from "../pages/Login"
import { Container } from "@material-ui/core";
import { SlideMenu } from "../components/SlideMenu/SlideMenu";


export const AppRouter = () => {
	return (
		<Router>
			<div>
				<Navbar />
				<SlideMenu/>
				
				<Container fixed>
					<Switch>
						<Route exact path="/" component={FoodsSale} />

						<Route exact path="/pending" component={PendingOrders} />

						<Route exact path="/login" component={Login} />

						<Redirect to="/" />
					</Switch>
				</Container>
			</div>
		</Router>
	);
};
