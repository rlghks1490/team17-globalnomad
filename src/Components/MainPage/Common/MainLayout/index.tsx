import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <main className="mx-auto my-0 min-h-[calc(100vh-16rem)] max-w-[75rem] px-0 py-14 ">
        {children}
      </main>
    </>
  );
};

export default MainLayout;
