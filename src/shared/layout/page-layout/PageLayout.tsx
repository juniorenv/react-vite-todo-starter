import type React from "react";

interface IPageLayoutProps {
  children: React.ReactNode;
  title: string;
}

export function PageLayout({ children, title }: IPageLayoutProps) {
  return (
    <div className="flex justify-center mt-4 px-4">
      <div className="w-full max-w-3xl bg-white p-4 rounded-lg shadow-md">
        <div>
          <h1 className="p-2 text-2xl font-semibold">{title}</h1>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
}
