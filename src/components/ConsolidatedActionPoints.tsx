"use client";

export default function ConsolidatedActionPoints() {
  const actionPointsSections = [
    {
      title: "Strategic & Financial",
      items: [
        "Define structured roadmap toward 1000 Cr vision.",
        "Reverse plan 2 Cr EBITDA into monthly run-rate targets.",
        "Create timeline for achieving 10 Cr run rate.",
        "Improve Gross Margin focus across deals.",
        "Build a 3-year structured growth plan.",
      ],
    },
    {
      title: "Funnel & Sales Discipline",
      items: [
        "Maintain 10X funnel coverage at all times.",
        "Ensure minimum 90-day pipeline visibility.",
        "Conduct Monthly BMG performance reviews.",
        "Track leading indicators weekly.",
        "Organize regular Blitz Days with OEMs.",
      ],
    },
    {
      title: "Positioning & Market Strategy",
      items: [
        'Standardize and circulate "Why Us?" narrative.',
        "Develop updated case studies and success stories.",
        "Train sales team on storytelling-based selling.",
        "Align pitches with key growth drivers (Regulatory, AI, IoT, Cloud, SME, Govt).",
      ],
    },
    {
      title: "Enterprise & Account Expansion",
      items: [
        "Build target list for Enterprise & Mid-Enterprise customers.",
        "Strengthen CXO-level engagement strategy.",
        "Drive cross-BU selling across key accounts.",
        "Increase penetration within existing TCPL customers.",
      ],
    },
    {
      title: "Government & PSU",
      items: [
        "Closely track active government opportunities.",
        "Monitor ₹100–200 Cr pipeline progress.",
        "Implement structured RFP follow-up mechanism.",
        "Work toward ₹3 Cr quarterly target.",
      ],
    },
    {
      title: "OEM & Partnerships",
      items: [
        "Conduct detailed OEM mapping.",
        "Ensure minimum 30% OEM funnel contribution converts to active pipeline.",
        "Organize OEM Days and joint engagement programs.",
        "Build structured TG profiling list with stakeholder mapping.",
      ],
    },
    {
      title: "Sales Enablement & Hiring",
      items: [
        "Enable sales team technically at first level (BANT & MEDDPICC).",
        "Encourage OEM certifications for sales members.",
        "Recruit additional Sales & ISR team members.",
        "Strengthen Sales & Pre-Sales engagement on large deals.",
      ],
    },
    {
      title: "Services & Capability",
      items: [
        "Accelerate SOC go-live plan.",
        "Strengthen MSSP offerings with strategic OEMs.",
        "Clarify internal vs outsourced service capabilities.",
        "Streamline RFP and tender processes.",
      ],
    },
    {
      title: "Marketing & Digital",
      items: [
        "Launch weekly email campaigns.",
        'Execute "Know Your Partner" monthly newsletter.',
        "Plan monthly webinars with measurable outcomes.",
        "Increase AI-focused social media presence.",
        "Organize customer roundtables.",
      ],
    },
    {
      title: "Customer Retention & Recognition",
      items: [
        "Create database of active customers with tenure details.",
        "Identify 10+ and 20+ year customers.",
        "Plan long-term customer awards event.",
        "Strengthen long-term acquisition and retention strategy.",
      ],
    },
  ];

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
      {/* Consolidated Takeaways Section */}
      <div className="mb-12">
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

      {/* Consolidated Action Points Section */}
      <div>
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-lg p-6 md:p-8 mb-8 text-white">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">
            BMG – Consolidated Action Points
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {actionPointsSections.map((section, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md border border-gray-200 p-6 md:p-8 hover:shadow-lg transition-shadow duration-200"
            >
              <h3 className="font-serif text-lg md:text-xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-gray-200">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, j) => (
                  <li
                    key={j}
                    className="text-sm md:text-base text-gray-700 leading-relaxed flex items-start"
                  >
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Final Direction */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl shadow-lg p-6 md:p-8 text-white">
          <h3 className="font-serif text-xl md:text-2xl font-bold mb-3">Final Direction:</h3>
          <p className="text-base md:text-lg leading-relaxed">
            Think Big. Execute with Discipline. Control the Funnel. Lead with AI. Strengthen
            Relationships. Win as One Team.
          </p>
        </div>
      </div>
    </div>
  );
}
