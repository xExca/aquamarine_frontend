import React from 'react'

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: React.ReactNode;
  isFilter?: boolean;
};
const Sidebar = ({ open, setOpen, children, isFilter=true }: Props) => {
  return (
    <>
      {open && (
        <>
        <div
          className="fixed inset-0 z-50 bg-black/40"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
        <aside
        role="dialog"
        aria-label="Filter"
        className={`fixed ${isFilter ? "left-0" : "right-0"} top-0 z-50 h-dvh w-[320px] max-w-[90vw] bg-white shadow-2xl
                    transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between border-b border-[#545333]/30 px-4 py-4">
          <h2 className="text-xl font-semibold text-[#545333]">Filter</h2>
          <button
            onClick={() => setOpen(false)}
            className="rounded p-2 text-[#545333] hover:bg-black/5"
            aria-label="Close filter"
          >
            ×
          </button>
        </div>

        <div className="h-[calc(100dvh-128px)] overflow-y-auto px-4 py-3 text-sm text-[#545333]">
          {children}
        </div>
      </aside>
        </>
      )}

      
    </>
  );
}

export default Sidebar