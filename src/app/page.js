import Image from "next/image";
import NavBar from "@/components/NavBar";
import Inicio from "@/components/Inicio/inicio";
import Corpo2 from "@/components/Corpo2/corpo2";
import Corpo3 from "@/components/Corpo3/corpo3";
import Corpo4 from "@/components/Corpo4/corpo4";

export default function Home() {
  return (
    <div>
      {/* <button className="text-9xl text-yellow-500 hover:text-red-500">Teste</button> */}
      <NavBar/>
      <Inicio/>
      <Corpo2/>
      <Corpo3/>
      <Corpo4/>
    </div>
  );
}
