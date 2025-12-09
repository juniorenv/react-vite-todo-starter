import ListStyles from "./List.module.css";
import type { PropsWithChildren } from "react";

export function List({ children }: PropsWithChildren) {
  return <ol className={ListStyles.List}>{children}</ol>;
}
