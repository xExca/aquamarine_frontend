import React from "react";
import { FiEdit2, FiStar, FiTrash2 } from "react-icons/fi";

type AddressCardProps = {
  title: string;
  Icon: React.ElementType;     
  name: string;
  phone: string;
  lines: string[];
  isDefault?: boolean;
};

/** Fixed-size 300x220 card */
export const AddressCard: React.FC<AddressCardProps> = ({
  title,
  Icon,
  name,
  phone,
  lines,
  isDefault,
}) => (
  <div className="w-[300px] h-[220px] rounded-md border border-[color:var(--olive)]/30 bg-[color:var(--olive)]/10 flex flex-col">
    {/* Header */}
    <div className="flex items-center justify-between border-b border-[color:var(--olive)]/20 px-5 py-3">
      <div className="flex items-center gap-2 text-[color:var(--olive)]">
        <Icon />
        <span className="font-bold tracking-wide">{title}</span>
      </div>
      <div className="flex items-center gap-2 text-[color:var(--olive)]/80">
        <button
          className="p-1.5 rounded border border-[color:var(--olive)]/30"
          aria-label="Set Default"
        >
          <FiStar />
        </button>
        <button
          className="p-1.5 rounded border border-[color:var(--olive)]/30"
          aria-label="Edit"
        >
          <FiEdit2 />
        </button>
        <button
          className="p-1.5 rounded border border-[color:var(--olive)]/30"
          aria-label="Delete"
        >
          <FiTrash2 />
        </button>
      </div>
    </div>

    {/* Body (fills remaining height) */}
    <div className="px-5 py-3 text-[color:var(--olive)] flex-1 overflow-hidden">
      <p className="text-sm font-semibold">{name}</p>
      <p className="text-sm">{phone}</p>
      {lines.map((l, i) => (
        <p key={i} className="text-sm">{l}</p>
      ))}
      {isDefault && (
        <span className="mt-2 inline-block rounded bg-rose-600 px-2 py-0.5 text-[10px] font-semibold text-white">
          Default Address
        </span>
      )}
    </div>
  </div>
);
