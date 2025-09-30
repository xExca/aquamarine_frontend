import { useState } from "react";
import { FiBriefcase, FiEdit2, FiHome, FiPlus, FiUser } from "react-icons/fi";
import { olive } from "../Shared/global";
import { AddressCard } from "../../UserManagement/AddressCard";


const UserManagement = () => {
  const [tab, setTab] = useState<"addresses" | "password">("addresses");

  return (
    <div className="w-full" style={{ ["--olive" as any]: olive }}>
      {/* Header */}
      <section className="w-full border-b-2 border-[color:var(--olive)]/20">
        <div className="mb-4 px-10 py-8">
          <h1 className="text-2xl font-extrabold tracking-tight text-[color:var(--olive)]">
            Shop All
          </h1>
          <p className="mt-2 max-w-3xl text-[16px] leading-relaxed text-[color:var(--olive)]/80">
            Explore every style in one place — bikinis, one-pieces, and more.
            Your next favorite swimsuit starts here.
          </p>
        </div>
      </section>

      {/* Layout */}
      <div className="grid grid-cols-12 gap-6 px-10 py-8">
        {/* Sidebar */}
        <aside className="col-span-12 md:col-span-3">
          <div className="bg-[color:var(--olive)]/5 p-5 h-full">
            <p className="text-[color:var(--olive)] font-semibold mb-4">My Account</p>

            {/* vertical line container */}
            <nav
              className="
                relative mt-2 pl-8 space-y-3 text-[color:var(--olive)]
                before:absolute before:left-0 before:top-0 before:h-full
                before:w-[1.5px] before:bg-[color:var(--olive)]/40
              "
            >
              <a className="block font-semibold">User Profile</a>
              <a className="block">My Orders</a>
              <a className="block">Payment Method</a>
              <a className="block">Wishlist</a>
            </nav>

            <button className="mt-6 text-left text-[color:var(--olive)]/70">Logout</button>
          </div>
        </aside>

        {/* Content */}
        <section className="col-span-12 md:col-span-9">
          <div className="relative p-6">
            <button className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-md border border-[color:var(--olive)]/30 px-3 py-1.5 text-sm text-[color:var(--olive)]">
              <FiEdit2 /> Edit
            </button>

            {/* Profile row */}
            <div className="flex items-center gap-5">
              <div className="h-20 w-20 rounded-full bg-[color:var(--olive)]/20 grid place-items-center text-[color:var(--olive)]">
                <FiUser className="h-10 w-10" />
              </div>
              <div className="text-[color:var(--olive)]">
                <p className="text-xl font-semibold">Meg Gonzales</p>
                <p className="text-sm">
                  +639 958 179 146 <span className="text-[color:var(--olive)]/60">(Verified)</span>
                </p>
                <p className="text-sm">
                  megmeggonzales@gmail.com <span className="text-[color:var(--olive)]/60">(Verified)</span>
                </p>
              </div>
            </div>

            {/* Tabs */}
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setTab("addresses")}
                className={`rounded-t-lg border px-4 py-2 text-[color:var(--olive)] ${
                  tab === "addresses"
                    ? "border-b-transparent bg-white"
                    : "bg-[color:var(--olive)]/5 border-[color:var(--olive)]/20"
                }`}
              >
                Addresses
              </button>
              <button
                onClick={() => setTab("password")}
                className={`rounded-t-lg border px-4 py-2 text-[color:var(--olive)] ${
                  tab === "password"
                    ? "border-b-transparent bg-white"
                    : "bg-[color:var(--olive)]/5 border-[color:var(--olive)]/20"
                }`}
              >
                Password
              </button>
            </div>

            {/* Panel */}
            <div className="rounded-b-lg border border-t-0 p-5 border-[color:var(--olive)]/20">
              {tab === "addresses" ? (
                <div className="relative">
                  <button className="absolute right-0 -top-12 inline-flex items-center gap-2 rounded-md border border-[color:var(--olive)]/30 px-3 py-1.5 text-sm text-[color:var(--olive)]">
                    <FiPlus /> Add New
                  </button>

                  {/* Use fixed-width cards; let them wrap */}
                  <div className="flex flex-wrap gap-6">
                    <AddressCard title="HOME" Icon={FiHome} isDefault name="Meg Gonzales" phone="+639 958 179 146" lines={["123 Boni Ave. Barangay Barangka", "Marikina City,", "1803, Philippines"]} />
                    <AddressCard title="WORK" Icon={FiBriefcase} name="Meg Gonzales" phone="+639 958 179 146" lines={["123 Boni Ave. Barangay Barangka", "Marikina City,", "1803, Philippines"]}   />
                  </div>
                </div>
              ) : (
                <div className="text-[color:var(--olive)]/80">
                  <p className="mb-2 text-sm">Update your password</p>
                  <div className="grid gap-3 sm:max-w-md">
                    <input className="rounded border border-[color:var(--olive)]/30 px-3 py-2" placeholder="Current password" type="password" />
                    <input className="rounded border border-[color:var(--olive)]/30 px-3 py-2" placeholder="New password" type="password" />
                    <input className="rounded border border-[color:var(--olive)]/30 px-3 py-2" placeholder="Confirm new password" type="password" />
                    <button className="mt-2 inline-flex items-center justify-center rounded-md bg-[color:var(--olive)] px-4 py-2 text-white">
                      Save Changes
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserManagement;
