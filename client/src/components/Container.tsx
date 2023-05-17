import { ReactNode } from "react";

type AppProp = {
  children: ReactNode;
  styles?: string;
};

function Container({ children, styles }: AppProp) {
  return (
    <div className={`flex flex-col px-5 py-10 mt-5  w-full ${styles}`}>
      {children}
    </div>
  );
}

export default Container;
