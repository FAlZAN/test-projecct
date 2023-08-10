import React, { useState } from "react";
import {
  Box,
  Avatar,
  Typography,
  RadioGroup,
  Radio,
  FormControl,
  FormControlLabel,
  TextField,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { BorderColor, ChevronRight } from "@mui/icons-material";

function Main() {
  const [selectedOption, setSelectedOption] = useState("company");

  function handleRadioValue(event) {
    setSelectedOption(event.target.value);
  }

  return (
    <Box
      sx={{
        paddingBottom: "4vh",
        overflowY: { xs: "scroll", md: "hidden" },
        display: "flex",
        flexDirection: "column",
        gap: "4vh",
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: "100%", md: "442px" },
          display: "flex",
          justifyContent: { xs: "center", md: "start" },
          flexWrap: { xs: "wrap", md: "nowrap" },
          gap: "4vh",
        }}
      >
        <Avatar sx={{ width: 100, height: 100 }} />

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body1">My Company</Typography>
            <BorderColor />
          </Box>

          <Box>
            <FormControl>
              <RadioGroup
                row
                defaultValue={selectedOption}
                sx={{
                  backgroundColor: "#fff",
                  paddingLeft: "12px",
                  borderRadius: "32px",
                }}
                onChange={handleRadioValue}
              >
                <FormControlLabel
                  control={<Radio sx={{ opacity: 0 }} />}
                  label="Company"
                  value="company"
                  sx={{
                    backgroundColor:
                      selectedOption === "company" ? "#E6E4A5" : "#ffffff",
                    paddingRight: "40px",
                    borderRadius: "32px",
                  }}
                />
                <FormControlLabel
                  control={<Radio sx={{ opacity: 0 }} />}
                  label="Location"
                  value="location"
                  sx={{
                    backgroundColor:
                      selectedOption === "location" ? "#E6E4A5" : "#ffffff",
                    paddingRight: "40px",
                    borderRadius: "32px",
                  }}
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
      </Box>

      <FormControl
        sx={{ display: "flex", flexDirection: "column", gap: "4vh" }}
      >
        <TextField label="Company Name" variant="outlined" />
        <TextField label="Company BPP" variant="outlined" />
      </FormControl>

      <Box
        sx={{
          maxWidth: "600px",
          display: "flex",
          gap: "4vh",
        }}
      >
        <FormControl variant="standard">
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={1}
          >
            <MenuItem value={1}>Department</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="standard" disabled>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={1}
          >
            <MenuItem value={1}>Contacts</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "4vh",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#ffffff",
              padding: "8px 16px",
              borderRadius: "8px",
            }}
          >
            <Typography variant="body1">IT Team</Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: "#ffffff",
              padding: "8px 16px",
              borderRadius: "8px",
            }}
          >
            <Typography variant="body1">Sales & Marketing</Typography>
          </Box>
          <ChevronRight />
        </Box>

        <Button variant="contained">Save</Button>
      </Box>
    </Box>
  );
}

export default Main;
