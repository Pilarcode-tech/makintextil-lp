"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#041f34]/80 backdrop-blur-md"
          : "bg-[#041f34]"
      }`}
    >
      {/* Top Bar */}
      <div className="w-full py-[10px] md:py-[16px]">
        <div className="max-w-[1680px] mx-auto px-4 md:px-[50px] flex items-center justify-between">
          <p className="font-medium text-[12px] md:text-[14px] text-white whitespace-nowrap leading-normal">
            Seg-Sex 8h às 17h
          </p>
          <p className="font-medium text-[14px] text-white whitespace-nowrap leading-normal hidden md:block">
            Manutenção e Instalações Especializadas para Indústria Têxtil
          </p>
          <div className="flex items-center gap-[7px]">
            <Image
              src="/icons/flag-brazil.svg"
              alt="Brasil"
              width={24}
              height={24}
            />
            <p className="font-medium text-[14px] text-white whitespace-nowrap leading-normal hidden sm:block">
              Atendimento em todo o Brasil
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-[1680px] mx-auto px-4 md:px-[35px]">
        <div className="w-full h-[1px] bg-white/20" />
      </div>

      {/* Navigation */}
      <div className="w-full py-[12px] md:py-[16px] lg:py-[22px]">
        <div className="max-w-[1680px] mx-auto px-4 md:px-[50px] flex items-center justify-between">
          {/* Left: Logo + Nav links */}
          <div className="flex items-center gap-[46px]">
            <a
              href="#inicio"
              onClick={(e) => handleClick(e, "#inicio")}
              className="font-eurostile text-[18px] md:text-[20px] leading-none whitespace-nowrap"
            >
              <span className="text-white">MAKIN</span>
              <span className="text-[#0037ff]">TÊXTIL</span>
            </a>
            <nav className="hidden lg:flex items-center gap-[24px] text-[16px] font-normal leading-normal">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`cursor-pointer transition-colors ${
                    link.href === "#inicio"
                      ? "text-white"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          {/* Right: WhatsApp info + CTA Button + Hamburger */}
          <div className="flex items-center gap-[16px] md:gap-[30px]">
            <div className="hidden md:flex items-center">
              <Image
                src="/icons/whatsapp.svg"
                alt="WhatsApp"
                width={24}
                height={24}
              />
              <span className="font-medium text-[14px] text-[#b0b0b0] leading-normal ml-[5px]">
                Whatsapp
              </span>
              <span className="font-medium text-[14px] text-white leading-normal ml-[8px]">
                (11) 98765-4321
              </span>
              <Image
                src="/icons/arrow-up-right.svg"
                alt=""
                width={20}
                height={20}
                className="ml-0"
              />
            </div>
            <button className="hidden sm:flex items-center gap-[10px] bg-[#0037ff] text-white px-[14px] py-[12px] md:p-[18px] rounded-[14px] text-[13px] md:text-[14px] font-medium leading-normal cursor-pointer hover:bg-[#0030dd] transition-colors whitespace-nowrap">
              Solicitar Cotação
              <Image
                src="/icons/arrow-up-right-circle.svg"
                alt=""
                width={24}
                height={24}
              />
            </button>
            {/* Hamburger — mobile only */}
            <button
              className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-[36px] h-[36px] cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span
                className={`block w-[22px] h-[2px] bg-white transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block w-[22px] h-[2px] bg-white transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-[22px] h-[2px] bg-white transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-white/70 hover:text-white text-[16px] font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={(e) => handleClick(e, "#contato")}
            className="sm:hidden flex items-center justify-center gap-[10px] bg-[#0037ff] text-white px-[14px] py-[12px] rounded-[14px] text-[14px] font-medium transition-colors mt-2"
          >
            Solicitar Cotação
            <Image
              src="/icons/arrow-up-right-circle.svg"
              alt=""
              width={24}
              height={24}
            />
          </a>
        </div>
      </div>
    </header>
  );
}
