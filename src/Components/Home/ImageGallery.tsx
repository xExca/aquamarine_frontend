import { useRandomProducts } from "../Shared/Hooks/useProducts";
import ProductImage from "../Shared/ProductImage"

const ImageGallery = () => {
    const images = useRandomProducts(4) ?? [];
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-2 w-full h-[100%]`}>
      {images.map((image, index) => {
        return (
          <ProductImage key={index} productId={image.id} productName={image.productName} price={image.price} url={image.url} discounted={image.discounted} isProduct />
        )
      })}
    </div>
  )
}
export default ImageGallery