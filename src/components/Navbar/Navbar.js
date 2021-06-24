import React from "react";
import { AppBar, Badge, Container, IconButton, Toolbar } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

export const Navbar = () => {


	return (
		<AppBar color='default' position='sticky'>
			<Container fixed>
				<Toolbar>
					<IconButton edge='start'>
						<MenuIcon />
					</IconButton>
					<div style={{flexGrow: 1}}></div>
					<IconButton edge='end'>
						<Badge badgeContent={4} color="error">
							<ShoppingCartOutlinedIcon/>
						</Badge>
					</IconButton>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
