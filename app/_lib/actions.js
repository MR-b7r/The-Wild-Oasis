"use server";

import { redirect } from "next/navigation";
import { auth, signIn, signOut } from "./auth";
import { getBookings } from "./data-service";
import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function createBooking(bookingData, formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const newBooking = {
    ...bookingData,
    guestID: session.user.guestID,
    numGuests: formData.get("numGuests"),
    observations: formData.get("observations").slice(0, 1000),
    extraPrice: 0,
    totalPrice: bookingData.cabinPrice,
    isPaid: false,
    hasBreakfast: false,
    status: "unconfirmed",
  };

  const { error } = await supabase
    .from("bookings")
    .insert([newBooking])
    // So that the newly created object gets returned!
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be created");
  }
  revalidatePath(`/cabins/${bookingData.cabinID}`);
  redirect("/cabins/thank");
}

export async function deleteBooking(bookingID) {
  // Check if Optimistic works correctly
  // await new Promise((res) => setTimeout(res, 2000));
  // throw new Error();

  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  // Don't allow User to delete bookings that's don't in his own reservations
  const guestBookings = await getBookings(session.user.guestID);
  const bookingIDs = guestBookings.map((booking) => booking.id);
  if (!bookingIDs.includes(bookingID))
    throw new Error("Booking could not be deleted");

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingID);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }
  revalidatePath("/account/reservations");
}

export async function updateGuest(formData) {
  const session = await auth();
  const { guestID } = session.user;
  if (!session) throw new Error("You must be logged in");

  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");
  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Please provide a valid National ID");

  const updateData = { nationality, nationalID, countryFlag };
  const { data, error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", guestID);

  if (error) {
    throw new Error("Guest could not be updated");
  }
  revalidatePath("/account/profile");
}

export async function updateBooking(formData) {
  const bookingId = Number(formData.get("bookingId"));

  // 1.) Authentication
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  // 2.) Authorization
  // Don't allow User to delete bookings that's don't in his own reservations
  const guestBookings = await getBookings(session.user.guestID);
  const bookingIDs = guestBookings.map((booking) => booking.id);

  if (!bookingIDs.includes(bookingId))
    throw new Error("Booking could not be deleted");

  // 3.) Update booking Data
  const updateData = {
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
  };
  const { data, error } = await supabase
    .from("bookings")
    .update(updateData)
    .eq("id", bookingId)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }
  revalidatePath("/account/reservations", "layout");

  redirect("/account/reservations");
}
