import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Building2, 
  Compass, 
  Calculator, 
  Receipt, 
  RotateCcw, 
  FileSearch, 
  Tags, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  X, 
  ChevronRight,
  Cpu
} from 'lucide-react';

export default function ProductSuitePage({ onOpenModal }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productModules = [
    {
      id: 'customs',
      title: 'Customs Clearance Engine',
      subtitle: 'Autonomous Filing & Clearance',
      badge: 'Core Platform',
      badgeColor: 'bg-[#0071E3]/10 text-[#0071E3] border-[#0071E3]/20',
      icon: ShieldCheck,
      desc: 'End-to-end multi-agent document parsing and automated entry summary generation for CBP filings.',
      modalDetail: {
        overview: 'The Qubere Customs Clearance Engine ingests commercial invoices, bills of lading, and packing lists, extracting line items and validating them against trade regulations in real-time.',
        capabilities: [
          'Automated 7501 Entry Summary proposal generation',
          'Cross-document reconciliation (Invoice vs. Packing List vs. BOL)',
          'Real-time PGA screening (FDA, EPA, FCC, USDA)',
          'Direct integration with ABI / ACE customs systems'
        ],
        businessImpact: 'Reduces entry preparation time by up to 90% while enforcing 100% Reasonable Care audit compliance.'
      }
    },
    {
      id: 'customs-brokerage',
      title: 'Customs Brokerage Operating System',
      subtitle: 'Broker Workbench & Exceptions',
      badge: 'Broker Enablement',
      badgeColor: 'bg-purple-500/10 text-purple-600 border-purple-200',
      icon: Building2,
      desc: 'Unified operational workspace empowering licensed customs brokers with AI-driven pre-filing validation and exception queues.',
      modalDetail: {
        overview: 'Designed for customs brokers managing thousands of daily import declarations. Packages low-confidence AI proposals into sub-minute human review cards.',
        capabilities: [
          'Confidence-based automated queue routing',
          'Side-by-side bounding box document verification',
          'Structured override capture for continuous AI learning',
          'SLA tracking for urgent port holds & entry deadlines'
        ],
        businessImpact: 'Allows single brokers to manage 5x more entries without increasing compliance risk or headcount.'
      }
    },
    {
      id: 'trade-advisory',
      title: 'Trade Advisory & Policy Agent',
      subtitle: 'Regulatory & Free Trade Intelligence',
      badge: 'Strategic Compliance',
      badgeColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-200',
      icon: Compass,
      desc: 'AI-driven advisory agent analyzing USMCA, Section 301, Section 232, and global preferential tariff agreements.',
      modalDetail: {
        overview: 'Navigates complex international trade agreements and changing geopolitical tariffs to identify duty savings and compliance guardrails.',
        capabilities: [
          'USMCA / FTA rule-of-origin qualification engine',
          'Section 301 & 232 tariff exclusion monitoring',
          'Antidumping & Countervailing Duty (ADD/CVD) screening',
          'Binding ruling precedent analysis (CROSS rulings)'
        ],
        businessImpact: 'Unlocks millions in tariff savings across global supply chains while mitigating regulatory enforcement.'
      }
    },
    {
      id: 'tariff-simulator',
      title: 'Tariff & Duty Simulator',
      subtitle: 'Landed Cost Scenario Engine',
      badge: 'Financial Modeling',
      badgeColor: 'bg-amber-500/10 text-amber-600 border-amber-200',
      icon: Calculator,
      desc: 'Simulate supply chain landed costs, tariff changes, and sourcing shifts before goods leave the port of origin.',
      modalDetail: {
        overview: 'Empowers procurement and trade finance teams to model total landed costs across alternative origin countries and HTS classifications.',
        capabilities: [
          'Real-time HTS duty and tax calculator',
          'Multi-country origin scenario modeling',
          'Section 301 tariff exposure forecasting',
          'Port-specific fee and harbor maintenance cost estimations'
        ],
        businessImpact: 'Prevents budget surprises by providing 100% transparent landed cost forecasts prior to PO issuance.'
      }
    },
    {
      id: 'tariff-refunds',
      title: 'Tariff Refunds & Overpayment Claims',
      subtitle: 'Automated Post-Summary Corrections',
      badge: 'Capital Recovery',
      badgeColor: 'bg-blue-500/10 text-blue-600 border-blue-200',
      icon: Receipt,
      desc: 'Scan historic import entries to identify overpaid duties, retroactive exclusions, and file Post-Summary Corrections (PSC).',
      modalDetail: {
        overview: 'Automatically audits historic CBP entry filings against retroactively granted tariff exclusions and misclassified line items.',
        capabilities: [
          'Historic 7501 entry data mining & anomaly detection',
          'Retroactive Section 301 exclusion refund identification',
          'Automated Post-Summary Correction (PSC) bundle generation',
          'CBP protest filing preparation and tracking'
        ],
        businessImpact: 'Recovers historical duty overpayments directly back to enterprise balance sheets.'
      }
    },
    {
      id: 'duty-drawback',
      title: 'Duty Drawback Automation',
      subtitle: '99% Export Refund Recovery',
      badge: 'Revenue Recovery',
      badgeColor: 'bg-green-500/10 text-green-600 border-green-200',
      icon: RotateCcw,
      desc: 'Automatically match imported goods with export documentation to claim 99% refunds on duties paid.',
      modalDetail: {
        overview: 'Automates the complex matching of import bills of entry with export bills of lading under TFTEA Duty Drawback regulations.',
        capabilities: [
          'Automated import-to-export line-item matching engine',
          'Unused merchandise & manufacturing drawback calculations',
          'CBP accelerated payment drawback claim generation',
          'Immutable audit trail for 5-year drawback recordkeeping'
        ],
        businessImpact: 'Recovers up to 99% of duties paid on imported merchandise that is subsequently exported or destroyed.'
      }
    },
    {
      id: 'compliance-audit',
      title: 'Automated Compliance Audit Engine',
      subtitle: 'Reasonable Care & Risk Defense',
      badge: 'Audit Defense',
      badgeColor: 'bg-red-500/10 text-red-600 border-red-200',
      icon: FileSearch,
      desc: 'Continuous real-time auditing of entry filings to guarantee 19 U.S.C. § 1484 Reasonable Care compliance.',
      modalDetail: {
        overview: 'Maintains an immutable digital audit room for every import entry, preparing importers for CBP Focused Assessments and audits.',
        capabilities: [
          'Continuous entry anomaly & valuation variance scanning',
          'Automated Reasonable Care audit package assembly',
          'Valuation & Assists compliance check',
          'Supplier risk scoring & historical error telemetry'
        ],
        businessImpact: 'Eliminates CBP audit penalties and protects enterprise Focused Assessment ratings.'
      }
    },
    {
      id: 'classification',
      title: 'AI Classification Engine & HTS Master',
      subtitle: 'GRI-Grounded HS Code Proposal',
      badge: 'Core Intelligence',
      badgeColor: 'bg-indigo-500/10 text-indigo-600 border-indigo-200',
      icon: Tags,
      desc: 'Classify complex products into 10-digit HTSUS codes with legal General Rules of Interpretation (GRI) citations.',
      modalDetail: {
        overview: 'Replaces manual tariff book lookups with multi-modal AI that reasons over technical specs, engineering drawings, and binding rulings.',
        capabilities: [
          '10-digit HTSUS code proposal with confidence scores',
          'General Rules of Interpretation (GRI 1-6) legal grounding',
          'Multi-modal spec sheet & engineering drawing processing',
          'CROSS binding ruling semantic similarity search'
        ],
        businessImpact: 'Accelerates product master classification from hours per SKU to seconds with audit-proof legal backing.'
      }
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      
      {/* HEADER SECTION */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0071E3]/10 border border-[#0071E3]/20 text-[#0071E3] text-xs font-bold shadow-sm">
          <Cpu className="w-3.5 h-3.5" />
          <span>Product Suite · Autonomous Trade Operating Layer</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-[#1D1D1F] tracking-tight leading-tight">
          Intelligent Tools Built For <br />
          <span className="apple-blue-text-light">Modern Trade & Customs.</span>
        </h1>

        <p className="text-sm sm:text-base text-[#6E6E73] font-medium leading-relaxed max-w-2xl mx-auto">
          Explore Qubere’s modular product suite—from autonomous entry clearance and AI classification to tariff simulation and automated duty drawback recovery.
        </p>
      </section>

      {/* PRODUCT MODULES GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {productModules.map((product) => {
          const Icon = product.icon;
          return (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="apple-card-light p-6 cursor-pointer group hover:border-[#0071E3]/40 transition-all flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-[#0071E3]/10 text-[#0071E3] flex items-center justify-center group-hover:bg-[#0071E3] group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors leading-snug">
                    {product.title}
                  </h3>
                  <div className="text-[11px] font-semibold text-[#86868B] mt-0.5">
                    {product.subtitle}
                  </div>
                </div>

                <p className="text-xs text-[#6E6E73] leading-relaxed line-clamp-3 font-medium">
                  {product.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-black/5 flex items-center justify-between text-xs font-bold text-[#0071E3]">
                <span>Explore Capabilities</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </section>

      {/* FEATURED SUMMARY CALLOUT */}
      <section className="apple-card-light p-8 sm:p-10 text-center space-y-4">
        <h2 className="text-2xl font-extrabold text-[#1D1D1F]">Need a Custom Enterprise Configuration?</h2>
        <p className="text-xs sm:text-sm text-[#6E6E73] max-w-xl mx-auto font-medium">
          All Qubere product modules integrate seamlessly with existing ERPs (SAP, Oracle), TMS platforms, and legacy broker systems via typed REST & GraphQL APIs.
        </p>
        <div className="pt-2 flex justify-center">
          <button
            onClick={() => onOpenModal('demo')}
            className="px-6 py-3 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
          >
            <span>Request Technical Architecture Demo</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* PRODUCT DETAIL MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md flex items-center justify-center p-4">
          <div className="apple-card-light bg-white max-w-2xl w-full p-8 space-y-6 relative max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in-95">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-black/5 hover:bg-black/10 text-[#1D1D1F] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#0071E3]/10 text-[#0071E3] flex items-center justify-center">
                <selectedProduct.icon className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-[#1D1D1F]">
                  {selectedProduct.title}
                </h2>
                <div className="text-xs font-semibold text-[#86868B]">
                  {selectedProduct.subtitle}
                </div>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#1D1D1F] leading-relaxed">
              <div className="p-4 bg-[#F5F5F7] rounded-2xl border border-black/5">
                <h4 className="font-bold text-[#1D1D1F] text-xs uppercase tracking-wider mb-1">Module Overview</h4>
                <p className="text-[#6E6E73]">{selectedProduct.modalDetail.overview}</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-[#1D1D1F] text-xs uppercase tracking-wider">Key Capabilities & Features</h4>
                <ul className="space-y-2">
                  {selectedProduct.modalDetail.capabilities.map((cap, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#6E6E73]">
                      <CheckCircle2 className="w-4 h-4 text-[#0071E3] shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-[#0071E3]/5 rounded-2xl border border-[#0071E3]/20 space-y-1">
                <h4 className="font-bold text-[#0071E3] text-xs uppercase tracking-wider">Quantifiable Business Impact</h4>
                <p className="text-xs text-[#1D1D1F] font-semibold">{selectedProduct.modalDetail.businessImpact}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-black/5 flex items-center justify-between">
              <button
                onClick={() => setSelectedProduct(null)}
                className="px-4 py-2 rounded-full border border-black/10 text-xs font-bold text-[#1D1D1F] hover:bg-black/5"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedProduct(null);
                  onOpenModal('demo');
                }}
                className="px-5 py-2 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white text-xs font-bold shadow-md transition-all flex items-center gap-1.5"
              >
                <span>Request Module Demo</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
