import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import ListAlt from '@material-ui/icons/ListAlt';
import Loop from '@material-ui/icons/Loop';
import Build from '@material-ui/icons/Build';
import { Link } from "react-router-dom";
import AllInboxIcon from '@material-ui/icons/AllInbox';
import AccountCircle from '@material-ui/icons/AccountCircle';


export const mainListItems = (
    <div>
        <ListItem button component={Link} to="/backlog">
            <ListItemIcon>
                <AllInboxIcon />
            </ListItemIcon>
            <ListItemText primary="Backlog" />
        </ListItem>
        <ListItem button component={Link} to="/proceso">
            <ListItemIcon>
                <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="Proceso" />
        </ListItem>
        <ListItem button component={Link} to="/proyecto">
            <ListItemIcon>
                <LibraryBooks />
            </ListItemIcon>
            <ListItemText primary="Proyecto" />
        </ListItem>
        <ListItem button component={Link} to="/recurso">
            <ListItemIcon>
                <Build />
            </ListItemIcon>
            <ListItemText primary="Recurso" />
        </ListItem>
        <ListItem button component={Link} to="/rol">
            <ListItemIcon>
                <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="Rol" />
        </ListItem>
        <ListItem button component={Link} to="/sprint">
            <ListItemIcon>
                <Loop />
            </ListItemIcon>
            <ListItemText primary="Sprint" />
        </ListItem>
        <ListItem  button component={Link} to="/tarea">
            <ListItemIcon>
                <ListAlt />
            </ListItemIcon>
            <ListItemText primary="Tarea" />
        </ListItem>
    </div>
);