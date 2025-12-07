import "./AppLayout.css";

import type { PropsWithChildren } from "react";

export function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className="base-layout">
      <div className="header-layout">
        <a>Homepage</a>
        <a>About</a>
      </div>

      <div className="content-layout">{children}</div>
    </div>
  );
}
