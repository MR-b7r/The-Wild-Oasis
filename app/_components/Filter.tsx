"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ReactNode } from "react";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  let activeFilter = searchParams.get("capacity") ?? "all";
  function handleFilter(filter: string) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="border border-primary-800 flex xxs:flex-nowrap flex-wrap">
      <Button
        filter="all"
        handleFitler={handleFilter}
        activeFilter={activeFilter}
      >
        All Guests
      </Button>
      <Button
        filter="small"
        handleFitler={handleFilter}
        activeFilter={activeFilter}
      >
        1&mdash;3 Guests
      </Button>
      <Button
        filter="medium"
        handleFitler={handleFilter}
        activeFilter={activeFilter}
      >
        4&mdash;7 Guests
      </Button>

      <Button
        filter="large"
        handleFitler={handleFilter}
        activeFilter={activeFilter}
      >
        8&mdash;12 Guests
      </Button>
    </div>
  );
}

interface ButtonProps {
  filter: string;
  handleFitler: (filter: string) => void;
  activeFilter: string;
  children: ReactNode;
}
function Button({ filter, handleFitler, activeFilter, children }: ButtonProps) {
  return (
    <button
      className={`xs:px-5 px-3 xs:text-lg text-base py-2 hover:bg-primary-700 ${
        filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
      }`}
      onClick={() => handleFitler(filter)}
    >
      {children}
    </button>
  );
}
export default Filter;
