import { boolean, number, object, string } from "yup";

export const fetchCollectionsShema = object({
  startIndex: number().required(),
  lastIndex: number().required()
});
