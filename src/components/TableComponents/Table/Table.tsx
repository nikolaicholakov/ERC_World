import React, { RefObject } from "react";
import * as S from "./elements";

interface ITableProps {
  ref?: RefObject<HTMLTableElement>;
}

export const Table: React.FC<ITableProps> = ({ ...props }) => {
  return <S.Table {...props} />;
};
