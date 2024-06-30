"use client";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";
import { useReservation } from "../_context/ReservationContext";

function ReservationReminder() {
  const { range, resetRange } = useReservation();

  if (!range.from || !range.to) return null;

  return (
    <div className="w-full xs:w-fit fixed bottom-6 left-1/2 -translate-x-1/2 py-2 px-4 rounded-sm bg-primary-500 text-slate-200 text-base font-normal shadow-lg shadow-slate-800 flex gap-4 items-center justify-center">
      <p>
        Don&apos;t forget to reserve your dates <br /> from{" "}
        <span className="font-semibold text-slate-100">
          {format(new Date(range.from), "MMM dd yyyy")}
        </span>{" "}
        to{" "}
        <span className="font-semibold text-slate-100">
          {format(new Date(range.to), "MMM dd yyyy")}
        </span>
      </p>
      <button
        className="rounded-full p-1 hover:bg-accent-600 transition-all "
        onClick={resetRange}
      >
        <XMarkIcon className="h-4 w-4" />
      </button>
    </div>
  );
}

export default ReservationReminder;
