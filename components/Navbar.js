import { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import Button from "./Button";

export default function Navbar() {
  const [offCanvas, setOffCanvas] = useState(false);

  return (
    <>
      <div className="flex items-center py-10">
        <div className="w-3/12 uppercase text-white text-[24px] font-semibold tracking-widest">
          <Logo />
        </div>
        <div className="w-6/12 hidden md:block">
          <Nav dir="horizontal" scheme="light" />
        </div>
        <div className="w-3/12 text-right hidden md:block">
          <Button href="#contact" variant="border">
            Kontak
          </Button>
        </div>
        <div className="w-9/12 text-right md:hidden">
          <img
            src="./menu.svg"
            onClick={() => setOffCanvas(!offCanvas)}
            className="inline-block hover:cursor-pointer"
            alt=""
          />
        </div>
      </div>
      <div
        className={`${
          offCanvas ? "right-0" : "-right-full"
        } fixed md:hidden bg-white/95 z-10 top-0 h-full w-full transition-all`}
      >
        <img
          src="x.svg"
          className="absolute right-8 top-10 w-6 hover:cursor-pointer"
          onClick={() => setOffCanvas(!offCanvas)}
          alt=""
        />
        <Nav dir="vertical" scheme="dark" />
      </div>
    </>
  );
}
