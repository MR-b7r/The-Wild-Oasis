"use client";

interface ErrorParams {
  error: Error;
  reset: () => void;
}
const Error: React.FC<ErrorParams> = function ({ error, reset }) {
  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="sm:text-3xl text-lg font-semibold">
        Something went wrong!
      </h1>
      <p className="sm:text-lg text-base">{error.message}</p>

      <button
        className="inline-block bg-accent-500 text-primary-800 sm:px-6 sm:py-3  px-4 py-2 sm:text-lg text-base"
        onClick={reset}
      >
        Try again
      </button>
    </main>
  );
};
export default Error;
