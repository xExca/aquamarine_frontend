import CollectionsImage from "../Shared/CollectionsImage"
import HomeFull from "../Shared/HomeFull"
import { useRandomProducts } from "../Shared/Hooks/useProducts";

const Collections = () => {
  const images = useRandomProducts(2) ?? [];
  return (
    <HomeFull 
      title="Shop Our Collection" 
      message="From timeless classics to bold new trends — discover swimsuits designed for every body, every vibe, and every sun-soaked moment"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch w-full">
        <div className="p-6 h-full flex flex-col">
          <div>
            <h2 className="text-2xl font-bold mb-2">Heatwave Collection</h2>
            <p className="text-sm mb-4">Newest Collection</p>
          </div>

          <div className="flex-1 flex justify-center items-center w-full">
            <p className="text-gray-800 text-center">
              Turn up the heat with bold cuts, fiery colors, and statement details 
              made for sun-drenched days and electric nights. Designed to stand out, 
              built to move with you.
            </p>
          </div>
        </div>

        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <CollectionsImage src={images[0]?.url ?? ""} />
          <CollectionsImage src={images[1]?.url ?? ""} />
        </div>
      </div>
    </HomeFull>
  )
}

export default Collections
