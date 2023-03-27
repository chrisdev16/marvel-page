import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import {
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import marvel_logo from "../../Assets/Images/Marvel-Home-Logo.png";
import { navigationItems } from "../../Services/enums";
import Motion from "../../Components/Logo/Motion";

const Header = () => {
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
          <Box
            sx={{
              display: { s: "flex", md: "none" },
            }}
          >
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
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
            <Motion />
            <Box
              sx={{
                display: { xs: "grid", md: "none" },
                alignContent: "end",
              }}
            >
              <Typography fontWeight={"bold"} fontSize={"20px"}>
                ARVEL
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "end",
            }}
          >
            <Link to={"/search"} style={{ color: "#FFF" }}>
              <SearchIcon fontSize={"large"} />
            </Link>
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

export default Header;
