import React, { RefObject } from "react";
import * as S from "./elements";

interface TableBodyProps {
  ref?: RefObject<HTMLTableSectionElement>;
}

export const TableBody: React.FC<TableBodyProps> = ({ ...props }) => {
  return <S.TableBody {...props} />;
};
