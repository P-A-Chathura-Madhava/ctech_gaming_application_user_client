import Link from "next/link";

function HomeCom() {
  return (
    <div className="flex justify-center align-middle bg-black">
    <img
      className="h-screen"
      src="https://e1.pxfuel.com/desktop-wallpaper/139/51/desktop-wallpaper-i-am-a-gamer-gamer.jpg"
      alt=""
    />
    <div className="absolute flex flex-col justify-center p-6 align-middle bg-black bg-opacity-50 rounded-lg top-64">
      <h1 className="text-4xl font-bold text-center text-white">
        Unlimited Gaming Experience
      </h1>
      <h2 className="text-lg text-center text-white">
        Watch Anywhere Anytime
      </h2>
      <h4 className="text-center text-white">
        Ready to Begin your Story? Click on Register
      </h4>
    </div>
    <Link
      href={"/login"}
      className="absolute px-16 py-2 text-white bg-transparent border border-gray-300 rounded-md top-4 right-40 hover:bg-gray-400 hover:text-black"
    >
      Login
    </Link>
    <Link
      href={"/signup"}
      className="absolute px-24 py-2 text-xl font-bold text-white bg-black bg-opacity-50 border border-gray-300 rounded-md top-96 hover:bg-gray-400 hover:text-black"
    >
      Register
    </Link>
  </div>
  )
}

export default HomeCom