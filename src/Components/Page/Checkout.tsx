import { PiCreditCardLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const nagivate = useNavigate();
  return (
    <div className="min-h-[calc(100vh-80px)] w-full bg-white">
      <div className="relative mx-auto max-w-dvw">
        <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-neutral-200 lg:block" />

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-5 py-12 md:px-10 flex flex-row gap-10">
            <div>
              <button className="mb-6 inline-flex items-center gap-2 rounded-md border border-neutral-300 px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50"  onClick={()=> {nagivate(`/product/${1}`)}}>
                <span>Go Back</span> <span className="text-neutral-400">{'>'}</span>
              </button>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-extrabold text-neutral-800">Contact</h2>
                <div className="space-y-3">
                  <input
                    placeholder="Email"
                    className="w-full rounded-md border border-neutral-300 px-3 py-3 outline-none focus:border-neutral-700"
                  />
                  <label className="flex items-center gap-2 text-sm text-neutral-700">
                    <input type="checkbox" className="h-4 w-4" />
                    Email me with news and offers
                  </label>
                </div>

                <h2 className="mt-8 mb-3 text-2xl font-extrabold text-neutral-800">Delivery</h2>
                <div className="space-y-3">
                  <select className="w-full rounded-md border border-neutral-300 px-3 py-3 outline-none focus:border-neutral-700">
                    <option>Philippines</option>
                  </select>
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    <input placeholder="First Name" className="rounded-md border border-neutral-300 px-3 py-3 outline-none" />
                    <input placeholder="Last Name" className="rounded-md border border-neutral-300 px-3 py-3 outline-none" />
                  </div>
                  <input placeholder="Address" className="w-full rounded-md border border-neutral-300 px-3 py-3 outline-none" />
                  <input placeholder="Apartment/Unit No. (Optional)" className="w-full rounded-md border border-neutral-300 px-3 py-3 outline-none" />
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr,200px]">
                    <input placeholder="City" className="rounded-md border border-neutral-300 px-3 py-3 outline-none" />
                    <input placeholder="Postal Code" className="rounded-md border border-neutral-300 px-3 py-3 outline-none" />
                  </div>
                  <select className="w-full rounded-md border border-neutral-300 px-3 py-3 outline-none">
                    <option>National Capital Region</option>
                  </select>
                  <input placeholder="Phone Number" className="w-full rounded-md border border-neutral-300 px-3 py-3 outline-none" />
                  <label className="mt-1 flex items-center gap-2 text-sm text-neutral-700">
                    <input type="checkbox" className="h-4 w-4" />
                    Save this information for next time.
                  </label>
                </div>

                <div className="mt-6 rounded-md border border-neutral-300 bg-neutral-100 px-4 py-3 text-center text-sm text-neutral-700">
                  Enter your shipping address to view available shipping methods.
                </div>

                <h2 className="mt-10 mb-2 text-2xl font-extrabold text-neutral-800">Payment</h2>
                <p className="mb-3 text-sm text-neutral-600">All transactions are secure and encrypted.</p>
                <div className="overflow-hidden rounded-md border px-4 py-3 text-sm font-medium text-neutral-700">
                  <div className="border-b border-neutral-300 flex items-center justify-between pb-2 mb-3">
                    <span>Secure Payments via PayMongo</span>
                    <div className="flex items-center">
                      <img src="assets/banks/mastercard.png" alt="mastercard" className="w-8 h-6 object-contain" />
                      <img src="assets/banks/visa.png" alt="visa" className="w-8 h-6 object-contain" />
                      <img src="assets/banks/amex.png" alt="amex" className="w-8 h-6 object-contain" />
                      <img src="assets/banks/paypal.png" alt="paypal" className="w-8 h-6 object-contain" />
                      <img src="assets/banks/gcash.png" alt="gcash" className="w-8 h-6 object-contain" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <PiCreditCardLight className="text-[15vw]" />
                    <div className="w-[26vw] text-center -mt-6">
                      <p className="text-xs">
                        After clicking "Pay Now", you will be redirected to Secure Payments via
                        PayMongo to complete your purchase securely.
                      </p>
                    </div>
                  </div>
              </div>
              <h2 className="mt-2 mb-2 text-md font-bold text-[#545333]">Billing Address</h2>
              <div className="flex flex-col w-full max-w-md">
                <label className="border border-[#545333] flex items-center gap-2 px-3 py-2 cursor-pointer">
                  <input type="radio" name="billing" className="h-4 w-4 text-[#545333]" defaultChecked />
                  <span>Same as Shipping Address</span>
                </label>

                <label className="border border-[#545333] border-t-0 flex items-center gap-2 px-3 py-2 cursor-pointer">
                  <input type="radio" name="billing" className="h-4 w-4 text-[#545333]" />
                  <span>Use a different Billing Address</span>
                </label>
              </div>
              <div className="bg-[#545333] px-2 flex justify-between mt-4 text-white hover:bg-gray-800">
                <p className="">Pay now</p>
                <p>&gt;</p>
              </div>
            </div>
          </div>

          <aside className="bg-[#f2f3e7] px-5 py-12 md:px-8 lg:sticky lg:top-0 lg:h-screen w-full">
            <div className="mb-6 flex items-start gap-3">
              <img
                src="assets/swimsuit/sunset_orchid_bikini_top_dark.jpg"
                alt="Product"
                className="h-16 w-12 rounded-md object-cover"
              />
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-semibold text-neutral-800">Sunset Orchid Bikini Top</p>
                    <p className="text-sm text-neutral-600">Small</p>
                  </div>
                  <p className="text-sm font-semibold text-neutral-800">₱1299</p>
                </div>
              </div>
            </div>

            <div className="mb-6 flex gap-2">
              <input
                placeholder="Discount Code or Gift Card"
                className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 outline-none focus:border-neutral-700"
              />
              <button className="rounded-md bg-[#6a6f3a] px-4 py-2 text-sm font-semibold text-white hover:opacity-90">
                Apply
              </button>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between text-neutral-700">
                <span>Subtotal</span>
                <span>₱1299</span>
              </div>
              <div className="flex items-center justify-between text-neutral-700">
                <span>Shipping</span>
                <span className="text-neutral-500">Enter Shipping Address</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-base font-semibold text-neutral-700">Total</span>
              <span className="text-2xl font-extrabold text-neutral-800">₱1299</span>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
