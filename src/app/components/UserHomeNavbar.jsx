"use client";

import { Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

function UserHomeNavbar() {
  const [scroll, setScroll] = useState(false);
  const scrollHeader = () => {
    if (window.scrollY >= 1) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <div
      className={
        scroll
          ? "fixed w-screen bg-black text-white ease-in duration-300"
          : "bg-blue-500 ease-in duration-300"
      }
    >
      <div className="flex flex-row">
        <div className="flex flex-row align-middle">
        <img
          className="my-1 ml-10 mr-4 rounded-full h-14"
          src="https://www.shutterstock.com/shutterstock/photos/1318294343/display_1500/stock-vector-assassin-ninja-esports-mascot-logo-1318294343.jpg"
          alt=""
        />
        <Link href={"/"}>
            <Typography
              paddingTop={"16px"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              className="text-2xl font-bold"
            >
              CTECH GAMING
            </Typography>
          </Link>
        </div>
            <div className="flex flex-row gap-4 pl-10">
            <Link
            className="h-full pt-4 duration-300 ease-in hover:pt-6 hover:text-yellow-400"
            href={"/"}
          >
            Home
          </Link>
          <Link
            className="h-full pt-4 duration-300 ease-in hover:pt-6 hover:text-yellow-400"
            href={"/pcGames"}
          >
            PC Games
          </Link>
          <Link
            className="h-full pt-4 duration-300 ease-in hover:pt-6 hover:text-yellow-400"
            href={"/mobileGames"}
          >
            Mobile Games
          </Link>
          <Link
            className="h-full pt-4 duration-300 ease-in hover:pt-6 hover:text-yellow-400"
            href={"/myList"}
          >
            My List
          </Link>
            </div>
      </div>
    </div>
  );
}

export default UserHomeNavbar;
