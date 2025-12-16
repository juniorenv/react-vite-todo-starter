import { NavLink } from "react-router";

import type { PropsWithChildren } from "react";

export function AppLayout({ children }: PropsWithChildren) {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `py-2 px-3 rounded-lg transition-colors ${
      isActive
        ? "bg-white text-black"
        : "text-white hover:bg-white hover:text-black"
    }`;

  return (
    <div className="h-full flex flex-col bg-[#f2f2f2]">
      <div className="flex justify-center p-4 gap-2 bg-green-500">
        <NavLink className={navLinkClasses} to="/">
          Homepage
        </NavLink>
        <NavLink className={navLinkClasses} to="/about">
          About
        </NavLink>
      </div>

      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
}
