"use client";

import { useFormStatus } from "react-dom";
import SpinnerMini from "./SpinnerMini";

export default function SubmitButton({ children }) {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-accent-500 md:px-8 md:py-4 px-5 py-2 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      disabled={pending}
    >
      {pending ? <SpinnerMini /> : children}
    </button>
  );
}
