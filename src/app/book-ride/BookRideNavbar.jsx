import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Drawer } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { drawerList } from "./DrawerList";

const BookRideNavbar = () => {
  const [sidebarOpen, setSideBarOpen] = React.useState(false);

  const handleSidebarClose = () => setSideBarOpen(false);
  const handleSidebarOpen = () => setSideBarOpen(true);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ober Cab
          </Typography>

          {true ? (
            <Avatar
              className="cursor-pointer"
              sx={{ bgcolor: deepOrange[500] }}
            >
              A
            </Avatar>
          ) : (
            <Button color="inherit">Login</Button>
          )}
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
      <Drawer anchor={"left"} open={sidebarOpen} onClose={handleSidebarClose}>
        {drawerList("left")}
      </Drawer>
    </Box>
  );
};
export default BookRideNavbar;
