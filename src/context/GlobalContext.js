import { createContext } from 'react';

// Initial State with key data properties
const initialState = {
  heroes: [],
};

// Instantiate Global context
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value={'hello world'}>
      {children}
    </GlobalContext.Provider>
  );
};
