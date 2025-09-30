import QuestionAndAnswer from "../CustomerCare/QuestionAndAnswer";
import SizeChart from "../CustomerCare/SizeChart";
import type { FAQ } from "../CustomerCare/types";
import { olive } from "../Shared/global";

const faqs: FAQ[] = [
  {
    q: "What sizes do you offer?",
    a: "We offer a wide range of sizes from XS to XL (and some styles in plus sizes), to ensure everyone finds their perfect fit. Check our Size Guide for detailed measurements.",
  },
  {
    q: "How do I find my correct size?",
    a: "Use our Size Chart for bust, waist, and hip measurements. If you’re between sizes, we recommend sizing up for comfort, especially for swimsuits with less stretch.",
  },
  {
    q: "What materials are your swimsuits made from?",
    a: "Our swimsuits are crafted from high-quality blends of nylon, polyester, and spandex for durability, comfort, and a flattering fit. Most fabrics are quick-dry and chlorine-resistant.",
  },
  {
    q: "Are your swimsuits suitable for both swimming and lounging?",
    a: "Absolutely! We design our swimwear to be functional for swimming while stylish enough for beach days, pool parties, and resort lounging.",
  },
  {
    q: "How do I care for my swimsuit?",
    a: (
      <>
        <p>To keep your swimsuit in great condition:</p>
        <ul className="mt-2 list-disc pl-6 space-y-1">
          <li>Rinse in cool water after each use</li>
          <li>Hand wash with mild soap</li>
          <li>Avoid wringing or twisting</li>
          <li>Dry flat in the shade</li>
          <li>Avoid hot tubs, bleach, and fabric softeners</li>
        </ul>
      </>
    ),
  },
  {
    q: "Do you ship internationally?",
    a: "Yes, we ship worldwide! Shipping costs and delivery times vary depending on your location. You can check available options at checkout.",
  },
  {
    q: "Can I return or exchange my swimsuit?",
    a: "We accept returns and exchanges within 7-14 days of delivery, provided the swimsuit is unworn, unwashed, and with hygiene liners intact. Please see our Return Policy for full details.",
  },
  {
    q: "Do you offer mix-and-match bikini sets?",
    a: "Yes! Many of our bikini tops and bottoms are sold separately, so you can choose your preferred style, size and color combination.",
  },
  {
    q: "Are your swimsuits eco-friendly?",
    a: "We offer select collections made from recycled fabrics like ECONYL®, created from repurpose ocean plastics. Look for our Eco Collection label.",
  },
  {
    q: "How often do you release new collections?",
    a: "We launch fresh designs seasonally, with occasional limited-edition drops for special occasions or trends",
  },
];

const shipping: FAQ[] = [
  {
    q: "Where do you ship from?",
    a: "All orders are shipped from our main warehouse in [City/Country]. Some items in limited collections may be shipped directly from our partner studios.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes! We offer worldwide shipping. Shipping rates and delivery times vary depending on your location.",
  },
  {
    q: "How long does shipping take?",
    a: (
      <>
        <ul className="list-disc pl-6 space-y-1">
          <li>Domestic Orders: 2–5 business days</li>
          <li>International Orders: 7–14 business days</li>
        </ul>
        <p className="mt-2 italic">
          Delivery times may vary during peak seasons or due to customs delays.
        </p>
      </>
    ),
  },
  {
    q: "How much is shipping?",
    a: "Shipping costs are calculated at checkout based on your location and order weight. We also offer free shipping on orders over [amount].",
  },
  {
    q: "Can I track my order?",
    a: "Yes! Once your order ships, we’ll email you a tracking number so you can follow your package’s journey.",
  },
  {
    q: "Do you offer express shipping?",
    a: "We do! Express shipping options are available at checkout for faster delivery.",
  },
  {
    q: "What should I do if my package hasn’t arrived?",
    a: "If your tracking shows no movement or your package is delayed, please contact our customer support team at [email/contact]. We’ll help locate it.",
  },
  {
    q: "Do I have to pay customs fees for international orders?",
    a: "Customs duties or taxes may apply depending on your country’s import regulations. These fees are the responsibility of the customer.",
  },
  {
    q: "What happens if my order is lost or damaged in transit?",
    a: "We’ll work with the shipping carrier to resolve the issue. If your order is confirmed lost or damaged, we’ll send a replacement or issue a refund.",
  },
  {
    q: "Can I change my shipping address after placing an order?",
    a: "If your order hasn’t been shipped yet, contact us immediately with your updated address so we can make the change.",
  },
];

const returnAndExchangesFaqs: FAQ[] = [
  {
    q: "What is your return policy?",
    a: "We accept returns within 7–14 days of delivery, as long as the item is unworn, unwashed, and with hygiene liners and tags intact.",
  },
  {
    q: "How do I request a return?",
    a: "Simply contact our customer service team at [email/contact] with your order number and reason for return. We’ll guide you through the process.",
  },
  {
    q: "Can I exchange my swimsuit for a different size or style?",
    a: "Yes! Exchanges are available for items of equal or lesser value. If you’d like a different style or color, we’ll process it as a return and new purchase.",
  },
  {
    q: "Are there items that can’t be returned?",
    a: "For hygiene reasons, swimwear without the hygiene liner intact or sale/clearance items are not eligible for return.",
  },
  {
    q: "Who covers the cost of return shipping?",
    a: "Return shipping costs are the responsibility of the customer, unless the item arrived damaged, defective, or incorrect.",
  },
  {
    q: "How long does it take to process my refund?",
    a: "Once we receive and inspect your returned item, refunds are processed within 5–10 business days back to your original payment method.",
  },
  {
    q: "What if my swimsuit is damaged or defective?",
    a: "If you receive a damaged or faulty item, please contact us within 48 hours of delivery with photos, and we’ll send a replacement or issue a refund.",
  },
  {
    q: "Can I return an item I bought on sale?",
    a: "Sale or clearance items are final sale and cannot be returned or exchanged unless defective.",
  },
  {
    q: "Can I return an item purchased as a gift?",
    a: "Yes, but the refund will be issued to the original payment method used for the purchase. Alternatively, we can issue store credit.",
  },
  {
    q: "What if I miss the return window?",
    a: "Unfortunately, returns outside the stated window cannot be accepted, so please contact us as soon as possible after receiving your order.",
  },
];
export default function CustomerCare() {
  return (
    <main className="w-full"> 
      <section
        className="mx-auto max-w-7xl px-6 py-10"
        style={{ ["--olive" as any]: olive }}
      >
        <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[color:var(--olive)] ">
              Customer Care
            </h1>
            <p className="mt-3 text-[16px] leading-relaxed text-[color:var(--olive)]/80">
              Here to help, every step of the way. Questions, orders, or styling tips — consider us your personal support team.
            </p>
        </div>
        <QuestionAndAnswer title="FAQs" description="Find quick answers to your most common questions about our swimsuits, sizing, and collections." QA={faqs} />
        
        <SizeChart />
        <QuestionAndAnswer title="Shipping" description="Learn about delivery times, rates, and tracking so you know exactly when your swimwear will arrive." QA={shipping} />
        <QuestionAndAnswer title="Returns & Exchanges" description="Not quite right? Here's how to return, exchange, or request a refund—stress-free." QA={returnAndExchangesFaqs} />

        <div className="px-12 py-25">
          <div className="mt-10 sm:mt-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[color:var(--olive)]">
              Contact Us
            </h2>
            <p className="mt-2 text-[16px] leading-relaxed text-[color:var(--olive)]/80">
              The right fit is key to feeling confident. Some styles may run smaller or larger — check individual product descriptions
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
