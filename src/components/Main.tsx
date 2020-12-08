import { ReactElement } from "react";

interface Props {
  children: ReactElement;
}

export function Main({ children }: Props) {
  return (
    <div className="h-screen w-screen flex flex-col justify-evenly items-center bg-gradient-to-br from-black via-gray-700 to-green-300 text-gray-100 text-3xl font-mono font-bold text-center">
      {children}
    </div>
  );
}
