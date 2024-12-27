import React from "react";
import { Button } from "./ui/button";
import BadgeShine from "./ui/badge";
import MarqueeTech from "@/components/Marquee";
import { VscCallOutgoing } from "react-icons/vsc";
import Link from "next/link";
import { MdAutoAwesome } from "react-icons/md";


const Hero = () => {
  return (
    <section className="relative w-full h-fit pt-16 px-9 flex flex-col items-center gap-6 z-10 overflow-hidden">
      {/* Fondo de cuadrícula + Degradado */}
      <div className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#b1b1b12e_1px,transparent_1px),linear-gradient(to_bottom,#b1b1b12e_1px,transparent_1px)] bg-[size:56px_24px] opacity-30 max-h-[90vh]"></div>
      <div className="w-[320px] sm:w-[420px] h-[80px] bg-[#0A83E8] bg-opacity-70 blur-[80px] relative rounded-full bottom-8 z-10"></div>
      {/* Contenido */}
      <BadgeShine Icon={MdAutoAwesome} text={"IT Solutions & Product Management"} />
      <h1 className="text-white text-4xl sm:text-6xl tracking-tight font-semibold max-w-[700px] sm:max-w-[800px] text-center leading-[125%] sm:leading-[115%] z-50 bg-transparent">
        Potencia tu Equipo con{" "}
        <span className="animate-text-gradient bg-gradient-to-r from-[#a8d2f5] via-[#0A83E8] to-[#a8d2f5] bg-[200%_auto] bg-clip-text text-transparent">
          Soluciones Digitales Efectivas.
        </span>
      </h1>
      <p className="text-[#a1a1a4] text-base sm:text-xl opacity-80 max-w-[600px] sm:max-w-[700px] text-center z-10 bg-transparent">
        Utilizo un stack tecnológico robusto y distintos tipos de frameworks ágiles para diseñar soluciones IT personalizadas, alineadas a las demandas del mercado.
      </p>
      <div className="flex gap-6 sm:gap-8 items-center justify-center z-10">
        <Link href="https://cal.com/jonathan-guidi/30min" target="blank">
          <Button
            variant="default"
            className="bg-[#0A83E8] hover:bg-[#0b1f30] text-white text-sm sm:text-lg w-fit h-fit font-medium mt-4 px-4 sm:px-6 py-2 sm:py-3"
          >
            <VscCallOutgoing className="bg-transparent text-lg sm:text-xl" />
            <span className="bg-transparent">Agenda una Llamada</span>
          </Button>
        </Link>
      </div>
      <MarqueeTech />
    </section>
  );
};

export default Hero;
