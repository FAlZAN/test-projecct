import React from "react";
import { Container, Divider, Box } from "@mui/material";

import SideNav from "../components/SideNav";
import SearchBar from "../components/SearchBar";
import Main from "../components/Main";
import HamMenu from "../components/HamMenu";

function Page2() {
  return (
    <Container
      disableGutters={true}
      maxWidth={false}
      sx={{
        backgroundColor: "#EBEFF1",
        height: "100vh",
        padding: "4vh 0",
        display: "flex",
        position: "relative",
      }}
    >
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <SideNav />
      </Box>

      <Divider orientation="vertical" variant="middle" />

      <Box
        sx={{
          width: "100%",
          padding: "0 4vh",
          display: "flex",
          flexDirection: "column",
          gap: "4vh",
        }}
      >
        <HamMenu />
        <SearchBar />
        <Main />
      </Box>
    </Container>
  );
}

export default Page2;
