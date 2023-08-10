import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Box, Container } from "@mui/material";
import { Menu } from "@mui/icons-material";

import SideNav from "./SideNav";

function HamMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const portal = document.getElementById("portal");

  function handleMenuClick() {
    setShowMenu(!showMenu);
  }

  return (
    <Box sx={{ display: { xs: "block", md: "none" } }}>
      <Menu sx={{ fontSize: 32 }} onClick={handleMenuClick} />

      {showMenu && (
        <Container
          disableGutters={true}
          maxWidth={false}
          sx={{
            backgroundColor: "#fff",
            width: 148,
            height: "86vh",
            overflow: "hidden",
            position: "absolute",
            top: "14vh",
            left: 0,
            zIndex: 10,
          }}
        >
          <SideNav />
        </Container>
      )}

      {/* {showMenu &&
        createPortal(
          <Container
            disableGutters={true}
            maxWidth={false}
            sx={{
              backgroundColor: "#fff",
              width: 148,
              overflow: "hidden",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 10,
            }}
          >
            <SideNav />
          </Container>,
          portal
        )} */}
    </Box>
  );
}

export default HamMenu;
