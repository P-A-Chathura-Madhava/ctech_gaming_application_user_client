import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

function UserNavbar() {
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <AppBar className="flex flex-row align-middle" component="nav">
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Link
            className="h-full pt-5 duration-300 ease-in hover:pt-6 hover:text-yellow-400"
            href={"/"}
          >
            Home
          </Link>
          <Link
            className="h-full pt-5 duration-300 ease-in hover:pt-6 hover:text-yellow-400"
            href={"/pcGames"}
          >
            PC Games
          </Link>
          <Link
            className="h-full pt-5 duration-300 ease-in hover:pt-6 hover:text-yellow-400"
            href={"/mobileGames"}
          >
            Mobile Games
          </Link>
          <Link
            className="h-full pt-5 duration-300 ease-in hover:pt-6 hover:text-yellow-400"
            href={"/myList"}
          >
            My List
          </Link>
        </Box>
      </AppBar>
    </>
  );
}

export default UserNavbar;
