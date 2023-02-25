import { EditProfile } from "sections";

export interface EditProfileProps {}

export const EditProfilePage: React.FC<EditProfileProps> = ({ ...props }) => {
  return (
    <>
      <EditProfile />
    </>
  );
};
