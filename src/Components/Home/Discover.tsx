import HomeFull from "../Shared/HomeFull"
import ProductImage from "../Shared/ProductImage"

const Discover = () => {
  return (
    <HomeFull title="Discover Our Collection" message="From timeless classics to bold new trends — discover swimsuits designed for every body, every vibe, and every sun-soaked moment.">
      <div className={`grid grid-cols-2 md:grid-cols-4 gap-2 w-full`}>
        <ProductImage productName="Sunset Orchid Bikini Set" price={1299} url="assets/swimsuit/sunset_orchid_bikini.jpg" productId={1}/>
        <ProductImage productName="Sunset Orchid Bikini Set" price={1299} url="assets/swimsuit/sunset_orchid_bikini.jpg" productId={2}/>
        <ProductImage productName="Sunset Orchid Bikini Set" price={1299} url="assets/swimsuit/sunset_orchid_bikini.jpg" productId={3}/>
        <ProductImage productName="Sunset Orchid Bikini Set" price={1299} url="assets/swimsuit/sunset_orchid_bikini.jpg" productId={4}/>
      </div>
    </HomeFull>
  )
}
export default Discover