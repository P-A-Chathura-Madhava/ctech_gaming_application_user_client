"use client";
import { Box } from "@mui/material";
import Link from "next/link";
import Header from "../components/Header";

function SignupPage() {
  return (
    <>
      <img
        className="w-screen h-screen"
        src="https://wallpapers.com/images/featured/pc-gaming-zvbj1ryoiptz09af.jpg"
        alt=""
      />
      <Header />
      <div className="absolute w-screen top-32">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            m: 1,
            p: 1,
            color: (theme) =>
              theme.palette.mode === "dark" ? "grey.300" : "grey.800",
            // border: "1px solid",
            borderColor: (theme) =>
              theme.palette.mode === "dark" ? "grey.800" : "grey.300",
            borderRadius: 2,
            fontSize: "0.875rem",
            fontWeight: "700",
          }}
        >
          <form className="flex flex-col">
            <h1 className="mb-2 text-2xl text-center text-white">
              Be a Member of CTECH Gaming
            </h1>
            <div class="mb-2">
            {/* <label for="success" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Your name</label> */}
            <input type="text" id="success" className="bg-transparent bg-green-50 border border-gray-400 text-white dark:text-green-400 placeholder-white dark:placeholder-white text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-400" placeholder="Username"/>
            {/* <p className="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium">Well done!</span> Some success message.</p> */}
              </div>
              <div class="mb-2">
            {/* <label for="success" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Your name</label> */}
            <input type="text" id="success" className="bg-transparent bg-green-50 border border-gray-400 text-white dark:text-green-400 placeholder-white dark:placeholder-white text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-400" placeholder="E-mail"/>
            {/* <p className="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium">Well done!</span> Some success message.</p> */}
              </div>
              <div class="mb-2">
            {/* <label for="success" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Your name</label> */}
            <input type="password" id="success" className="bg-transparent bg-green-50 border border-gray-400 text-white dark:text-green-400 placeholder-white dark:placeholder-white text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-400" placeholder="Password"/>
            {/* <p className="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium">Well done!</span> Some success message.</p> */}
              </div>
            <button className="block py-2 text-lg text-white border rounded-md border-slate-300 hover:bg-gray-200 hover:text-black">Start Mission</button>
            <Link href={"/login"} className="block my-4 text-center text-white hover:text-blue-400">Get Started</Link>
          </form>
        </Box>
      </div>
    </>
  );
}

export default SignupPage;
