import { SalesHero } from "sections";

export interface SalesPageProps {}

export const SalesPage: React.FC<SalesPageProps> = ({ ...props }) => {
  return (
    <>
      <SalesHero />
    </>
  );
};
