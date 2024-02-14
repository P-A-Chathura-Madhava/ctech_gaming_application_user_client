import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center align-middle bg-black">

      <img className="h-screen" src="https://e1.pxfuel.com/desktop-wallpaper/139/51/desktop-wallpaper-i-am-a-gamer-gamer.jpg" alt="" />        
      <Link href={"/login"} className="absolute px-16 py-2 text-white bg-transparent border border-gray-300 rounded-md top-4 right-40 hover:bg-gray-400 hover:text-black">Login</Link>
      <Link href={"/signup"} className="absolute px-24 py-2 text-xl font-bold text-white bg-black bg-opacity-50 border border-gray-300 rounded-md top-96 hover:bg-gray-400 hover:text-black">Register</Link>
    </main>
  );
}
