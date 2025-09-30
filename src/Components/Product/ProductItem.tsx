import ProductDetails from "./ProductDetails";
import ProductRatings from "./ProductRatings";
import ProductReviews from "./ProductReviews";

const reviews = [
    {
      name: "Juan Dela Cruz",
      variation: "Small / Orange",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat nec erat et venenatis. Nam nec nibh in nunc congue facilisis. Phasellus quis gravida est. Duis libero elit,",
    },
    {
      name: "Jane Doe",
      variation: "Small / Orange",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat nec erat et venenatis. Nam nec nibh in nunc congue facilisis. Phasellus quis gravida est. Duis libero elit,",
    },
    {
      name: "John Doe",
      variation: "Small / Orange",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat nec erat et venenatis. Nam nec nibh in nunc congue facilisis. Phasellus quis gravida est. Duis libero elit,",
    },
    {
      name: "Robert Smith",
      variation: "Large / Black",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec nibh in nunc congue facilisis. Quisque elementum, nunc nec venenatis egestas, libero nunc malesuada lectus, ut dictum nulla metus ut tortor. ",
    },
  ];
  
const ProductItem = () => {
  return (
    <>
      <div className="my-10 flex justify-center text-xs">
        <div className="flex max-w-6xl w-full p-6 overflow-hidden">
          {/* Left thumbnails */}
          <div className="flex w-28 md:w-32 flex-col gap-2">
            {[
              "https://placehold.co/300x400",
              "https://placehold.co/300x400",
              "https://placehold.co/300x400",
            ].map((src, i) => (
              <div key={i} className="aspect-[3/4] overflow-hidden rounded-md">
                <img
                  src={src}
                  alt={`thumb ${i + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="w-[422px] mx-6">
            <div className="aspect-[4/5] overflow-hidden rounded-md">
              <img
                src="https://placehold.co/500"
                alt="product main"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <ProductDetails />
        </div>
      </div>
      <div className="px-10 py-8 flex flex-col gap-8">
        <h2 className="font-semibold text-lg">Customer Reviews</h2>

        <div className="grid grid-cols-12 gap-6">
          <ProductRatings />
          <div className="col-span-8 flex flex-col gap-6 text-sm">
            <div className="flex justify-between">
              <div className="flex gap-3 items-center">
                <div className="border px-4 rounded text-sm">
                  Sort
                </div>
                <div className="border px-4 rounded text-sm">
                  Rating
                </div>
                <div className="border px-4 rounded text-sm">
                  Variation
                </div>
              </div>
              <button className="bg-[#4a4a2a] text-white px-4 py-1 rounded hover:bg-[#3a3a20]">
                Write a Review →
              </button>
            </div>
            {reviews.map((review, i) => (
              <ProductReviews
                key={i}
                name={review.name}
                variation={review.variation}
                review={review.review}
              />
            ))}
        </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
