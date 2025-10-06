import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type Props = {
  productId: string;
  productName: string;
  price: number; 
  url: string;
  isProduct?: boolean;
  discounted: number; 
};

const ProductImage = ({
  productId,
  productName,
  price,
  url,
  isProduct = false,
  discounted,
}: Props) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/product/${productId}`);

  const formatPeso = (n: number) => `₱${n.toLocaleString("en-PH")}`;
  const salePrice = discounted ? price - (price * discounted) / 100 : null;
  return (
    <div
      className={`relative ${isProduct ? "group" : ""} overflow-hidden cursor-pointer`}
      onClick={handleClick}
    >
      <img
        src={url}
        alt={productName}
        className="w-full h-[35vw] object-cover transition duration-300 group-hover:scale-105 group-hover:blur-[1px]"
      />

      {discounted > 0 && (
        <span className="absolute left-2 top-2 z-10 bg-rose-500 px-2 py-1 text-xs font-semibold text-white shadow">
           {`${discounted} % Off`}
        </span>
      )}

      <div className="absolute inset-0 flex flex-col gap-2 px-8 py-16 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500">
        <h3 className="text-white font-bold text-3xl leading-tight">
          {productName}
        </h3>

        {/* Price row */}
        {discounted && salePrice ? (
          <p className="text-lg">
            <span className="mr-2 text-white/80 line-through">
              {formatPeso(price)}
            </span>
            <span className="font-extrabold text-red-600">
              {formatPeso(salePrice)}
            </span>
          </p>
        ) : (
          <p className="text-white text-xl">{formatPeso(price)}</p>
        )}

        {/* Search icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <FaSearch className="text-white text-5xl drop-shadow" />
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
