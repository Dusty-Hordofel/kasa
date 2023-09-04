import { useContext } from "react";
import Banner from "../../components/banner/Banner";
import Gallery from "../../components/gallery/Gallery";
import { DataAvailabilityContext } from "../../components/DataAvailabilityContext";

const Home = () => {
  const { homesData } = useContext(DataAvailabilityContext);
  return (
    <>
      <Banner />
      <Gallery data={homesData} />
    </>
  );
};

export default Home;
