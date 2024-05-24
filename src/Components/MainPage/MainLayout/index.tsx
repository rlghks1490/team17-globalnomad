import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      {/* header */}
      <main className="mx-auto min-h-[calc(100vh-16rem)] max-w-[120rem] px-0 py-14 sm:px-4 sm:py-14 md:px-6 md:py-14">
        {children}
      </main>
      {/* Footer */}
    </>
  );
};

export default MainLayout;
