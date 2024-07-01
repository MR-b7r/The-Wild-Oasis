import Image from "next/image";
import image1 from "@/public/about-1.jpg";
import image2 from "@/public/about-2.jpg";
import { getCabins } from "../_lib/data-service";

export const metadata = {
  title: "About",
};
export const revalidate = 86400;
export default async function Page() {
  const cabins = await getCabins();

  return (
    <div className="grid grid-cols-5 md:gap-x-24 gap-x-12 md:gap-y-32 gap-y-16 md:text-lg text-base items-center">
      <div className="col-span-3">
        <h1 className="md:text-4xl text-2xl md:mb-10 mb-6 text-accent-400 font-medium">
          Welcome to The Wild Oasis
        </h1>

        <div className="md:space-y-8 space-y-4 ">
          <p className="max-md:hidden">
            Where nature&apos;s beauty and comfortable living blend seamlessly.
            Hidden away in the heart of the Italian Dolomites, this is your
            paradise away from home. But it&apos;s not just about the luxury
            cabins. It&apos;s about the experience of reconnecting with nature
            and enjoying simple pleasures with family.
          </p>
          <p>
            Our {cabins.length} luxury cabins provide a cozy base, but the real
            freedom and peace you&apos;ll find in the surrounding mountains.
            Wander through lush forests, breathe in the fresh air, and watch the
            stars twinkle above from the warmth of a campfire or your hot tub.
          </p>
          <p className="max-md:hidden">
            This is where memorable moments are made, surrounded by
            nature&apos;s splendor. It&apos;s a place to slow down, relax, and
            feel the joy of being together in a beautiful setting.
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image
          src={image1}
          alt="Family sitting around a fire pit in front of cabin"
        />
      </div>
      <div className="col-span-2 relative aspect-square">
        <Image
          src={image2}
          fill
          placeholder="blur"
          className={`object-cover`}
          alt="Family that manages The Wild Oasis"
        />
      </div>

      <div className="col-span-3">
        <h1 className="md:text-4xl text-2xl md:mb-10 mb-6 text-accent-400 font-medium">
          Managed by our family since 1962
        </h1>

        <div className="md:space-y-8 space-y-4">
          <p>
            Since 1962, The Wild Oasis has been a cherished family-run retreat.
            Started by our grandparents, this haven has been nurtured with love
            and care, passing down through our family as a testament to our
            dedication to creating a warm, welcoming environment.
          </p>
          <p className="max-md:hidden">
            Over the years, we&apos;ve maintained the essence of The Wild Oasis,
            blending the timeless beauty of the mountains with the personal
            touch only a family business can offer. Here, you&apos;re not just a
            guest; you&apos;re part of our extended family. So join us at The
            Wild Oasis soon, where tradition meets tranquility, and every visit
            is like coming home.
          </p>

          <div>
            <a
              href="/cabins"
              className="inline-block mt-4 bg-accent-500  text-primary-800 sm:text-lg text-sm font-semibold hover:bg-accent-600 transition-all lg:py-3 lg:px-5 md:px-2 py-2 px-3"
            >
              Explore our luxury cabins
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
