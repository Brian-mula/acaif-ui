import SideNavigation from "@/components/navigation/side-nav";
import TopNavigation from "@/components/top-nav";

export default function HomeLayout({ children }:{children: React.ReactNode}) {
  return (
    <div className="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content ">
     
      {/* top navigation */}
      <TopNavigation />
      
      {/* main content */}
      <div className="px-4 md:px-10">
        {children}
      </div>
    </div>
   {/* side navigation */}
   <SideNavigation />
  </div>
  )
}
