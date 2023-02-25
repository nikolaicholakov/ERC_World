import React, { RefObject } from "react";
import * as S from "./elements";

interface TableSpacingRowProps {
  ref?: RefObject<HTMLTableRowElement>;
}

export const TableSpacingRow: React.FC<TableSpacingRowProps> = ({ ...props }) => {
  return <S.SpacingRow {...props} />;
};
