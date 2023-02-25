import styled from "styled-components";
import _Image from "next/image";
import { Section } from "components";
import { EditProfileForm as _EditProfileForm } from "collections";

export const Image = styled(_Image)``;

export const SectionContainer = styled(Section)``;

export const EditProfileContainer = styled("div")`
  display: flex;
  margin-top: 115px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

export const EditProfileForm = styled(_EditProfileForm)`
  background-color: ${({ theme }) => theme.colors.white};
`;
