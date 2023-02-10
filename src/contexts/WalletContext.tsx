import { createContext, useState, useEffect, useCallback } from "react";

interface IWalletContextProps {
  walletConnected?: boolean;
  setWalletConnected?: any;
}

export const WalletContext = createContext<IWalletContextProps>({});

export const WalletContextProvider = ({ children }) => {
  const [walletConnected, setWalletConnected] = useState<boolean>(false);

  return (
    <WalletContext.Provider value={{ walletConnected, setWalletConnected }}>
      {children}
    </WalletContext.Provider>
  );
};
