import React,{useState} from "react";
import "./App.css";
import AppBar from "./AppBar";
import SideBar from "./SideBar";
import ChatSideBar from "./ChatSideBar";
import Post from "./Post";
import CreatePost from "./CreatePost";

import Grid from "@material-ui/core/Grid";

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [chatToggle, setChatToggle] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleChatToggle=()=>{
    setChatToggle(!chatToggle);
  }

  return (
    <>
      <AppBar drawerToggle={handleDrawerToggle} chatToggle={handleChatToggle}/>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        // spacing={3}
      >
        <Grid item >
          <SideBar handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen}/>
        </Grid>
        <Grid item container
        direction="row"
        justify="center"
        alignItems="center" xs={10} sm={10} >
          <CreatePost />
          <Post />
        </Grid>
        <Grid item >
          <ChatSideBar  chatToggle={chatToggle} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
