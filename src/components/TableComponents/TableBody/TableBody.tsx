import React, { RefObject } from "react";
import * as S from "./elements";

interface ITableBodyProps {
  ref?: RefObject<HTMLTableSectionElement>;
}

export const TableBody: React.FC<ITableBodyProps> = ({ ...props }) => {
  return <S.TableBody {...props} />;
};
