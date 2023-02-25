import React, { RefObject } from "react";
import * as S from "./elements";

interface TableHeadProps {
  ref?: RefObject<HTMLTableSectionElement>;
}

export const TableHead: React.FC<TableHeadProps> = ({ ...props }) => {
  return <S.TableHead {...props} />;
};
