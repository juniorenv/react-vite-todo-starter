import { NavLink } from "react-router";
import "./AppLayout.css";

import type { PropsWithChildren } from "react";

export function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className="base-layout">
      <div className="header-layout">
        <NavLink to="/">Homepage</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>

      <div className="content-layout">{children}</div>
    </div>
  );
}
