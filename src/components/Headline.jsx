import React from "react";
import CardProfile from "./ui/cardProfile";
import Link from "next/link";
import { VscCallOutgoing } from "react-icons/vsc";
import { Button } from "./ui/button";

const Headline = () => {
  return (
    <div className="relative w-full h-fit px-6 sm:px-10 md:px-20 lg:px-[10rem] flex flex-col items-center justify-center gap-10 sm:gap-14 md:gap-20 z-10 pt-16 sm:pt-20 pb-20 sm:pb-40 flex-wrap">
      <CardProfile />
      <div className="flex items-center justify-center z-10">
        <Link href="https://cal.com/jonathan-guidi/30min" target="blank">
          <Button
            variant="default"
            className="bg-[#0A83E8] hover:bg-[#0b1f30] text-white text-sm sm:text-lg w-fit h-fit font-medium px-4 sm:px-6 py-2 sm:py-3"
          >
            <VscCallOutgoing className="bg-transparent text-lg sm:text-xl" />
            <span className="bg-transparent">Agenda una Llamada</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Headline;

