import { NftTypes, ProfileHero } from "sections";

export interface ProfilePageProps {}

export const ProfilePage: React.FC<ProfilePageProps> = ({ ...props }) => {
  return (
    <>
      <ProfileHero />
      <NftTypes />
    </>
  );
};
