import { CreateNftHero } from "sections";

export interface CreateNftPageProps {}

export const CreateNftPage: React.FC<CreateNftPageProps> = ({ ...props }) => {
  return (
    <>
      <CreateNftHero />
    </>
  );
};
