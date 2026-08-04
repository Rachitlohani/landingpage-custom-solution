import React from 'react';
import { BookOpen, ShieldCheck, CheckCircle2, ChevronRight, FileText, User } from 'lucide-react';

export default function EvidenceBackedAiArticlePage({ onOpenModal }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-12">
      
      {/* Article Header */}
      <header className="space-y-6 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0071E3]/10 border border-[#0071E3]/20 text-[#0071E3] text-xs font-bold shadow-sm">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Founder Insights & Leadership</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1D1D1F] tracking-tight leading-tight">
          Why Customs AI Must Be Evidence-Backed Before It Is Autonomous
        </h1>

        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-[#6E6E73] font-medium border-y border-black/5 py-4">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-[#0071E3]" />
            <span className="font-bold text-[#1D1D1F]">Rachit Lohani & Krishna Bandi</span>
          </div>
          <span>•</span>
          <span>Published August 2026</span>
          <span>•</span>
          <span>6 min read</span>
        </div>
      </header>

      {/* Article Content Body */}
      <article className="prose prose-slate max-w-none text-sm sm:text-base text-[#1D1D1F] leading-relaxed space-y-6 font-normal">
        
        <p className="text-lg font-medium text-[#6E6E73] leading-relaxed">
          In recent years, enterprise automation has been flooded with promises of "agentic AI" executing complex workflows without human intervention. However, in heavily regulated domains like cross-border customs and international trade compliance, autonomous decision-making without explicit verification is a liability, not a feature.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] pt-4">The Hallucination Trap in Regulatory Compliance</h2>
        <p>
          General-purpose AI models are probabilistic: they predict the next likely token based on training patterns. When classifying a multi-component electronic assembly or determining rule of origin under USMCA, an ungrounded LLM may produce plausible-sounding HS codes that are completely invalid under federal trade law.
        </p>
        <p>
          Customs authorities such as U.S. Customs and Border Protection (CBP) operate under the legal standard of <strong>Reasonable Care</strong> (19 U.S.C. § 1484). Importers cannot simply claim "the AI told us to file this code." Misclassification carries severe penalties, seizure of goods, and loss of import privileges.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] pt-4">The Architecture of Evidence-Backed Compliance</h2>
        <p>
          To safely deploy artificial intelligence in customs operations, the software architecture must decouple decision generation from compliance verification:
        </p>

        <div className="space-y-4 my-6">
          <div className="apple-card-light p-5 space-y-2">
            <h3 className="text-base font-bold text-[#1D1D1F] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0071E3]" />
              1. Document Grounding & Data Lineage
            </h3>
            <p className="text-xs sm:text-sm text-[#6E6E73]">
              Every proposed attribute must trace directly back to line items in the commercial invoice, bill of lading, or bill of materials (BOM).
            </p>
          </div>

          <div className="apple-card-light p-5 space-y-2">
            <h3 className="text-base font-bold text-[#1D1D1F] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0071E3]" />
              2. Citation of Tariff Rulings & GRIs
            </h3>
            <p className="text-xs sm:text-sm text-[#6E6E73]">
              Classification proposals must include legal justifications based on General Rules of Interpretation (GRIs) and binding CROSS rulings.
            </p>
          </div>

          <div className="apple-card-light p-5 space-y-2">
            <h3 className="text-base font-bold text-[#1D1D1F] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0071E3]" />
              3. Deterministic Rule Validation
            </h3>
            <p className="text-xs sm:text-sm text-[#6E6E73]">
              Hard regulatory schemas and PGA rules (FDA, EPA, FCC) must validate data before it is marked as entry-ready.
            </p>
          </div>

          <div className="apple-card-light p-5 space-y-2">
            <h3 className="text-base font-bold text-[#1D1D1F] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0071E3]" />
              4. Governed Human Approval & Audit Trails
            </h3>
            <p className="text-xs sm:text-sm text-[#6E6E73]">
              High-risk or ambiguous cases automatically escalate to qualified compliance officers with full contextual evidence provided.
            </p>
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] pt-4">Conclusion: Human-in-the-Loop Intelligence</h2>
        <p>
          The future of customs automation is not replacing human experts with unmonitored AI bots. It is empowering compliance teams with an evidence-backed operating layer—turning hours of tedious document verification into instant, review-ready decisions.
        </p>

      </article>

      {/* Article Footer CTA */}
      <footer className="apple-card-light p-8 text-center space-y-4">
        <h3 className="text-xl font-bold text-[#1D1D1F]">See Evidence-Backed Customs AI in Action</h3>
        <p className="text-xs sm:text-sm text-[#6E6E73] max-w-lg mx-auto">
          Schedule a live demonstration of Qubere’s document-to-filing readiness platform with our founding team.
        </p>
        <div className="pt-2 flex justify-center">
          <button
            onClick={() => onOpenModal('demo')}
            className="px-6 py-3.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
          >
            <span>Schedule Demo</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </footer>

    </div>
  );
}
