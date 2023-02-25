import React, { RefObject } from "react";
import * as S from "./elements";

interface TableDataProps {
  ref?: RefObject<HTMLTableCellElement>;
}

export const TableData: React.FC<TableDataProps> = ({ ...props }) => {
  return <S.TableData {...props} />;
};
