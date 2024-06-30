import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { ICabin } from "@/app/_TS/types";

function CabinCard({ cabin }: { cabin: ICabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="flex border-primary-800 border">
      <div className="relative flex-1 ">
        <Image
          fill
          src={image}
          alt={`Cabin ${name}`}
          className="object-cover border-r border-primary-800"
        />
      </div>

      <div className="xs:flex-grow">
        <div className="md:pt-5 md:pb-4 md:px-7 pt-3 pb-3 px-4 bg-primary-950">
          <h3 className="text-accent-500 font-semibold md:text-2xl text-lg mb-3">
            Cabin {name}
          </h3>

          <div className="flex md:gap-3 gap-2 items-center md:mb-2 mb-1">
            <UsersIcon className="md:h-5 md:w-5 h-4 w-4 text-primary-600" />
            <p className="md:text-lg text-base text-primary-200">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>

          <p className="flex md:gap-3 gap-2 justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className="md:text-3xl text-[20px] font-[350]">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-600">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="md:text-3xl text-[20px] font-[350]">
                ${regularPrice}
              </span>
            )}
            <span className="text-primary-200">/ night</span>
          </p>
        </div>

        <div className="bg-primary-950 border-t border-t-primary-800 text-right">
          <Link
            href={`/cabins/${id}`}
            className="border-l border-primary-800 md:py-4 md:px-6 py-2 px-4 inline-block hover:bg-accent-600 transition-all hover:text-primary-900"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
