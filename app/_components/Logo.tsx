import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 z-10">
      <Image
        src={logo}
        // height="60"
        // width="60"
        className="md:w-[60px] md:h-[60px] w-[40px] h-[40px]"
        // quality={90}
        alt="The Wild Oasis logo"
      />
      <span className="md:text-xl text-lg font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
