"use client";

import React, { useState } from "react";
import { IGuest } from "../_TS/types";
import { updateGuest } from "../_lib/actions";
import { useFormStatus } from "react-dom";
import SpinnerMini from "./SpinnerMini";
import SubmitButton from "./SubmitButton";
import Image from "next/image";

export default function UpdateProfileForm({
  children,
  guest,
}: {
  children: React.ReactNode;
  guest: IGuest;
}) {
  const [count, setCount] = useState();

  const {
    id,
    created_at,
    fullName,
    email,
    nationalID,
    nationality,
    countryFlag,
  } = guest;
  return (
    <form
      className="bg-primary-900 md:py-8 py-6 md:px-10 sm:px-8 px-6 text-lg flex md:gap-6 gap-4 flex-col"
      action={updateGuest}
    >
      <div className="space-y-2 md:text-lg text-base">
        <label>Full name</label>
        <input
          disabled
          defaultValue={fullName}
          name="fullName"
          className="md:px-5 md:py-3 px-3 py-2 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2 md:text-lg text-base">
        <label>Email address</label>
        <input
          disabled
          defaultValue={email}
          name="email"
          className="md:px-5 md:py-3 px-3 py-2 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2 md:text-lg text-base">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">Where are you from?</label>
          <Image
            src={countryFlag}
            alt="Country flag"
            className="md:h-5 h-3 rounded-sm"
            width={12}
            height={12}
          />
        </div>

        {children}
      </div>

      <div className="space-y-2 md:text-lg text-base">
        <label htmlFor="nationalID">National ID number</label>
        <input
          name="nationalID"
          defaultValue={nationalID}
          className="md:px-5 md:py-3 px-3 py-2 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </div>

      <div className="flex justify-end items-center md:gap-6 gap-4 md:text-lg text-base">
        <SubmitButton>Update Profile</SubmitButton>
      </div>
    </form>
  );
}
