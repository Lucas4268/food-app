import React from 'react'
import { Avatar, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Container } from '@material-ui/core';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FastfoodOutlinedIcon from '@material-ui/icons/FastfoodOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';



export const MenuItems = () => {
    return (
        <List style={{width: '275px'}}>
            <Container className='text-center mb-2'>
                <ListItem className='justify-content-center'>
                    <Avatar alt='user' style={{width: '75px', height: '75px'}} src='https://www.certificadosenergeticos.com/wp-content/uploads/2020/01/1578589051-default-non-user-no-photo-1.jpg'/>
                </ListItem>
                <h5>Lucas Montesino</h5>
                <span className='text-muted'><LocationOnOutlinedIcon/> Juan Manuel de Rosas 1423</span>
            </Container>
            <Divider style={{backgroundColor: '#222'}}/>
            <ListItem button>
                <ListItemIcon><HomeOutlinedIcon/></ListItemIcon>
                <ListItemText primary='Inicio'/>
            </ListItem>
            <ListItem button>
                <ListItemIcon><FastfoodOutlinedIcon/></ListItemIcon>
                <ListItemText primary='Pendientes'/>
            </ListItem>
        </List>
    )
}
