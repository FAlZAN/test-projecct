import React from "react";
import {
  Box,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { ArrowBackIos, Search } from "@mui/icons-material";

function SearchBar() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "10vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <ArrowBackIos sx={{ fontSize: "32px" }} />

      <FormControl variant="outlined">
        <OutlinedInput
          startAdornment={
            <InputAdornment position="start">
              <IconButton>
                <Search />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
}

export default SearchBar;
