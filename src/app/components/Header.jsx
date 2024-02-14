import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

function Header() {
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          ></IconButton>
          <img
            className="mr-4 rounded-full h-14"
            src="https://www.shutterstock.com/shutterstock/photos/1318294343/display_1500/stock-vector-assassin-ninja-esports-mascot-logo-1318294343.jpg"
            alt=""
          />
          <Link href={"/"}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              className="text-2xl font-bold"
            >
              CTECH GAMING
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
