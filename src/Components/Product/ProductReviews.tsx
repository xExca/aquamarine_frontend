import { FaUser, FaStar } from "react-icons/fa";

type Props = {
  name: string;
  variation: string;
  review: string;
};

export default function ReviewItem({ name, variation, review }: Props) {
  return (
    <div className="w-full">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 shrink-0 rounded-full bg-[#9b9b7a] flex items-center justify-center text-white">
          <FaUser className="w-8 h-8" />
        </div>

        {/* Main content */}
        <div className="flex-1">
          {/* Top row: name/variation (left) + fit/stars (right) */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div>
              <p className="font-semibold text-sm leading-tight">{name}</p>
              <p className="text-xs text-[#4a4a2a]/80">
                Variation: {variation}
              </p>
            </div>

            <div className="text-right sm:min-w-[160px]">
              <p className="font-semibold text-xs">Fit: True to size</p>
              <div className="mt-1 flex justify-end gap-1 text-[#4a4a2a]">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-4 h-4" />
                ))}
              </div>
            </div>
          </div>

          {/* Review text (starts under name, not under avatar) */}
          <div className="w-[50%]"> 
            <p className="mt-3 text-sm leading-relaxed text-[#555]">{review}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
