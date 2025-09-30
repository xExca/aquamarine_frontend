import { GoPerson } from "react-icons/go"

const Landing = () => {
  return (
    <div className="relative w-full" style={{ height: "calc(100vh - 80px)" }}>
      <img
        src="https://placehold.co/1920x1080"
        alt="home"
        className="w-full h-full object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute top-4 left-8">
        <button className="bg-stone-600 text-white p-3 hover:bg-stone-800 transition inline-flex items-center">
          <GoPerson /> &nbsp; Shop Now &gt;
        </button>
      </div>
    </div>
  )
}
export default Landing