import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { signOutAction } from "../_lib/actions";

function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className="lg:py-3 lg:px-5 md:px-2 py-2 px-3 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-2 md:gap-3 font-semibold text-primary-200 w-full rounded-l-full">
        <ArrowRightOnRectangleIcon className="h-5 w-5 text-primary-600" />
        <span>Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
