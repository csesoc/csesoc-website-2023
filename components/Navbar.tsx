import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <Link href="#landing">
        <Image src="/assets/csesoc_logo.svg" alt="CSESoc Logo" width={200} height={200} draggable={false} />
        <p className="mt-3 text-xs">C:\INTERNAL STRUCTURE\HOME</p>
      </Link>
      <div>
        <div className="md:flex xl:gap-36 lg:gap-20 md:gap-10 text-right font-bold hidden">
          <Link href="#about">
            <p className="text-[0.6rem] text-[#C4C5C8]">01</p>
            <div>{"//"} about us</div>
          </Link>
          <Link href="#events">
            <p className="text-[0.6rem] text-[#C4C5C8]">02</p>
            <div>{"//"} events</div>
          </Link>
          <Link href="#resources">
            <p className="text-[0.6rem] text-[#C4C5C8]">03</p>
            <div>{"//"} resources</div>
          </Link>
          <Link href="#sponsors">
            <p className="text-[0.6rem] text-[#C4C5C8]">04</p>
            <div>{"//"} sponsors</div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;