import type { PropsWithChildren } from "react";

export function List({ children }: PropsWithChildren) {
  return <ol className="flex flex-col gap-2 p-2 list-none">{children}</ol>;
}
