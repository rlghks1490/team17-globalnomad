import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <main className="mx-auto my-0 min-h-[calc(100vh-10rem)] max-w-[75rem] px-0 pb-[10rem] tablet:px-[1.5rem] mobile:px-[1rem]">
        {children}
      </main>
    </>
  );
};

export default MainLayout;
