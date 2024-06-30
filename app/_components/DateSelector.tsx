"use client";
import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "../_context/ReservationContext";

function isAlreadyBooked(range, datesArr) {
  return (
    range?.from &&
    range?.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({ settings, bookedDate, cabin }) {
  const { range, setRange, resetRange } = useReservation();
  const displayedRange = isAlreadyBooked(range, bookedDate) ? {} : range;

  const { regularPrice, discount } = cabin;
  const numNights = differenceInDays(displayedRange.to, displayedRange.from);
  const cabinPrice = numNights * (regularPrice - discount);

  // SETTINGS
  const minBookingLength = 1;
  const maxBookingLength = 23;

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        className="pt-12 place-self-center"
        onSelect={(selectedRange) => selectedRange && setRange(selectedRange)}
        selected={displayedRange}
        mode="range"
        min={minBookingLength + 1}
        max={maxBookingLength}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={1}
        disabled={(curDate) =>
          isPast(curDate) || bookedDate.some((date) => isSameDay(date, curDate))
        }
      />

      <div className="flex items-center justify-between md:px-8 sm:px-6 px-5 py-2 bg-accent-500 text-primary-800 ">
        <div className="flex items-baseline gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="md:text-2xl sm:text-xl xs:text-lg text-base">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="md:text-2xl sm:text-xl xs:text-lg text-base">
                ${regularPrice}
              </span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 md:px-3 md:py-2 px-2 py-1  md:text-2xl sm:text-xl xs:text-lg text-base">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-lg font-bold uppercase">Total</span>{" "}
                <span className="md:text-2xl sm:text-xl xs:text-lg text-base font-semibold">
                  ${cabinPrice}
                </span>
              </p>
            </>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className="border border-primary-800 md:py-2 md:px-4 px-3 py-1 text-sm font-semibold"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
