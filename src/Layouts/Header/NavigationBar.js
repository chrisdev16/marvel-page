import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { navigationItems } from "../../Services/enums";
import { Link } from "react-router-dom";
import marvel_logo from "../../Assets/Images/Marvel-Home-Logo.png";
import Motion from "../../Components/Logo/Motion";

const NavigationBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link to={"/"}>
              <img
                src={marvel_logo}
                alt={"marvel logo"}
                height={"70px"}
                style={{ margin: "5px 20px" }}
              />
            </Link>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <Motion />
          </Box>

          <Box sx={{ flexGrow: 1, display: { s: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { s: "block", md: "none" },
              }}
            >
              {navigationItems.map((page) => (
                <MenuItem
                  key={page.label}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={page.path}
                >
                  <span style={{ padding: "0 2px" }}>{page.icon}</span>
                  <span>{page.label}</span>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {navigationItems.map((page) => (
              <Button
                key={page.label}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
                component={Link}
                to={page.path}
              >
                <Box
                  style={{ marginTop: "20px" }}
                  display={"flex"}
                  textAlign={"center"}
                >
                  <span style={{ padding: "0 2px" }}>{page.icon}</span>
                  <span>{page.label}</span>
                </Box>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavigationBar;
