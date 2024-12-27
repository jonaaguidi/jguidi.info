"use client";
import React, { useRef, useState } from "react";
import BadgeShine from "./badge";
import Image from "next/image";
import jona from "../../../public/jona.jpg";
import { TbDeviceMobileShare } from "react-icons/tb";
import { MdOutlineWeb } from "react-icons/md";
import { FaRegChartBar } from "react-icons/fa";




const CardProfile = () => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex h-fit w-fit items-center justify-between overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-r from-black to-gray-950 px-6 sm:px-8 py-8 sm:py-12 shadow-2xl max-w-[95%] sm:max-w-[850px]"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,182,255,.1), transparent 40%)`,
        }}
      />
      <div className="flex flex-col gap-4 bg-transparent">
        <div className="flex flex-col sm:flex-row gap-4 bg-transparent items-center sm:items-start justify-start">
          <Image
            src={jona}
            alt="Jonathan Guidi"
            width={80}
            height={80}
            className="rounded-2xl object-cover sm:w-[100px] sm:h-[100px]"
          />
          <h1 className="text-white bg-transparent text-3xl sm:text-4xl tracking-tighter font-medium text-left leading-[120%] sm:leading-[115%] z-10 flex flex-col items-center sm:items-start">
            Jonathan Guidi.
            <div className="text-white text-sm sm:text-xs font-normal flex items-center justify-start bg-transparent">
              <span className="relative flex h-2 w-2 mr-2 bg-transparent">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="opacity-40 text-base sm:text-lg bg-transparent text-left tracking-normal">
                Disponible para proyectos.
              </span>
            </div>
          </h1>
        </div>

        <p className="text-[#a1a1a4] bg-transparent text-sm sm:text-base opacity-80 max-w-[800px] text-left z-10">
          Con más de 3 años de experiencia en el mundo IT, mi enfoque combina
          una sólida base técnica como desarrollador de software, con distintas
          habilidades estratégicas en la gestión de equipos, automatización de
          procesos y diseño de productos.
          <br></br>
          Capaz de traducir necesidades del mercado en soluciones tecnológicas
          sólidas y eficientes adaptables a cada tipo de empresa, enfocado
          siempre en maximizar el valor del producto/servicio.
          <br></br>
          Competencia en el uso y personalización de herramientas tecnológicas,
          desde programación en código hasta plataformas Low Code y No Code.
        </p>
        <div className="flex flex-wrap gap-4 bg-transparent pt-4 max-w-full sm:max-w-[640px]">
          <BadgeShine Icon={TbDeviceMobileShare} text="Diseño UX/UI & Product Design" />
          <BadgeShine Icon={MdOutlineWeb} iconClassName="text-lg mr-2 bg-transparent text-[#0A83E8]" text="Desarrollo Web FullStack" />
          <BadgeShine Icon={FaRegChartBar} text="Growth & Product Marketing" />
          <BadgeShine text="IA & Automatización de Procesos" />
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
