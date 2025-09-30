import ProductImage from '../Shared/ProductImage'

type Props = {
  isSale?: boolean;
}
const Content = ({ isSale }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 mt-4">
      <ProductImage productName="Sunset Orchid Bikini Set" price={1299} url="assets/swimsuit/sunset_orchid_bikini.jpg" productId={1} isProduct isSale={isSale} salePrice={1099}/>
      <ProductImage productName="Sunset Orchid Bikini Set" price={1299} url="assets/swimsuit/sunset_orchid_bikini.jpg" productId={1} isProduct isSale={isSale} salePrice={1099}/>
      <ProductImage productName="Sunset Orchid Bikini Set" price={1299} url="assets/swimsuit/sunset_orchid_bikini.jpg" productId={1} isProduct isSale={isSale} salePrice={1099}/>
      <ProductImage productName="Sunset Orchid Bikini Set" price={1299} url="assets/swimsuit/sunset_orchid_bikini.jpg" productId={1} isProduct isSale={isSale} salePrice={1099} />
      <ProductImage productName="Sunset Orchid Bikini Set" price={1299} url="assets/swimsuit/sunset_orchid_bikini.jpg" productId={1} isProduct isSale={isSale} salePrice={1099}/>
      <ProductImage productName="Sunset Orchid Bikini Set" price={1299} url="assets/swimsuit/sunset_orchid_bikini.jpg" productId={1} isProduct isSale={isSale} salePrice={1099}/>
      <ProductImage productName="Sunset Orchid Bikini Set" price={1299} url="assets/swimsuit/sunset_orchid_bikini.jpg" productId={1} isProduct isSale={isSale} salePrice={1099}/>
      <ProductImage productName="Sunset Orchid Bikini Set" price={1299} url="assets/swimsuit/sunset_orchid_bikini.jpg" productId={1} isProduct isSale={isSale} salePrice={1299} />
    </div>
  )
}

export default Content