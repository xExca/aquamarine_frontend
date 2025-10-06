import HomeFull from "../Shared/HomeFull"
import { useRandomProducts } from "../Shared/Hooks/useProducts";
import ProductImage from "../Shared/ProductImage"

const Discover = () => {
  const images = useRandomProducts(4) ?? [];
  return (
    <HomeFull title="Discover Our Collection" message="From timeless classics to bold new trends — discover swimsuits designed for every body, every vibe, and every sun-soaked moment.">
      <div className={`grid grid-cols-2 md:grid-cols-4 gap-2 w-full`}>
        {images.map((image, index) => {
          return (
            <ProductImage key={index} productId={image.id} productName={image.productName} price={image.price} url={image.url} discounted={image.discounted} isProduct={false}/>
          )
        })}
      </div>
    </HomeFull>
  )
}
export default Discover