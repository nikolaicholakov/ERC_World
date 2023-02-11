import { GetStaticProps, NextPage } from "next";
import { Explore, HomeHero, RecentlyListedCollections, TrendingCollections } from "sections";

const Home: NextPage = () => {
  return (
    <main>
      <HomeHero />
      <TrendingCollections />
      <RecentlyListedCollections />
      <Explore />
    </main>
  );
};

export default Home;
