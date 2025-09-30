import ProductImage from "../Shared/ProductImage"

type Props = {
  images: {
    'id': number,
    'productName': string,
    'price': number,
    'url' : string
  }[]
}

const ImageGallery = ({images}:Props) => {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-2 w-full`}>
      {images.map((image, index) => 
        <ProductImage key={index} productId={image.id} productName={image.productName} price={image.price} url={image.url} isProduct />
      )}
    </div>
  )
}
export default ImageGallery