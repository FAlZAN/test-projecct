import React from "react";
import { Container, Box, Badge, FormControl, TextField } from "@mui/material";
import {
  MessageOutlined,
  AddIcCallOutlined,
  VideocamOutlined,
} from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import avatar from "../assets/avatar.png";

function Section2() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "410px",
        height: "100vh",
        padding: "5% 0 10% 0",
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Badge variant="dot" color="success">
          <Avatar
            sx={{ width: "150px", height: "150px" }}
            src={avatar}
            alt="avatar"
          >
            A
          </Avatar>
        </Badge>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "50px",
          }}
        >
          <MessageOutlined sx={{ fontSize: 50 }} />
          <AddIcCallOutlined sx={{ fontSize: 50 }} />
          <VideocamOutlined sx={{ fontSize: 60 }} />
        </Box>

        <FormControl sx={{ width: "80%" }}>
          <TextField
            id="outlined-basic"
            label="Typing...."
            variant="outlined"
          />
        </FormControl>
      </Box>
    </Container>
  );
}

export default Section2;
