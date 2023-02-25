import { WalletContext } from "contexts";
import { useContext } from "react";

export const useWalletConnected = () => {
  const { setWalletConnected, walletConnected } = useContext(WalletContext);

  return { setWalletConnected, walletConnected };
};
