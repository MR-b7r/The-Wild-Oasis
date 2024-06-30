import SideNavigation from "../_components/SideNavigation";

export default function layout({ children }) {
  return (
    <div className="grid lg:grid-cols-[16rem_1fr] md:grid-cols-[13rem_1fr] sm:grid-cols-[12rem_1fr] grid-cols-[10rem_1fr] h-full gap-8">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
