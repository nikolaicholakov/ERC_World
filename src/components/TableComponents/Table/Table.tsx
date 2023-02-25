import React, { RefObject } from "react";
import * as S from "./elements";

interface TableProps {
  ref?: RefObject<HTMLTableElement>;
}

export const Table: React.FC<TableProps> = ({ ...props }) => {
  return <S.Table {...props} />;
};
