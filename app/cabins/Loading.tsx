import Spinner from "@/app/_components/Spinner";

export default async function Loading() {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
    </div>
  );
}
