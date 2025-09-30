import { olive } from "../Shared/global";
import Content from "../Shop/Content";

const Sale = () => {
  return (
    <>
      <section className="w-full">
          {/* Title + Subtitle */}
            <div className="mb-4 px-10 py-8">
              <h1 className="text-2xl font-extrabold tracking-tight text-rose-500"
                  style={{ ["--olive" as any]: olive }}>
                Sale
              </h1>
              <p className="mt-2 max-w-3xl text-[16px] leading-relaxed text-[color:var(--olive)]/80"
                style={{ ["--olive" as any]: olive }}>
                Timeless swimwear, now at exclusive prices. Luxurious looks made just a little sweeter.
              </p>
            </div>
        </section>
        <Content isSale />
      </>
  )
}

export default Sale