import { useState } from 'react';
import Content from '../Shop/Content';
import Header from '../Shop/Header';
import { olive } from '../Shared/global';
import FilterDrawer from '../Shop/Filter';

const Shop = () => {
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState<string[]>([]);
  return (
    <>
       <section className="w-full">
          {/* Title + Subtitle */}
          <div className="mb-4 px-10 py-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-[color:var(--olive)]"
                style={{ ["--olive" as any]: olive }}>
              Shop All
            </h1>
            <p className="mt-2 max-w-3xl text-[16px] leading-relaxed text-[color:var(--olive)]/80"
               style={{ ["--olive" as any]: olive }}>
              Explore every style in one place — bikinis, one-pieces, and more.
              Your next favorite swimsuit starts here.
            </p>
          </div>
        <Header setFilterOpen={setOpen} filters={filters} setFilters={setFilters} />
      </section>
      <Content />
      <FilterDrawer open={open} setOpen={setOpen} setFilters={setFilters} filters={filters} />
    </>
  );
}

export default Shop