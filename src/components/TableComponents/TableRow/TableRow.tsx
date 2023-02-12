import React, { RefObject } from "react";
import * as S from "./elements";

interface ITableRowProps {
  ref?: RefObject<HTMLTableRowElement>;
}

export const TableRow: React.FC<ITableRowProps> = ({ ...props }) => {
  return <S.TableRow {...props} />;
};
