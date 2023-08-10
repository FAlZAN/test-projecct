import React from "react";
import { Container, Box, Stack } from "@mui/material";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";

function Page1() {
  return (
    <Container disableGutters={true} maxWidth={false}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box
          sx={{
            width: "25px",
            height: "100vh",
            backgroundColor: "#4791D6",
            display: { xs: "none", md: "block" },
          }}
        />

        <Section1 />
        <Section2 />
        <Section3 />
      </Stack>
    </Container>
  );
}

export default Page1;
