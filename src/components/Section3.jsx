import React from "react";
import {
  Container,
  Typography,
  Box,
  CardActions,
  CardMedia,
} from "@mui/material";

function Section3() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "410px",
        height: "100vh",
        padding: "5% 0",
      }}
    >
      <CardActions>
        <CardMedia
          sx={{ maxWidth: 345, margin: "auto" }}
          component="video"
          src="#"
          controls
        />
      </CardActions>

      <Box
        sx={{
          border: "1px solid red",
          padding: "0 16px",
          margin: "24px 0",
          borderRadius: "8px",
          fontStyle: "italic",
          textAlign: "center",
          color: "#F80000",
        }}
      >
        <Typography variant="h5">
          Some text showing offers on the customers business
        </Typography>
      </Box>
    </Container>
  );
}

export default Section3;
