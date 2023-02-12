import React, { RefObject } from "react";
import * as S from "./elements";

interface ITableDataProps {
  ref?: RefObject<HTMLTableCellElement>;
}

export const TableData: React.FC<ITableDataProps> = ({ ...props }) => {
  return <S.TableData {...props} />;
};
