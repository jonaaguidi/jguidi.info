"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "../../public/jg.png";
import { VscCallOutgoing } from "react-icons/vsc";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-[99] bg-black/100 backdrop-blur-xl border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={Logo}
              width={46}
              height={46}
              alt="logo"
              className="rounded-full object-fill"
            />
            <div className="flex flex-col">
              <span className="text-xl font-normal text-white tracking-tight">
                Jonathan<span className="font-bold">Guidi.</span>
              </span>
              <div className="text-white text-xs font-normal flex items-center justify-start">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="opacity-40">Available for Projects</span>
              </div>
            </div>
          </Link>

          {/* {/* Navigation */}
          {/* <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="bg-black/20 px-4 py-2 rounded-full text-white hover:bg-black/30 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Sobre Mi
            </Link>
            <Link
              href="/resources"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Soluciones
            </Link>
            <Link
              href="/solutions"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Recursos
            </Link>
          </nav>  */}

          {/* Actions */}
          <div className="flex items-center space-x-4">
          <Link href="https://cal.com/jonathan-guidi/30min" target="blank">
            <Button
              variant="default"
              className="bg-[#0A83E8] hover:bg-[#0b1f30] text-white font-medium"
            >
              <VscCallOutgoing className="bg-transparent" />
              <span className="max-[768px]:hidden bg-transparent">Agenda una Llamada</span>
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
