import { useState, useRef } from "react";
import { BiChevronDown } from "react-icons/bi";

type AccordionItemProps = {
  title: string;
  children: React.ReactNode;
  open?: boolean;
};

const AccordionItem = ({ title, children, open = false }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(open);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b">
      <button
        className="w-full flex justify-between items-center py-3 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-gray-800 text-sm">{title}</span>
        <BiChevronDown
          className={`h-5 w-5 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight : 0,
        }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        <div className="pb-3 text-sm text-gray-600">{children}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
