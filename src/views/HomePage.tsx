import { Explore, HomeHero, RecentlyListedCollections, TrendingCollections } from "sections";

export interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = ({ ...props }) => {
  return (
    <>
      <HomeHero />
      <TrendingCollections />
      <RecentlyListedCollections />
      <Explore />
    </>
  );
};
