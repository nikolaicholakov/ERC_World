import styled from "styled-components";
import _Image from "next/image";
import { Section } from "components";
import { CreateNftForm } from "collections";

export const Image = styled(_Image)``;

export const SectionContainer = styled(Section)``;

export const EditProfileContainer = styled("div")`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
`;

export const Form = styled(CreateNftForm)`
  background-color: ${({ theme }) => theme.colors.white};
`;
