import { NextPage } from "next";
import { NftTypes, ProfileHero } from "sections";

const Profile: NextPage = () => {
  return (
    <main>
      <ProfileHero />
      <NftTypes />
    </main>
  );
};

export default Profile;
