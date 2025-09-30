import { useRef, useState, type Dispatch, type SetStateAction } from 'react';
import { LuArrowDownWideNarrow, LuSearch, LuSlidersHorizontal } from 'react-icons/lu';
import { olive } from '../Shared/global';

type HeaderProps = {
  setFilterOpen: Dispatch<SetStateAction<boolean>>;
  filters: string[];
  setFilters: Dispatch<SetStateAction<string[]>>;
};

const SORT_OPTIONS = [
  { key: "best", label: "Best Selling" },
  { key: "featured", label: "Featured" },
  { key: "price-asc", label: "Price: Low – High" },
  { key: "price-desc", label: "Price: High – Low" },
  { key: "az", label: "Alphabetical (A–Z)" },
  { key: "za", label: "Alphabetical (Z–A)" },
  { key: "new-old", label: "Newest – Oldest" },
  { key: "old-new", label: "Oldest – Newest" },
];

const Header = ({setFilterOpen, filters, setFilters} : HeaderProps) => {
  const [hoveredSort, setHoveredSort] = useState(false);
  const hideTimeout = useRef<NodeJS.Timeout | null>(null)


  const handleMouseEnter = () => {
  if (hideTimeout.current) clearTimeout(hideTimeout.current)
    setHoveredSort(true)
  }

  const handleMouseLeave = () => {
    hideTimeout.current = setTimeout(() => {
      setHoveredSort(false)
    }, 200)
  }

  return (
    <>
      {/* Divider */}
      <div className="border-b" style={{ borderColor: olive }} />

      {/* Toolbar */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between py-3 px-10">
        {/* Left controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Filters button */}
          <button
            onClick={() => setFilterOpen(true)}
            className="inline-flex items-center gap-2 border px-3 py-1.5 text-sm"
            style={{ borderColor: olive, color: olive }}
          >
            <LuSlidersHorizontal className="h-4 w-4" />
            Filters
          </button>

          <button
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={handleMouseLeave}
            className="inline-flex items-center gap-2 border px-3 py-1.5 text-sm"
            style={{ borderColor: olive, color: olive }}
          >
            <LuArrowDownWideNarrow className="h-4 w-4" />
            Sort
            <span className="ml-1">▾</span>
          </button>
          {hoveredSort && (
            <div
              role="menu"
              className="absolute left-34 top-66 mt-2 w-60 border bg-white shadow-xl z-50 overflow-hidden"
              style={{ borderColor: `${olive}66` }}
              onMouseEnter={() => {
                if (hideTimeout.current) clearTimeout(hideTimeout.current)
              }}
              onMouseLeave={handleMouseLeave}
            >
              <ul className="py-1 text-sm">
                {SORT_OPTIONS.map((opt) => {
                  return (
                    <li key={opt.key}>
                      <button
                        role="menuitem"
                        className={`w-full px-4 py-2 text-left hover:bg-black/5`}
                        style={{ color: olive }}
                      >
                        {opt.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          <div className='inline-flex items-center gap-2 text-sm'>
            {filters.map((f, i) => (
              <span
                key={`${f}-${i}`}
                className="group relative inline-flex items-center px-2 py-1 text-sm font-medium 
                          transition-all duration-300 ease-in-out hover:pr-8"
                style={{ backgroundColor: "olive", color: "#fff" }}
              >
                {f}
                <button
                  type="button"
                  className="absolute right-2 opacity-0 translate-x-2 transition-all duration-300 ease-in-out 
                            group-hover:opacity-100 group-hover:translate-x-0"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFilters?.((prev) => {
                      const next = [...prev];
                      const idx = next.indexOf(f);
                      if (idx > -1) next.splice(idx, 1);
                      return next;
                    });
                  }}
                  aria-label={`Remove ${f}`}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Search (right) */}
        <div className="relative w-full sm:w-72">
          <LuSearch className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2"
                  style={{ color: olive }} />
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-md border px-9 py-2 text-sm outline-none"
            style={{ borderColor: olive, color: olive }}
          />
        </div>
      </div>
      <div className="border-b" style={{ borderColor: olive }} />
    </>
  )
}

export default Header