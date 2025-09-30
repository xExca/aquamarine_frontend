import BestSellers from "../Home/BestSellers";
import Collections from "../Home/Collections";
import Discover from "../Home/Discover";
import Hero from "../Home/Hero";
import ImageGallery from "../Home/ImageGallery";

const images = [
  {
    'id': 1,
    'productName': 'Sunset Orchid Bikini Set',
    'price': 1299,
    'url' : 'assets/swimsuit/sunset_orchid_bikini.jpg'
  },
  {
    'id': 2,
    'productName': 'Black Bikini Set',
    'price': 1099,
    'url': 'assets/swimsuit/black_bikini.jpg'
  }, 
  {
    'id': 3,
    'productName': 'Pink Flower Bikini Set',
    'price': 1299,
    'url': 'assets/swimsuit/pink_flower.jpg'
  },
  {
    'id': 4,
    'productName': 'White Robe',
    'price': 1099,
    'url': 'assets/swimsuit/white_robe.jpg'
  }
];

const Home = () => {
  return (
    <>
      <Hero />
      <BestSellers/>
      <Collections />
      <ImageGallery images={images}/>
      <Discover />
    </>
  )
}

export default Home