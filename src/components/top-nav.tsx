import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const imageLink = "https://static.wixstatic.com/media/b30d1d_e09b313fe0b24aa9b92fd3de8e56d21a~mv2.png/v1/fill/w_204,h_136,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ACAIF%20Foundation%20Logo(1).png"

export default function TopNavigation() {
  return (
    <div className="navbar bg-primarycustome py-6">
        
      <div className="flex-none">
        <label htmlFor="my-drawer-2" className="md:hidden">
          <Menu size={32} className="text-white" />
        </label>
      </div>
      <div className="flex-1">
        <Link href="/" className="">
        <Image src={imageLink} alt="logo" width={100} height={0} className="h-32 w-44" />
        </Link>
      </div>
    </div>
  );
}
