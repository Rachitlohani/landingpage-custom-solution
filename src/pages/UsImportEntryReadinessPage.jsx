import React from 'react';
import { AlertTriangle, CheckCircle2, ShieldCheck, FileText, ChevronRight } from 'lucide-react';

export default function UsImportEntryReadinessPage({ onOpenModal }) {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0071E3]/10 border border-[#0071E3]/20 text-[#0071E3] text-xs font-bold shadow-sm">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Import Risk Management</span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold text-[#1D1D1F] tracking-tight leading-tight">
          U.S. Import Entry Readiness: <br />
          <span className="apple-blue-text-light">Validating Prior to CBP Submission</span>
        </h1>

        <p className="text-base sm:text-lg text-[#6E6E73] max-w-3xl mx-auto leading-relaxed font-normal">
          What import teams must validate before filing entry summaries (CBP Form 7501), where document breakdowns occur, and how evidence controls ensure full compliance.
        </p>

        <div className="pt-4 flex justify-center">
          <button
            onClick={() => onOpenModal('demo')}
            className="px-6 py-3.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/20 transition-all flex items-center gap-2"
          >
            <span>Request Demo</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Where Data Breaks Down */}
      <section className="apple-card-light p-8 sm:p-12 space-y-6">
        <h2 className="text-2xl font-extrabold text-[#1D1D1F]">Where Invoice & Product Data Typically Break Down</h2>
        <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed">
          U.S. Customs and Border Protection (CBP) enforces strict reasonable care standards. However, pre-entry data collection relies heavily on inconsistent supplier commercial invoices, unstructured PDFs, and incomplete SKU databases.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-5 rounded-2xl bg-white border border-black/5 space-y-2">
            <div className="flex items-center gap-2 text-amber-600 font-bold text-xs">
              <AlertTriangle className="w-4 h-4" />
              <span>Vague Descriptions</span>
            </div>
            <h3 className="text-sm font-bold text-[#1D1D1F]">Generic Invoicing</h3>
            <p className="text-xs text-[#6E6E73] leading-relaxed">
              Line items listed simply as "parts", "samples", or "goods" lack the constituent details needed to establish accurate 10-digit HTSUS codes.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-black/5 space-y-2">
            <div className="flex items-center gap-2 text-amber-600 font-bold text-xs">
              <AlertTriangle className="w-4 h-4" />
              <span>Origin Ambiguity</span>
            </div>
            <h3 className="text-sm font-bold text-[#1D1D1F]">Country of Origin Gaps</h3>
            <p className="text-xs text-[#6E6E73] leading-relaxed">
              Shipping location is often confused with country of origin, triggering incorrect tariff assessments and Section 301 surcharge errors.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-black/5 space-y-2">
            <div className="flex items-center gap-2 text-amber-600 font-bold text-xs">
              <AlertTriangle className="w-4 h-4" />
              <span>Missing PGA Flags</span>
            </div>
            <h3 className="text-sm font-bold text-[#1D1D1F]">Unidentified Regulators</h3>
            <p className="text-xs text-[#6E6E73] leading-relaxed">
              Failing to submit required FDA device codes or EPA disclaimers at entry summary leads to immediate hold notices and customs delays.
            </p>
          </div>
        </div>
      </section>

      {/* Validation Framework */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F]">
            The Entry Readiness Validation Framework
          </h2>
          <p className="text-xs sm:text-sm text-[#86868B]">
            Ensuring legal defensibility and reasonable care compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="apple-card-light p-6 space-y-3">
            <div className="flex items-center gap-2 text-[#0071E3] font-bold text-sm">
              <CheckCircle2 className="w-5 h-5 text-[#0071E3]" />
              <span>Deterministic Rule Verification</span>
            </div>
            <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed">
              Every proposed classification is cross-referenced against statutory tariff schedules, General Notes, and past binding rulings to ensure total consistency across entry filings.
            </p>
          </div>

          <div className="apple-card-light p-6 space-y-3">
            <div className="flex items-center gap-2 text-[#0071E3] font-bold text-sm">
              <CheckCircle2 className="w-5 h-5 text-[#0071E3]" />
              <span>Governed Human Approval</span>
            </div>
            <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed">
              Automated systems must never file unverified data. Qubere routes low-confidence items and regulatory flags directly to trade compliance managers for sign-off.
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="apple-card-light p-8 sm:p-12 text-center space-y-6">
        <h2 className="text-3xl font-extrabold text-[#1D1D1F]">Audit-Proof Your Import Entry Process</h2>
        <p className="text-xs sm:text-sm text-[#6E6E73] max-w-xl mx-auto leading-relaxed font-medium">
          Learn how Qubere helps importers maintain compliance audit trails while accelerating entry turnaround times.
        </p>

        <div className="flex justify-center pt-2">
          <button
            onClick={() => onOpenModal('deck')}
            className="px-6 py-3.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-bold text-xs sm:text-sm shadow-lg transition-all"
          >
            Request Pitch Deck & Technical Specification
          </button>
        </div>
      </section>

    </div>
  );
}
