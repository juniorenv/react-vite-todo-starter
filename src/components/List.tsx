import type { PropsWithChildren } from "react";

export function List({ children }: PropsWithChildren) {
  return <ol>{children}</ol>;
}
