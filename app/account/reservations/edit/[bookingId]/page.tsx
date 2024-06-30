import SubmitButton from "@/app/_components/SubmitButton";
import { updateBooking } from "@/app/_lib/actions";
import { getBooking, getCabin } from "@/app/_lib/data-service";

interface Params {
  bookingId: string;
  [key: string]: unknown;
}
export default async function Page({ params }: { params: Params }) {
  // CHANGE
  const { bookingId } = params;
  const { numGuests, observations, cabinID } = await getBooking(bookingId);
  const { maxCapacity } = await getCabin(cabinID);
  return (
    <div>
      <h2 className="font-semibold sm:text-2xl text-accent-400 mb-7">
        Edit Reservation #{bookingId}
      </h2>

      <form
        action={updateBooking}
        className="bg-primary-900 md:py-8 py-6 md:px-10 sm:px-8 px-6 text-lg flex md:gap-6 gap-4 flex-col"
      >
        <input type="hidden" value={bookingId} name="bookingId" />
        <div className="space-y-2 md:text-lg text-base">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            defaultValue={numGuests}
            className="md:px-5 md:py-3 px-3 py-2 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2 md:text-lg text-base">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            defaultValue={observations}
            className="md:px-5 md:py-3 px-3 py-2 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          />
        </div>

        <div className="flex justify-end items-center md:gap-6 gap-4 md:text-lg text-base">
          <SubmitButton>Update Reservation </SubmitButton>
        </div>
      </form>
    </div>
  );
}
