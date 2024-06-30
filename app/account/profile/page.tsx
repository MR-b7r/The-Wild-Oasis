import React from "react";
import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import SelectCountry from "@/app/_components/SelectCountry";
import { auth } from "@/app/_lib/auth";
import { getGuest } from "@/app/_lib/data-service";

export const metadata = {
  title: "Update Profile",
};

export default async function page() {
  const session = await auth();
  const guest = await getGuest(session.user.email);
  return (
    <div>
      <h2 className="font-semibold sm:text-2xl text-accent-400 mb-4">
        Update your guest profile
      </h2>

      <p className="sm:text-lg text-base mb-8 text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <UpdateProfileForm guest={guest}>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="md:px-5 md:py-3  px-3 py-2 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          defaultCountry={guest.nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}
