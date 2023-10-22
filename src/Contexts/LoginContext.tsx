import { ReactNode, createContext, useContext, useState } from "react";

interface Props {
  children: ReactNode;
}

interface LoginProps {
  isLogined: boolean;
  setIsLogined: (isLogined: boolean) => void;
}
// createContext 선언
export const ResultContext = createContext<LoginProps>({
  isLogined: false,
  setIsLogined: () => {}
});

//글로벌하게 관리할 state
export function ResultContextProvider({ children }: Props) {
  const [isLogined, setIsLogined] = useState<boolean>(false);

  const value = {
    isLogined,
    setIsLogined
  };

  return (
    <ResultContext.Provider value={value}>{children}</ResultContext.Provider>
  );
}

//다른 컴포넌트에서 context를 사용하기 위함
export const useResultContext = () => {
  return useContext(ResultContext);
};
