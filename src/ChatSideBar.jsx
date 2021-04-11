import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import User1 from "./assets/img/avatar-1.png";
import {usersFamily,usersFriend} from "./utils";
import { IconButton } from '@material-ui/core';



const drawerWidth = 260;
// const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  online:{
    top: "266px",
    left: "1869px",
    width: "12px",
    height: "12px",
    background: "#96EB6C 0% 0% no-repeat padding-box",
    opacity: 1,
    borderRadius:"50%"
  },
  chatLabel:{
    fontSize:"14px",
    margin:"10px",
    padding:"5px",
    fontWeight:"600"
  },
  underLine:{
    background: "#96EB6C 0% 0% no-repeat padding-box",
    width: "20px",
    height: "5px",

  }, sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  
}));

export default function PermanentDrawerRight({chatToggle}) {
  const classes = useStyles();
  const drawer=<Drawer
  className={classes.drawer}
  variant="permanent"
  classes={{
    paper: classes.drawerPaper,
  }}
  anchor="right"
>
  <div className={classes.toolbar} />
  <Divider />
  <div className={classes.chatLabel}>User Family<div className={classes.underLine}></div></div>
  <List>
    {usersFamily.map((user, index) => (
      <ListItem button key={index} style={{display:"flex",justifyContent:"space-around"}}>
        <ListItemIcon ><img src={user.icon} alt={user.text}/>
        </ListItemIcon>
        <ListItemText primary={user.text} />
        <span className={classes.online}></span>
      </ListItem>
    ))}
  </List>
  <Divider />
  <div className={classes.chatLabel}>User Friends<div className={classes.underLine}></div></div>
  <List>
    {usersFriend.map((user, index) => (
      <ListItem button key={index} style={{display:"flex",justifyContent:"space-around"}}>
        <ListItemIcon ><img src={user.icon} alt={user.text}/>
        </ListItemIcon>
        <ListItemText primary={user.text} />
        <span className={classes.online}></span>
      </ListItem>
    ))}
  </List>
  
</Drawer>


  return (
    <>
   { !chatToggle &&<div className={`${classes.root} ${classes.sectionDesktop}`}>
      {drawer}
    </div>
   }
    { !chatToggle &&<div className={`${classes.root} ${classes.sectionMobile}`}>
      {drawer}
    </div>
   }
    </>
    
  );
}
