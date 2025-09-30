import { useEffect, type Dispatch, type SetStateAction } from "react";
import AccordionItem from "../Product/AccordionItem";
import Sidebar from "../Shared/Sidebar";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  filters: string[];
  setFilters: Dispatch<SetStateAction<string[]>>; 
};

export default function FilterDrawer({ open, setOpen, filters, setFilters }: Props) {
  const addFilter = (label: string) =>
    setFilters(prev => (prev.includes(label) ? prev : [...prev, label]));
  const removeFilter = (label: string) =>
    setFilters(prev => prev.filter(x => x !== label));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setOpen]);

  return (
    <>
      <Sidebar open={open} setOpen={setOpen}>
        <AccordionItem title="Availability" open>
          {["In Stock", "Out of Stock"].map((label) => (
            <Checkbox
              key={label}
              label={label}
              checked={filters.includes(label)} 
              onChange={(c) => (c ? addFilter(label) : removeFilter(label))}
            />
          ))}
        </AccordionItem>

        <AccordionItem title="Category" open>
          {["Bikini Top", "Bikini Bottom", "One Piece", "Tankini", "Cover Ups", "Men's Collection"].map((label) => (
            <Checkbox
              key={label}
              label={label}
              checked={filters.includes(label)}
              onChange={(c) => (c ? addFilter(label) : removeFilter(label))}
            />
          ))}
        </AccordionItem>

        <AccordionItem title="Size" open>
          {["Extra Small", "Small", "Medium", "Large", "Extra Large"].map((label) => (
            <Checkbox
              key={label}
              label={label}
              checked={filters.includes(label)}
              onChange={(c) => (c ? addFilter(label) : removeFilter(label))}
            />
          ))}
        </AccordionItem>

        <AccordionItem title="Color" open>
          {["Aquamarine","Red","White","Black","Navy Blue","Brown","Pastel Green","Pink"].map((label) => (
            <Checkbox
              key={label}
              label={label}
              checked={filters.includes(label)}
              onChange={(c) => (c ? addFilter(label) : removeFilter(label))}
            />
          ))}
        </AccordionItem>
      </Sidebar>
    </>
  );
}

function Checkbox({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className="flex items-center gap-2 py-1">
      <input
        type="checkbox"
        className="h-4 w-4 accent-[#545333]"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span>{label}</span>
    </label>
  );
}
