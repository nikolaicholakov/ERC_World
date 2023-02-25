import React, { RefObject } from "react";
import * as S from "./elements";

interface TableRowProps {
  ref?: RefObject<HTMLTableRowElement>;
}

export const TableRow: React.FC<TableRowProps> = ({ ...props }) => {
  return <S.TableRow {...props} />;
};
