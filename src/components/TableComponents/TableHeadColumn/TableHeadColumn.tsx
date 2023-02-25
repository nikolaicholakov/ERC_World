import React, { RefObject } from "react";
import * as S from "./elements";

interface TableHeadColumnProps {
  ref?: RefObject<any>;
}

export const TableHeadColumn: React.FC<TableHeadColumnProps> = ({ ...props }) => {
  return <S.TableHeadColumn {...props} />;
};
