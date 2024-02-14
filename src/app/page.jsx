import Image from "next/image";
import HomeCom from "./components/HomeCom";
import AccordionUsage from "./components/AccordionUsage";


export default function Home() {
  return (
    <main className="bg-black">
      <HomeCom />
      <AccordionUsage />
      <div className="h-36"></div>
    </main>
  );
}
