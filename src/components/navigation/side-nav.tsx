import { appLinks } from "@/utils/utils";
import Link from "next/link";

export default function SideNavigation() {
  return (
    <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      {/* Sidebar content here */}
      {/* <li><a>Sidebar Item 1</a></li> */}
      {
        appLinks.map(({ title, url, icon: Icon }) => (
            <li key={title}>
                <Link href={url} className="flex space-x-2">
                    <Icon />
                    <span>{title}</span>
                </Link>
            </li>
        ))
      }
    </ul>
  </div>
  )
}
