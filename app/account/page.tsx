import { auth } from "../_lib/auth";

export const metadata = {
  title: "Account",
};
export default async function Page() {
  const session = await auth();
  const firstName = session.user.name.split(" ").at(0);
  return <h1>Welcome, {firstName}</h1>;
}
