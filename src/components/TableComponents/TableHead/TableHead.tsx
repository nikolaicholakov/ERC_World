import React, { RefObject } from "react";
import * as S from "./elements";

interface ITableHeadProps {
  ref?: RefObject<HTMLTableSectionElement>;
}

export const TableHead: React.FC<ITableHeadProps> = ({ ...props }) => {
  return <S.TableHead {...props} />;
};
