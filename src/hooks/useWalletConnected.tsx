import { WalletContext } from "contexts";
import { useCallback, useContext, useEffect, useState } from "react";

export const useWalletConnected = () => {
  const { setWalletConnected, walletConnected } = useContext(WalletContext);

  return { setWalletConnected, walletConnected };
};
