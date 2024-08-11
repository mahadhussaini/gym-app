import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useAuth } from "../context/AuthContext";

const CustomAppBar = styled(AppBar)`
  background: linear-gradient(
    90deg,
    #3f51b5,
    #1e88e5
  ); /* Gradient background */
`;

const CustomToolbar = styled(Toolbar)`
  max-width: 1200px;
  margin: auto;
  width: 80%;
`;

const LogoTypography = styled(Typography)`
  flex-grow: 1;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  color: #fff;
`;

const NavButton = styled(Button)`
  margin-left: 15px;
  color: #fff;
  font-weight: 500;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const DrawerList = styled(List)`
  width: 250px;
`;

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const menuItems = isAuthenticated
    ? [
        { text: "Home", to: "/" },
        { text: "Workout Plans", to: "/workout-plans" },
        { text: "Exercise Library", to: "/exercise-library" },
        { text: "Workout Log", to: "/workout-log" },
        { text: "Logout", to: "/login", onClick: handleLogout },
      ]
    : [
        { text: "Home", to: "/" },
        { text: "Workout Plans", to: "/workout-plans" },
        { text: "Login", to: "/login" },
        { text: "Sign Up", to: "/signup" },
      ];

  const renderMenuButtons = () =>
    menuItems.map((item) => (
      <NavButton
        key={item.text}
        // @ts-ignore
        component={Link}
        to={item.to}
        onClick={item.onClick}
        aria-label={item.text}
      >
        {item.text}
      </NavButton>
    ));

  const renderDrawerList = () => (
    <DrawerList onClick={handleDrawerToggle}>
      {menuItems.map((item) => (
        <ListItem
          button
          key={item.text}
          component={Link}
          to={item.to}
          onClick={item.onClick}
        >
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </DrawerList>
  );

  return (
    <CustomAppBar position="static">
      <CustomToolbar>
        <LogoTypography variant="h6">GymGo</LogoTypography>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleDrawerToggle}
            >
              {renderDrawerList()}
            </Drawer>
          </>
        ) : (
          renderMenuButtons()
        )}
      </CustomToolbar>
    </CustomAppBar>
  );
}

export default Navbar;
