"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Cookies from "js-cookie";
import Link from "next/link";
import { Typography } from "@mui/material";
import {
  Person,
  PersonOutline,
  ShoppingCart,
  ShoppingCartOutlined,
} from "@mui/icons-material";
const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});
const drawerWidth = 240;
const navItems = ["Fibre", "LTE", "5G", "Hosting", "VoIP", "Shop"];

function AppDrawer(props) {
  const route = useRouter();
  const { state, setState } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const isLoggedIn = state && state.user ? true : false;
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={100}
      >
        <Typography
          sx={{
            fontSize: 24,
            fontWeight: "700",
            color: "red",
          }}
        >
          Telkoweb
        </Typography>
      </Box>
      <Divider sx={{ bgcolor: "white" }} />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item}
            disablePadding
            sx={
              item === "Home" && usePathname() === "/"
                ? {
                    bgcolor: "#ff3158",
                  }
                : usePathname().includes(item.toLowerCase())
                ? {
                    bgcolor: "#ff3158",
                  }
                : {
                    bgcolor: "transparent",
                  }
            }
          >
            <ListItemButton
              sx={[
                item === "Home" && usePathname() === "/"
                  ? {
                      borderRight: "5px solid #f50366",
                    }
                  : usePathname().includes(item.toLowerCase())
                  ? {
                      borderRight: "5px solid #f50366",
                    }
                  : {
                      borderRight: "none",
                    },
                { textAlign: "center" },
              ]}
            >
              <ListItemText sx={{ color: "white" }} primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box>
        <ShoppingCartOutlined sx={{ color: "white", fontSize: 20 }} />
        <PersonOutline sx={{ color: "white", fontSize: 20, ml: 3 }} />
      </Box>
    </Box>
  );
  const handleNavigation = (item) => {
    const lowerCased = item.toLowerCase();
    if (lowerCased === "home") route.push("/");
    else route.push("/" + lowerCased);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const handleLogout = () => {
    setAnchorEl(null);
    Cookies.remove("qasim_lms_auth");
    setState((state) => ({ ...state, user: null }));
    route.push("/");
  };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{
            backgroundColor: "#fff",
            boxShadow: "none",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Toolbar
            sx={{
              width: "90%",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon sx={{ color: "#000000" }} />
            </IconButton>
            <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
              <Typography
                sx={{
                  fontSize: 24,
                  fontWeight: "700",
                  color: "#FF0000",
                }}
              >
                Telkoweb
              </Typography>
            </Box>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                flexWrap: { xs: "nowrap", sm: "wrap" },
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={[
                    item === "Home" && usePathname() === "/"
                      ? {
                          color: "red",
                        }
                      : usePathname().includes(item.toLowerCase())
                      ? {
                          color: "red",
                        }
                      : {
                          color: "#000000",
                        },
                    {
                      ml: 1,
                      fontSize: { xs: 8, sm: 10, md: 14 },
                      fontWeight: "700",
                      lineHeight: "29.05px",
                      textTransform: "none",
                      "&:hover": {
                        color: "red",
                      },
                    },
                  ]}
                  onClick={() => handleNavigation(item)}
                >
                  {item}
                </Button>
              ))}
            </Box>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                flexWrap: { xs: "nowrap", sm: "wrap" },
                gap: 2,
                ml: 3,
              }}
            >
              <ShoppingCartOutlined sx={{ color: "black", fontSize: 20 }} />
              <PersonOutline sx={{ color: "black", fontSize: 20 }} />
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                backgroundColor: "#002935",
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </ThemeProvider>
  );
}

export default AppDrawer;
