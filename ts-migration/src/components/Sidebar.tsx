"use client";
import { Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import Link from "next/link";

const drawerWidth = 240;

const routes = [
  { text: "Home", href: "/" },
  { text: "Assignment 1", href: "/Assignment-1" },
  { text: "Assignment 2", href: "/Assignment-2" },
  { text: "Assignment 3", href: "/Assignment-3" },
  { text: "Assignment 4", href: "/Assignment-4" },

    { text: "Assignment 5", href: "/Assignment-5" },
      { text: "Assignment 6", href: "/Assignment-6" },

  { text: "Dashboard", href: "/Assignment-3/dashboard" },
  { text: "About", href: "/about" },
];

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#1e293b",
          color: "white",
          paddingTop: "20px",
        },
      }}
    >
      <h2 style={{ fontSize: "22px", paddingLeft: "20px", marginBottom: "20px" }}>Assignments</h2>
      <List>
        {routes.map(({ text, href }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              component={Link}
              href={href}
              sx={{ paddingLeft: "20px" }}
            >
              <ListItemText
                primary={text}
                primaryTypographyProps={{
                  style: { color: "white", fontWeight: 500 },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
