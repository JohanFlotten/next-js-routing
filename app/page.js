import Image from "next/image";
import { AltProductCards } from "./components/Itemcards";

export default function Home() {
  return ( 
    <div className="bg-gray-800 h-screen">
      <AltProductCards/>
    </div>
  );
}
