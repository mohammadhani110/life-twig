import React from "react";
import "./App.css";
import AppBar from "./AppBar";
import SideBar from "./SideBar";
import ChatSideBar from "./ChatSideBar";
import Post from "./Post";
import CreatePost from "./CreatePost";

import Grid from "@material-ui/core/Grid";

function App() {
  return (
    <>
      <AppBar />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item sm={2}>
          <SideBar />
        </Grid>
        <Grid item container
        direction="row"
        justify="center"
        alignItems="center" xs={10} sm={8}>
          <CreatePost />
          <Post />
        </Grid>
        <Grid item sm={2}>
          <ChatSideBar />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
