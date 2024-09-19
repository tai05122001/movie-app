import React, { useState, useContext, createContext, ReactNode } from "react";


interface AppContextProps {
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
}
const initState: AppContextProps = {
  state: 0,
  setState: () => {},
};
const AppContext = createContext<AppContextProps>(initState);
const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<number>(initState.state);
  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};
export { AppProvider, AppContext };
