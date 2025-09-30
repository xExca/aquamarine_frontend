import { useState } from 'react';
import AccordionItem from './AccordionItem'
import Toast from '../Shared/Toast/Toast';
import { toast } from 'react-toastify';
import { FaCheck, FaHeart, FaRegHeart } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
  const colors = [
    { name: "Red", value: "bg-red-500" },
    { name: "Blue", value: "bg-blue-500" },
    { name: "Green", value: "bg-green-500" },
    { name: "Yellow", value: "bg-yellow-500" },
    { name: "White", value: "bg-pink-500" },
  ];

const ProductDetails = () => {
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [isWishlistedHovered, setIsWishlistedHovered] = useState<boolean>(false);

  const navigate = useNavigate();
  const params = useParams();
  const handleAddToBag = () => {
    toast(<Toast message="Added to bag successfully!" type="success" icon={<FaCheck />} />);
  };

  const handleAddToWishList = () => {
    toast(<Toast message="Added to wishlist!" type="error" icon={<FaHeart />} />);
  };

  return (
     <div className="flex-1 flex-col gap-0.5">
          <h2 className="text-2xl font-bold">Sunset Orchid Bikini Top</h2>
          <p className="text-lg mb-1">₱1299</p>
          <hr className="my-2" />

          {/* Sizes */}
          <div className="mb-3">
            <p>Size</p>
            <div className="flex flex-row gap-2 flex-wrap">
              {["Extra Small", "Small", "Medium", "Large", "Extra Large"].map(
                (size) => (
                  <button
                    onClick={() => setSelectedSize(size)}
                    key={size}
                    className={`border border-green-800 px-2 hover:bg-green-800 hover:text-white ${selectedSize === size ? "bg-green-800 text-white" : ""}`}
                  >
                    {size}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Colors */}
          <div className="mb-3">
            <p className="mb-1">Color</p>
            <div className="flex gap-1">
              {colors.map((c) => (
                <div
                  key={c.name}
                  onClick={() => setSelectedColor(c.value)}
                  className={`p-0.5 rounded-full cursor-pointer border ${
                    selectedColor === c.value
                      ? "border-gray-800"
                      : "border-gray-300"
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full ${c.value}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-2 text-sm mb-6 flex-wrap">
            <button className="px-2 bg-[#545333] text-white hover:bg-gray-800" onClick={() => navigate(`/checkout/${params.id}`)}>
              Buy Now
            </button>
            <button
                className="px-2 bg-[#545333] text-white hover:bg-gray-800 cursor-pointer"
                onClick={handleAddToBag}
              >
                Add to Bag
            </button>
            <button 
              className="p-2 text-white border-2 border-gray-300"
                onClick={handleAddToWishList}
                onMouseEnter={()=> {setIsWishlistedHovered(true)}}
                onMouseLeave={() => {setIsWishlistedHovered(false)}}
              >
              {isWishlistedHovered ?
                <FaHeart className='text-[#545333] text-lg'/>
              :
                <FaRegHeart className='text-[#545333] text-lg'/>
              }
            </button>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2 mb-2">
            <p className="text-gray-700">
              The "Sunset Orchid" bikini features a classic triangle top with
              ruched details and adjustable ties for a flattering, customizable
              fit.
            </p>

            <p className="text-gray-700">
              Paired with low-rise V-cut bottoms and side ties, the design
              enhances natural curves and elongates the legs. Finished in a soft
              floral print of coral pink and sea foam green on a pale sand base,
              it captures the calm elegance of tropical waters.
            </p>
          </div>
          
          <div className="flex flex-row gap-4">
            <div className="h-10 w-12 rounded-full border-2 border-gray-300 flex items-center justify-center">
              <div className="h-8 w-8 rounded-full overflow-hidden">
                <img src="https://placehold.co/36" alt="profile" className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex justify-between">
                <p className="font-semibold">Model Size: Small</p>
              </div>
              <div className="flex justify-start gap-10">
                <p>Height: 176cm | 5'9"</p>
                <p>Waist: 66cm | 26"</p>
              </div>
              <div className="flex justify-start gap-10">
                <div>Bust: 80cm | 31.5"</div>
                <div>Hip 92.7cm | 36.5"</div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full max-w-md">
              <AccordionItem title="Size & Fit">
                <p className="mb-2 text-xs text-gray-500">
                  Kindly note that all measurements are subjected to a 1 inch allowance.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="p-2 border">Size</th>
                        <th className="p-2 border">Bust</th>
                        <th className="p-2 border">Waist</th>
                        <th className="p-2 border">Hips</th>
                        <th className="p-2 border">Cup Size</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border">XS</td>
                        <td className="p-2 border">31–33</td>
                        <td className="p-2 border">23–25</td>
                        <td className="p-2 border">33–35</td>
                        <td className="p-2 border">A–B</td>
                      </tr>
                      <tr>
                        <td className="p-2 border">S</td>
                        <td className="p-2 border">33–35</td>
                        <td className="p-2 border">25–27</td>
                        <td className="p-2 border">35–37</td>
                        <td className="p-2 border">A–B</td>
                      </tr>
                      <tr>
                        <td className="p-2 border">M</td>
                        <td className="p-2 border">35–37</td>
                        <td className="p-2 border">27–29</td>
                        <td className="p-2 border">37–39</td>
                        <td className="p-2 border">B–C</td>
                      </tr>
                      <tr>
                        <td className="p-2 border">L</td>
                        <td className="p-2 border">37–39</td>
                        <td className="p-2 border">29–31</td>
                        <td className="p-2 border">39–41</td>
                        <td className="p-2 border">C–D</td>
                      </tr>
                      <tr>
                        <td className="p-2 border">XL</td>
                        <td className="p-2 border">39–42</td>
                        <td className="p-2 border">31–34</td>
                        <td className="p-2 border">41–44</td>
                        <td className="p-2 border">D–DD</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </AccordionItem>
              <AccordionItem title="Details">
                <ul className="list-inside list-disc">
                  <li>4-Way Stretch for flexible fit and movement</li>
                  <li>UV Protection (UPF 50+) to block harmful rays</li>
                  <li>Quick-Dry Technology for all-day beach-to-pool comfort</li>
                  <li>Pill-Resistant & Chlorine-Resistant for long-lasting wear</li>
                  <li>Double-Lined for opacity and a smooth silhouette</li>
                </ul>
              </AccordionItem>
              <AccordionItem title="Material & Care">
                <p className="font-bold">Fabric Composition:</p>
                <ul className="list-inside list-disc">
                  <li>Outer Fabric: 82% Recycled Nylon, 18% Spandex</li>
                  <li>Lining: 88% Polyester, 12% Spandex</li>
                </ul>
                <p className="font-bold">Recommended Care</p>
                <ul className="list-inside list-disc">
                  <li>Hand wash cold</li>
                  <li>Lay flat to dry</li>
                  <li>Do not iron or bleach</li>
                </ul>
              </AccordionItem>
            </div>
          </div>
        </div>
  )
}

export default ProductDetails