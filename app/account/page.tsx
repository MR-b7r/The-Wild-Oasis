import { auth } from "../_lib/auth";

export const metadata = {
  title: "Account",
};
export default async function Page() {
  const session = await auth();
  const firstName = session.user.name.split(" ").at(0);
  return (
    <h1 className="font-semibold sm:text-2xl text-accent-400 mb-7">
      Welcome, {firstName}
    </h1>
  );
}
