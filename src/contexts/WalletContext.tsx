import { createContext, useState, useEffect, useCallback } from "react";

interface IWalletContextProps {
  walletConnected?: string;
  setWalletConnected?: any;
}

export const WalletContext = createContext<IWalletContextProps>({});

export const WalletContextProvider = ({ children }) => {
  const [walletConnected, setWalletConnected] = useState<string>("");

  return (
    <WalletContext.Provider value={{ walletConnected, setWalletConnected }}>
      {children}
    </WalletContext.Provider>
  );
};
