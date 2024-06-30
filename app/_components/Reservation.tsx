import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import {
  getBookedDatesByCabinId,
  getCabin,
  getSettings,
} from "@/app/_lib/data-service";
import { auth } from "../_lib/auth";

import { ICabin } from "@/app/_TS/types";
import LoginMessage from "./LoginMessage";

export default async function Reservation({ cabin }: { cabin: ICabin }) {
  const session = await auth();

  const [settings, bookedDate] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  return (
    <div className="grid md:grid-cols-2  md:grid-rows-1 grid-rows-2 border border-e-primary-800 min-h-[400px] md:gap-0 gap-5 ">
      <DateSelector settings={settings} bookedDate={bookedDate} cabin={cabin} />
      {session?.user ? (
        <ReservationForm cabin={cabin} user={session.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}
