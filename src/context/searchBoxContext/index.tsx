'use client'

import { createContext, useContext, useState } from "react";

interface SearchBoxContextType {
  iseSearchBoxOpen: boolean;
  toggleSearchBox: () => void;
}

interface SearchBoxProviderType {
  children: React.ReactNode;
}

const SearchBoxContext = createContext<SearchBoxContextType | undefined>(undefined);

const SearchBoxContextProvider: React.FC<SearchBoxProviderType> = ({ children }) => {
  const [iseSearchBoxOpen, setIsSearchBoxOpen] = useState<boolean>(false);

  const toggleSearchBox = () => {
    setIsSearchBoxOpen((prev) => (!prev));
  };
  return (
    <SearchBoxContext.Provider value={{ iseSearchBoxOpen, toggleSearchBox }}>
      {children}
    </SearchBoxContext.Provider>
  );
};

const useSearchBoxContext = () => {
  const context = useContext(SearchBoxContext);
  if (!context) {
    throw new Error('useSearchBox must be used within an SearchBoxProvider');
  }
  return context;
};

export { SearchBoxContextProvider, useSearchBoxContext };