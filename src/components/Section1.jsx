import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Logo from "../assets/logo.png";

function Section1() {
  return (
    <Container
      disableGutters={true}
      maxWidth={false}
      sx={{
        maxWidth: "410px",
        height: "100vh",
        padding: "5% 0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <figure>
            <img width="150px" src={Logo} alt="profile picture" />
          </figure>
        </Box>

        <Box>
          <Box>
            <Typography variant="h3" sx={{ color: "#F93439" }}>
              User Name
            </Typography>
            <Box
              sx={{
                height: "8px",
                background:
                  "linear-gradient(90deg, #F00 10.17%, #7D18E2 66.31%, #FFF 100%)",
              }}
            />
          </Box>
          <Typography variant="subtitle1">Title</Typography>
          <Typography variant="body1">Department - Department Value</Typography>
        </Box>

        <Box>
          <Typography variant="h4">Company Name</Typography>
          <Typography variant="body1">Address 1</Typography>
          <Typography variant="body1">Address 2</Typography>
          <Typography variant="body1">Address 3</Typography>
          <Typography variant="body1">Maharashtra, 400050, India</Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Section1;
