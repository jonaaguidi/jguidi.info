import React from "react";
import { LuNetwork } from "react-icons/lu";

const BadgeShine = ({
  text = "Default Text", // Texto que se mostrará en el badge
  Icon = LuNetwork, // Icono por defecto, se puede reemplazar
  iconClassName = "bg-transparent mr-1.5 text-[#0A83E8]", // Clases personalizadas para el icono
  badgeClassName = "inline-flex opacity-100 h-fit animate-background-shine items-center justify-center rounded-full border border-gray-800 bg-[linear-gradient(110deg,#000,45%,#4D4B4B,55%,#000)] bg-[length:250%_100%] px-3 py-1.5 text-sm font-normal tracking-normal text-gray-300 z-50", // Clases personalizadas para el badge
}) => {
  return (
    <span className={badgeClassName}>
      <Icon className={iconClassName} />
      {text}
    </span>
  );
};

export default BadgeShine;
