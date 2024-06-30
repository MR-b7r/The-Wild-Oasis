import Image from "next/image";
import background from "@/public/bg.png";
import Link from "next/link";

export default function Page() {
  return (
    <main className="mt-24">
      <Image
        src={background}
        fill
        placeholder="blur"
        className={`object-cover object-top`}
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center">
        <h1 className="md:text-8xl sm:text-6xl text-5xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to oasis.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 md:px-8 md:py-6 px-6 py-4 text-primary-800 md:text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore Cabins
        </Link>
      </div>
    </main>
  );
}
