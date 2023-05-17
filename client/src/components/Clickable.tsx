import React from "react";

type ClickableProps = {
  children: React.ReactNode;
  onClick: () => void;
  styles?: string;
};

function Clickable({ children, onClick, styles }: ClickableProps) {
  return (
    <div
      className={
        "px-3 py-2 select-none cursor-pointer flex items-center justify-center " +
        styles
      }
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Clickable;
