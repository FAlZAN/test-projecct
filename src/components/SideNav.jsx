import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  FormatListBulleted,
  LocalPhone,
  Email,
  LibraryBooks,
  LocationOn,
  Assessment,
  GroupAdd,
  QuestionAnswer,
  Groups,
  CalendarMonth,
  MiscellaneousServices,
} from "@mui/icons-material";

function SideNav() {
  const sideNavItems = [
    {
      title: "Dashboard",
      icon: <FormatListBulleted sx={{ fontSize: "16px" }} />,
    },
    {
      title: "Voice",
      icon: <LocalPhone sx={{ fontSize: "16px" }} />,
    },
    {
      title: "Mail",
      icon: <Email sx={{ fontSize: "16px" }} />,
    },
    {
      title: "Library",
      icon: <LibraryBooks sx={{ fontSize: "16px" }} />,
    },
    {
      title: "Location",
      icon: <LocationOn sx={{ fontSize: "16px" }} />,
    },
    {
      title: "Reports",
      icon: <Assessment sx={{ fontSize: "16px" }} />,
    },
    {
      title: "Media Traffic",
      icon: <GroupAdd sx={{ fontSize: "16px" }} />,
    },
    {
      title: "Chat",
      icon: <QuestionAnswer sx={{ fontSize: "16px" }} />,
    },
    {
      title: "Social Media",
      icon: <Groups sx={{ fontSize: "16px" }} />,
    },
    {
      title: "Calendar",
      icon: <CalendarMonth sx={{ fontSize: "16px" }} />,
    },
    {
      title: "Team Messaging",
      icon: <QuestionAnswer sx={{ fontSize: "16px" }} />,
    },
    {
      title: "Service UI",
      icon: <MiscellaneousServices sx={{ fontSize: "16px" }} />,
    },
  ];

  return (
    <Box
      sx={{
        width: 148,
        height: "100%",
        overflowY: "scroll",
      }}
    >
      <List>
        {sideNavItems.map((items, index) => (
          <ListItem
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ListItemIcon
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {items.icon}
            </ListItemIcon>

            <ListItemText
              secondary={
                <Typography sx={{ fontSize: "10px" }} variant="subtitle2">
                  {items.title}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default SideNav;
