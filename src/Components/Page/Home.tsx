import BestSellers from "../Home/BestSellers";
import Collections from "../Home/Collections";
import Discover from "../Home/Discover";
import Hero from "../Home/Hero";
import ImageGallery from "../Home/ImageGallery";

const Home = () => {
  return (
    <>
      <Hero />
      <BestSellers/>
      <Collections />
      <ImageGallery/>
      <Discover/>
    </>
  );
};

export default Home;
