import React, { RefObject } from "react";
import * as S from "./elements";

interface ITableSpacingRowProps {
  ref?: RefObject<HTMLTableRowElement>;
}

export const TableSpacingRow: React.FC<ITableSpacingRowProps> = ({ ...props }) => {
  return <S.SpacingRow {...props} />;
};
