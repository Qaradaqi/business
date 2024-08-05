'use client'

import { createContext, useContext, useState } from "react";

interface SidebarContactType {
  isSidebarOpen: boolean;
  toggleSidebarContact: () => void;
}

const SidebarContactContext = createContext<SidebarContactType | undefined>(undefined);

const SidebarContactProvider = ({ children }: { children: React.ReactNode; }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebarContact = () => {
    setIsSidebarOpen((prev) => (!prev));
  };
  return (
    <SidebarContactContext.Provider value={{ isSidebarOpen, toggleSidebarContact }}>
      {children}
    </SidebarContactContext.Provider>
  );
};

const useSidebarContact = ():SidebarContactType=>{
  const context = useContext(SidebarContactContext)
  if (!context) {
    throw new Error('useSidebarContact must be used within an SidebarContactProvider');
  }
  return context;
}

export {SidebarContactProvider, useSidebarContact}