import ProductImage from '../Shared/ProductImage'
import useProducts from '../Shared/Hooks/useProducts';

const Content = () => {
  const images = useProducts();

  const filteredImages = images.filter((p) => p.discounted > 0).map((p) => ({
    id: p.id,
    productName: p.productName,
    price: p.price,
    url: p.url,
    discounted: p.discounted
  }));
  

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 mt-4">
      {filteredImages.map((image, index) => {
        return (
          <ProductImage key={index} productId={image.id} productName={image.productName} price={image.price} url={image.url} isProduct discounted={image.discounted} />
        )
      })}
    </div>
  )
}

export default Content