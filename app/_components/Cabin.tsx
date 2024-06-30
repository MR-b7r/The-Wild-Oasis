import React from "react";
import TextExpander from "@/app/_components/TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { ICabin } from "@/app/_TS/types";

export default function Cabin({ cabin }: { cabin: ICabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;
  return (
    <div className="grid md:grid-cols-[3fr_4fr] md:grid-rows-1 grid-rows-[1fr_2fr] md:gap-20 sm:gap-12 gap-8 border border-primary-800 py-3 md:px-10 px-7 md:mb-24 sm:mb-20 mb-16">
      <div className="relative md:scale-[1.15] md:-translate-x-3">
        <Image
          src={image || ""}
          alt={`Cabin ${name}`}
          fill
          className="object-cover "
        />
      </div>

      <div>
        <h3 className="text-accent-100 font-black md:text-7xl text-5xl  md:mb-5  mb-3 md:translate-x-[-254px] bg-primary-950 md:p-6 md:pb-1  md:w-[150%]">
          Cabin {name}
        </h3>

        <p className="text-lg text-primary-300 md:mb-10 mb-7">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="flex flex-col md:gap-4 gap-3 md:mb-7 mb-5">
          <li className="flex md:gap-3 gap-2 items-center">
            <UsersIcon className="md:h-5 md:w-5 h-4 w-4 text-primary-600" />
            <span className="md:text-lg text-base">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <MapPinIcon className="md:h-5 md:w-5 h-4 w-4 text-primary-600" />
            <span className="md:text-lg text-base">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <EyeSlashIcon className="md:h-5 md:w-5 h-4 w-4 text-primary-600" />
            <span className="md:text-lg text-base">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
