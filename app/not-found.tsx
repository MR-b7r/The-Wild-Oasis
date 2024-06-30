import Link from "next/link";

function NotFound() {
  return (
    <main className="text-center space-y-6 mt-4">
      <h1 className="sm:text-3xl text-lg font-semibold">
        This page could not be found :(
      </h1>
      <Link
        href="/"
        className="inline-block bg-accent-500 text-primary-800 sm:px-6 sm:py-3  px-4 py-2 sm:text-lg text-base"
      >
        Go back home
      </Link>
    </main>
  );
}

export default NotFound;
