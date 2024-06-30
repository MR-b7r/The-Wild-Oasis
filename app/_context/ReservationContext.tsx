"use client";

import { createContext, useContext, useState } from "react";

const ReservationContext = createContext(null);
interface Range {
  from: string | undefined;
  to: string | undefined;
}
const initialState: Range = { from: undefined, to: undefined };

function ReservationProvider({ children }: { children: React.ReactNode }) {
  const [range, setRange] = useState(initialState);

  const resetRange = () => setRange(initialState);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (!context)
    return new Error("Reservation context has been used outside provider");
  return context;
}

export { ReservationProvider, useReservation };
