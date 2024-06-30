import SideNavigation from "../_components/SideNavigation";

export default function layout({ children }) {
  return (
    <div className="flex h-full gap-8">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
