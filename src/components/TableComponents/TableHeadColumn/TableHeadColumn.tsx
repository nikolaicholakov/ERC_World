import React, { RefObject } from "react";
import * as S from "./elements";

interface ITableHeadColumnProps {
  ref?: RefObject<any>;
}

export const TableHeadColumn: React.FC<ITableHeadColumnProps> = ({ ...props }) => {
  return <S.TableHeadColumn {...props} />;
};
