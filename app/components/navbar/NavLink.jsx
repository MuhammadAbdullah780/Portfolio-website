"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function NavLink({ children, href, className, onClick }) {
  const pathname = usePathname();
  return (
    <Link
      href={href || ""}
      onClick={onClick}
      className={`${
        href === pathname ? "sm:text-fg-primary" : ""
      } link ${className} `}
    >
      {children}
    </Link>
  );
}

export default NavLink;
