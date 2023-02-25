import { GetStaticProps, NextPage } from "next";
import { HomePage } from "views";

const Home: NextPage = () => {
  return (
    <main>
      <HomePage />
    </main>
  );
};

export default Home;
