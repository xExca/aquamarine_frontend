import HomeFull from "../Shared/HomeFull"
import { useRandomProducts } from "../Shared/Hooks/useProducts";
import ProductImage from "../Shared/ProductImage";

const BestSellers = () => {
  const images = useRandomProducts(4) ?? [];
  return (
    <HomeFull title="Best Sellers" message="Our most-loved swimsuits — flattering, comfortable, and made to move with you. Perfect for sun, sea, and everything in between.">
      <div className={`grid grid-cols-2 md:grid-cols-4 gap-2 w-full`}>
        {images.map((image, index) => {
          return (
            <ProductImage key={index} productId={image.id} productName={image.productName} price={image.price} url={image.url} isProduct discounted={image.discounted} />
          )
        })}
      </div>
    </HomeFull>
  )
}
export default BestSellers