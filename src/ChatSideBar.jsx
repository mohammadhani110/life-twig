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
// import User2 from "./assets/img/avatar-1.png";
// import User3 from "./assets/img/avatar-1.png";


const drawerWidth = 300;

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
    width: "16px",
    height: "16px",
    background: "#96EB6C 0% 0% no-repeat padding-box",
    opacity: 1,
    borderRadius:"50%"
  }
}));

export default function PermanentDrawerRight() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {['Brandon Copper', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text} style={{display:"flex",justifyContent:"space-around"}}>
              <ListItemIcon ><img src={User1} alt={User1}/>
              </ListItemIcon>
              <ListItemText primary={text} />
              <span className={classes.online}></span>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Brandon Copper', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text} style={{display:"flex",justifyContent:"space-around"}}>
              <ListItemIcon ><img src={User1} alt={User1}/>
              </ListItemIcon>
              <ListItemText primary={text} />
              <span className={classes.online}></span>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
