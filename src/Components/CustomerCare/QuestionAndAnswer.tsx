import React from 'react'

type QaNProps = {
  title: string;
  description: string;
  QA: FAQ[];
};
type FAQ = {
  q: string;
  a: React.ReactNode;
};
const QuestionAndAnswer = ({ title, description, QA }: QaNProps) => {
  return (
    <div className="px-12">
        <div className="mt-10 sm:mt-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#545333]">
            {title}
          </h2>
          <p className="mt-2 text-[16px] leading-relaxed text-[#545333]/80">
            {description}
          </p>
        </div>

      {/* FAQ list */}
        <dl className="mt-8 space-y-6">
          {QA.map((item, idx) => (
            <div key={idx} className="space-y-2">
              <dt className="font-semibold text-[#545333]">
                {idx + 1}. {item.q}
              </dt>
              <dd className="text-[#545333]/80 text-[16px] leading-relaxed">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
  )
}

export default QuestionAndAnswer