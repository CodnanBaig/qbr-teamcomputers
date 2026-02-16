"use client";

export default function ConsolidatedActionPoints() {
  const takeaways = [
    "1000 Cr is a mindset shift — growth must be bold, long-term and scalable.",
    "Financial discipline (EBITDA, MRR, Run Rate, GM) defines real success.",
    "Reverse planning is essential to achieve revenue targets.",
    "A 10X funnel and 90-day visibility are mandatory for predictable growth.",
    "Leading indicators (activities) directly impact lagging indicators (revenue).",
    "OEM collaboration must translate into active pipeline contribution.",
    'Clear articulation of "Why Us?" strengthens market positioning.',
    "Differentiation and storytelling simplify complex security conversations.",
    '"Control" is the emotional anchor in security discussions.',
    "Enterprise & Mid-Enterprise focus is critical for big-ticket growth.",
    "Cross-BU collaboration increases share of wallet across key accounts.",
    "Government and PSU segments offer high-value long-cycle opportunities.",
    "Sales must be technically enabled (BANT, MEDDPICC frameworks).",
    "Strong Sales & Pre-Sales alignment improves large deal win rates.",
    "MSSP and SOC services are strategic growth drivers.",
    "AI is reshaping the market — digital messaging must revolve around AI.",
    "Long-term customer relationships are a key competitive advantage.",
    "Recognition and performance culture strengthen motivation and ownership.",
    "Structured processes (RFP, pre-bid, account mapping) increase win probability.",
    "Controlled execution creates scalable, predictable business growth.",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-lg p-6 md:p-8 mb-8 text-white">
        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">
          BMG – Consolidated Takeaways
        </h2>
      </div>

      {/* Takeaways Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {takeaways.map((takeaway, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md border border-gray-200 p-6 md:p-8 hover:shadow-lg transition-shadow duration-200"
          >
            <p className="text-sm md:text-base text-gray-700 leading-relaxed flex items-start">
              <span className="text-blue-600 mr-3 mt-1 font-bold">{i + 1}.</span>
              <span>{takeaway}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
