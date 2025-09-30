import { useState, useRef } from "react"
import { CgShoppingBag } from "react-icons/cg"
import { GoPerson, GoPersonFill, GoHeart, GoHeartFill } from "react-icons/go"
import { IoIosArrowDown } from "react-icons/io"
import { useNavigate } from "react-router-dom"
import Bag from "./Bag"

const Navbar = () => {
  const [hoveredMenu, setHoveredMenu] = useState<"shop" | "customer" | null>(null)
  const [onPersonHover, setOnsPersonHover] = useState(false)
  const [onHeartHover, setOnHeartHover] = useState(false)
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const hideTimeout = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (menu: "shop" | "customer") => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current)
    setHoveredMenu(menu)
  }

  const handleMouseLeave = () => {
    hideTimeout.current = setTimeout(() => {
      setHoveredMenu(null)
    }, 200)
  }

  const menuContent = {
    shop: (
      <div className="flex gap-16">
        <ul className="flex flex-col gap-2 text-base text-gray-800">
          <li className="font-bold">Swim</li>
          <li>Shop All</li>
          <li>New Arrivals</li>
          <li>Best Sellers</li>
          <li>Bikini Tops</li>
          <li>Bikini Bottoms</li>
          <li>One Piece</li>
          <li>Tankinis</li>
          <li>Cover Ups</li>
          <li>Men's Collection</li>
        </ul>
        <ul className="flex flex-col gap-2 text-base text-gray-800">
          <li className="font-bold">Collection</li>
          <li>Tidal Bloom Collection</li>
          <li>Heatwave Collection</li>
          <li>Siren Depths Collection</li>
          <li>Moon Tide Collection</li>
          <li>Retro Riviera Collection</li>
        </ul>
      </div>
    ),
    customer: (
      <ul className="flex flex-col gap-2 text-base text-gray-800">
        <li className="font-bold">Find your fit</li>
        <li className="font-bold">Shipping</li>
        <li className="font-bold">Return and Exchange</li>
        <li className="font-bold">FAQs</li>
        <li className="font-bold">Contact Us</li>
      </ul>
    )
  }

  return (
    <div className="relative z-50">
      <nav className={`sticky top-0 z-50 bg-white flex justify-between items-center p-3 px-20 text-lg ${ !hoveredMenu ? "shadow-lg" : ""}`}>
        <div className="font-bold text-teal-800 text-xl">Aquamarine.</div>

        <div className="flex gap-3 font-semibold">
          <div className="inline-flex gap-2 p-3 border-b-2 border-transparent hover:border-teal-900 hover:text-teal-900" onClick={() => void navigate("/")}>
            Home
          </div>
          <div
            className="inline-flex items-center gap-2 p-3 border-b-2 border-transparent hover:border-teal-900 hover:text-teal-900"
            onMouseEnter={() => handleMouseEnter("shop")}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate('/shop')}
          >
            <span>Shop</span>
            <IoIosArrowDown size={20} />
          </div>
          <div
            className="inline-flex items-center gap-2 p-3 border-b-2 border-transparent hover:border-teal-900 hover:text-teal-900"
            onMouseEnter={() => handleMouseEnter("customer")}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate('/customer-care')}
          >
            <span>Customer Care</span>
            <IoIosArrowDown size={20} />
          </div>
          <div className="inline-flex p-3 text-red-600" onClick={() => navigate('/sale')}>Sale</div>
        </div>

        <div className="flex gap-3">
          <div
            onMouseEnter={() => setOnsPersonHover(true)}
            onMouseLeave={() => setOnsPersonHover(false)}
            onClick={() => navigate('/user-management')}
          >
            {onPersonHover ? <GoPersonFill size={30} /> : <GoPerson size={30} />}
          </div>
          <div
            onMouseEnter={() => setOnHeartHover(true)}
            onMouseLeave={() => setOnHeartHover(false)}
          >
            {onHeartHover ? <GoHeartFill size={30} /> : <GoHeart size={30} />}
          </div>
          <div className="cursor-pointer" onClick={() => setOpen(true)}>
            <CgShoppingBag size={30} />
          </div>
        </div>
      </nav>

      {/* Dropdown Panel */}
      {hoveredMenu && (
        <div
          onMouseEnter={() => {
            if (hideTimeout.current) clearTimeout(hideTimeout.current)
          }}
          onMouseLeave={handleMouseLeave}
          className="absolute top-full left-0 w-full bg-white shadow-lg px-20 py-10 z-40"
        >
          {menuContent[hoveredMenu]}
        </div>
      )}
      <Bag open={open} setOpen={setOpen} />
    </div>
  )
}

export default Navbar
