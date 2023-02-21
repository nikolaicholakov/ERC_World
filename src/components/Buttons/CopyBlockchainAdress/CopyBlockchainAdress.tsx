import * as S from "./elements";
import { RefObject, useState } from "react";
import type { HTMLButtonProps } from "types";
import { useAccount } from "wagmi";

export interface ICopyBlockchainAdressProps extends HTMLButtonProps {
  ref?: RefObject<HTMLButtonElement>;
}

export const CopyBlockchainAdress: React.FC<ICopyBlockchainAdressProps> = ({ ...props }) => {
  const { address } = useAccount();

  const shortenAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address || "");
    alert("Copied to clipboard " + address);
  };
  return (
    <S.Button onClick={copyToClipboard} {...props}>
      {shortenAddress(address || "")}
      <S.Icon content='\f0c5' font='--fa-font-solid' />
    </S.Button>
  );
};
