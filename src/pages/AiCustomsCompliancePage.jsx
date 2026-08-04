import React from 'react';
import { ShieldCheck, FileCheck, Search, Scale, FileText, CheckCircle2, ChevronRight } from 'lucide-react';

export default function AiCustomsCompliancePage({ onOpenModal }) {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0071E3]/10 border border-[#0071E3]/20 text-[#0071E3] text-xs font-bold shadow-sm">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Core Capability</span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold text-[#1D1D1F] tracking-tight leading-tight">
          AI Customs Compliance for <br />
          <span className="apple-blue-text-light">Document-to-Filing Readiness</span>
        </h1>

        <p className="text-base sm:text-lg text-[#6E6E73] max-w-3xl mx-auto leading-relaxed font-normal">
          Qubere is the decision layer before filing. We turn unstructured commercial invoices, bills of lading, and product master data into evidence-backed, review-ready import decisions before they reach customs.
        </p>

        <div className="pt-4 flex justify-center">
          <button
            onClick={() => onOpenModal('demo')}
            className="px-6 py-3.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/20 transition-all flex items-center gap-2"
          >
            <span>Schedule a Demo</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* The Workflow */}
      <section className="apple-card-light p-8 sm:p-12 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F]">
            The Document-to-Filing Workflow
          </h2>
          <p className="text-xs sm:text-sm text-[#86868B]">
            Automating cross-border compliance checks without replacing your custom broker or existing filing systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-black/5 space-y-2">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0071E3] flex items-center justify-center font-bold text-xs">1</div>
            <h3 className="text-sm font-bold text-[#1D1D1F]">Data Extraction</h3>
            <p className="text-xs text-[#6E6E73] leading-relaxed">
              Extract line items, descriptions, values, and origin details from commercial documents automatically.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-black/5 space-y-2">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0071E3] flex items-center justify-center font-bold text-xs">2</div>
            <h3 className="text-sm font-bold text-[#1D1D1F]">HS Classification</h3>
            <p className="text-xs text-[#6E6E73] leading-relaxed">
              Propose 6-digit to 10-digit HS codes with regulatory confidence scores and legal rulings citations.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-black/5 space-y-2">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0071E3] flex items-center justify-center font-bold text-xs">3</div>
            <h3 className="text-sm font-bold text-[#1D1D1F]">Duty & PGA Validation</h3>
            <p className="text-xs text-[#6E6E73] leading-relaxed">
              Estimate duties, Section 301/232 tariffs, and screen Partner Government Agency (FDA, EPA, USDA) flags.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-black/5 space-y-2">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0071E3] flex items-center justify-center font-bold text-xs">4</div>
            <h3 className="text-sm font-bold text-[#1D1D1F]">Human Review & Audit</h3>
            <p className="text-xs text-[#6E6E73] leading-relaxed">
              Route low-confidence line items to compliance experts with complete audit trails prior to submission.
            </p>
          </div>
        </div>
      </section>

      {/* Key Pillars */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="apple-card-light p-6 space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-[#0071E3]/10 border border-[#0071E3]/20 text-[#0071E3] flex items-center justify-center">
            <Search className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-[#1D1D1F]">HS Classification & Duty Estimation</h3>
          <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed">
            Qubere maps product descriptions and component materials against General Rules of Interpretation (GRIs), Explanatory Notes, and CROSS rulings. Get instant duty estimations before goods arrive at customs port.
          </p>
        </div>

        <div className="apple-card-light p-6 space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-[#0071E3]/10 border border-[#0071E3]/20 text-[#0071E3] flex items-center justify-center">
            <Scale className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-[#1D1D1F]">PGA Screening & Regulatory Control</h3>
          <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed">
            Prevent costly border holds by pre-screening entry lines against PGA requirements (FDA, EPA, FCC, USDA). Qubere highlights required permits, registration numbers, and disclaimers ahead of entry creation.
          </p>
        </div>
      </section>

      {/* Positioning Callout */}
      <section className="apple-card-light p-8 sm:p-10 border-l-4 border-l-[#0071E3] space-y-4">
        <h3 className="text-xl font-bold text-[#1D1D1F]">The Decision Layer Before Filing</h3>
        <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed">
          Qubere does not replace your ABI software or broker connections. Instead, Qubere sits upfront in the supply chain—ingesting raw documents, resolving ambiguity, gathering regulatory evidence, and producing review-ready import packages for your brokers and compliance teams.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center py-8 space-y-4">
        <h3 className="text-2xl font-bold text-[#1D1D1F]">Ready to streamline document-to-filing readiness?</h3>
        <button
          onClick={() => onOpenModal('deck')}
          className="px-6 py-3.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-bold text-xs sm:text-sm shadow-lg transition-all"
        >
          Request Qubere Product Overview
        </button>
      </section>

    </div>
  );
}
