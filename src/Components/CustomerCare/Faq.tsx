import type { FAQ, QaNProps } from './types';


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

const Faq = () => {
  return (
    <>
      {/* FAQs header */}
      <QuestionAndAnswer title="FAQs" description="Find quick answers to your most common questions about our swimsuits, sizing, and collections." QA={faqs} />
    </>
  )
}

export default Faq


const QuestionAndAnswer = ({ title, description, QA }: QaNProps) => {
  return (
    <div className="px-12">
        <div className="mt-10 sm:mt-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[color:var(--olive)]">
            {title}
          </h2>
          <p className="mt-2 text-[16px] leading-relaxed text-[color:var(--olive)]/80">
            {description}
          </p>
        </div>

      {/* FAQ list */}
        <dl className="mt-8 space-y-6">
          {QA.map((item, idx) => (
            <div key={idx} className="space-y-2">
              <dt className="font-semibold text-[color:var(--olive)]">
                {idx + 1}. {item.q}
              </dt>
              <dd className="text-[color:var(--olive)]/80 text-[16px] leading-relaxed">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
  )
}