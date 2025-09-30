import { FaStar, FaStarHalfAlt } from 'react-icons/fa'

const ProductRatings = () => {
  return (
      <div className="col-span-4">
        <div className="px-6 py-8 flex flex-col items-center gap-6 h-[30vw] bg-[#f9f9f2] text-[#555]">
          <div className="text-center">
            <h3 className="text-lg font-semibold">Average Rating</h3>
            <p className="text-4xl font-bold text-[#4a4a2a] mt-2">4.9</p>
            <div className="flex justify-center text-[#4a4a2a] text-xl mt-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <p className="text-sm mt-1">Based on 25 ratings</p>
          </div>
          <div className="w-full max-w-md">
            <p className="font-semibold text-[#4a4a2a] mb-2">
              Fit: True to size
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm">Smaller</span>
              <div className="flex flex-1 gap-1">
                <div className="h-2 flex-1 bg-[#9b9b7a]"></div>
                <div className="h-2 flex-1 bg-[#b2b296]"></div>
                <div className="h-2 flex-1 bg-[#4a4a2a]"></div>
                <div className="h-2 flex-1 bg-[#b2b296]"></div>
                <div className="h-2 flex-1 bg-[#9b9b7a]"></div>
              </div>
              <span className="text-sm">Larger</span>
            </div>
            <div className="mt-4 text-sm">
              <p className="font-semibold">How is this calculated?</p>
              <p>
                We calculate the fit range rating by customer feedback to help
                you find the right size
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ProductRatings