import ReservationCard from "@/app/_components/ReservationCard";
import { IReservationBooking } from "@/app/_TS/types";

import { auth } from "@/app/_lib/auth";
import { getBookings } from "@/app/_lib/data-service";
import React from "react";
import ReservationList from "@/app/_components/ReservationList";

export const metadata = {
  title: "Reservations",
};

export default async function page() {
  const session = await auth();
  const bookings = await getBookings(session.user.guestID);

  return (
    <div>
      <h2 className="font-semibold sm:text-2xl text-accent-400 mb-7">
        Your reservations
      </h2>

      {bookings.length === 0 ? (
        <p className="text-lg">
          You have no reservations yet. Check out our{" "}
          <a className="underline text-accent-500" href="/cabins">
            luxury cabins &rarr;
          </a>
        </p>
      ) : (
        <ReservationList bookings={bookings} />
      )}
    </div>
  );
}
