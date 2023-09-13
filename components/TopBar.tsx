"use client";
import {
  OrganizationSwitcher,
  SignedIn,
  SignOutButton,
  useAuth,
} from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";
import ProfilePic from "./profilePic.png";
import Navlogo from "./navlogo.png";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  {
    imgURL: "/assets/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/search.svg",
    route: "/search",
    label: "Search",
  },
  {
    imgURL: "/assets/heart.svg",
    route: "/feed",
    label: "Feed",
  },
  {
    imgURL: "/assets/user.svg",
    route: "/profile",
    label: "Profile",
  },
];

export default function TopBar() {
  const router = useRouter();
  const pathname = usePathname();

  const { userId } = useAuth();

  return (
    <nav className="fixed top-0 z-30 flex w-full items-center justify-between text-black bg-gray-50 bg-opacity-10 shadow-sm bg-clip-padding backdrop-blur-sm px-6 py-6">
      <Link href="/" className="flex items-center gap-4">
        <Image src={Navlogo} alt="logo" width={28} height={28} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">
          Open Source Catalogue
        </p>
      </Link>
      <div className="flex flex-row items-center text-lg gap-6">
        {navLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          if (link.route === "/profile") link.route = `${link.route}/${userId}`;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={` ${isActive && "bg-primary-500 "}`}
            >
              <p className="text-light-1 max-lg:hidden ">{link.label}</p>
            </Link>
          );
        })}
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
}
