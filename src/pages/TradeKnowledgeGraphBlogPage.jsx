import React, { useState } from 'react';
import { 
  Network, 
  FileText, 
  Layers, 
  Clock, 
  Sparkles, 
  Database, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Zap, 
  Box, 
  FileCode, 
  RefreshCw, 
  Share2, 
  Server, 
  HardDrive, 
  BarChart3, 
  Building2, 
  ChevronRight,
  GitCommit,
  Lock,
  Search,
  Eye,
  AlertCircle
} from 'lucide-react';

export default function TradeKnowledgeGraphBlogPage({ onOpenModal }) {
  const [activeTab, setActiveTab] = useState('pipeline');
  const [activeStack, setActiveStack] = useState('all');

  // Interactive Diagram 1 State: Traditional vs Graph
  const [activeDiagramStep, setActiveDiagramStep] = useState(0);

  const traditionalSteps = [
    { title: 'Upload PDFs', desc: 'Commercial Invoice, Packing List, BOL, FDA Cert uploaded as separate binary files.' },
    { title: 'Isolated OCR & Parsing', desc: 'Extracts key-value pairs independently per file with zero cross-document awareness.' },
    { title: 'Store Disconnected JSON', desc: 'Saves JSON blobs into database tables without linking shared shipment entities.' },
    { title: 'Forget Everything', desc: 'System retains no compounding context. The next shipment starts completely from scratch.' }
  ];

  const graphSteps = [
    { title: 'Ingest Into Transmission', desc: 'Documents arrive under a single unified Transmission container.' },
    { title: 'Extract Canonical Facts & Evidence', desc: 'Extracts facts with direct bounding-box provenance linked back to source SHA-256 PDFs.' },
    { title: 'Construct Ephemeral Graph', desc: 'Assembles temporary network of Supplier, Product, Container, HTS Code, and Port nodes.' },
    { title: 'Promote Verified Knowledge', desc: 'Once filed, durable entities (Supplier, HTS classification) are promoted to Enterprise Knowledge Graph.' }
  ];

  // Decay Policy Data
  const decayEntities = [
    { entity: 'Shipment & Booking', decay: 'Rapid (Hours/Days)', category: 'Transient', detail: 'Cleared immediately post-filing to prevent prompt clutter.' },
    { entity: 'Commercial Invoice & Packing List', decay: 'Rapid (Days)', category: 'Transient', detail: 'Stored in Object Storage as evidence; graph nodes decay rapidly.' },
    { entity: 'Container & Seal Numbers', decay: 'Rapid (Days)', category: 'Transient', detail: 'Tracking identifiers valid for single voyage context only.' },
    { entity: 'Supplier & Exporter Profile', decay: 'Very Slow (Years)', category: 'Durable', detail: 'Builds multi-year risk profiles, historic accuracy, and port patterns.' },
    { entity: 'Product Master & Catalog', decay: 'Very Slow (Years)', category: 'Durable', detail: 'Accumulates proven specs, attributes, and cross-reconciled invoices.' },
    { entity: 'HTS Classification & Reasoning', decay: 'Stable until Supervised', category: 'Durable', detail: 'Preserves legal GRI logic until official USITC tariff code revisions.' },
    { entity: 'Customs Binding Rulings (CROSS)', decay: 'Essentially Permanent', category: 'Permanent', detail: 'Precedent rulings remain immutable compliance anchors forever.' },
    { entity: 'PGA & Regulatory Constraints', decay: 'Updated on Law Change', category: 'Permanent', detail: 'Federal regulations updated only upon statutory changes (FDA, EPA).' }
  ];

  // Tech Stack Data
  const techStack = [
    { category: 'Object Storage', component: 'AWS S3 / Azure Blob / GCS', role: 'Immutable evidence repository storing raw PDFs, scanned docs & SHA-256 digests.', badge: 'Evidence Layer' },
    { category: 'Relational DB', component: 'PostgreSQL / CockroachDB', role: 'Operational ledger managing users, organizations, workflow state, and filing logs.', badge: 'State & Ops' },
    { category: 'Graph Database', component: 'Neo4j / Memgraph / Neptune', role: 'High-performance property graph storing connected entities & multi-hop relationships.', badge: 'Knowledge Graph' },
    { category: 'Vector Index', component: 'pgvector / Milvus / Qdrant', role: 'Dense embedding index powering semantic similarity search alongside graph traversal.', badge: 'Retrieval' },
    { category: 'Event Bus', component: 'Apache Kafka / Redpanda', role: 'Event-driven streaming bus decoupling document ingestion, OCR, extraction & filing.', badge: 'Event Stream' },
    { category: 'AI & Context Engine', component: 'Context Assembly + Frontier LLM', role: 'Ranks graph subgraphs & feeds structured connected context to Gemini/Claude/GPT-4.', badge: 'Intelligence' }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      
      {/* ARTICLE HEADER / META */}
      <header className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0071E3]/10 border border-[#0071E3]/20 text-[#0071E3] text-xs font-bold shadow-sm">
          <Network className="w-3.5 h-3.5" />
          <span>Architectural Whitepaper · Trade Knowledge Graphs</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1D1D1F] tracking-tight leading-tight">
          Building an AI-Native Trade Knowledge Graph: <br />
          <span className="apple-blue-text-light">Why Document AI Isn't Enough</span>
        </h1>

        <p className="text-base sm:text-lg text-[#6E6E73] leading-relaxed font-medium max-w-2xl mx-auto">
          Today's trade compliance systems think in terms of <strong className="text-[#1D1D1F]">documents</strong>. Our system thinks in terms of <strong className="text-[#0071E3]">knowledge</strong>. Here is why that distinction fundamentally changes how an autonomous trade platform is engineered.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#6E6E73] font-medium border-y border-black/5 py-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#0071E3] text-white flex items-center justify-center font-bold text-[10px]">
              Q
            </div>
            <span className="font-bold text-[#1D1D1F]">Qubere Engineering Team</span>
          </div>
          <span>•</span>
          <span>Published August 2026</span>
          <span>•</span>
          <span>8 min read</span>
        </div>
      </header>

      {/* SECTION 1: THE PROBLEM WITH TRADITIONAL DOCUMENT SYSTEMS */}
      <section className="space-y-8">
        <div className="apple-card-light p-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-600 text-xs font-semibold border border-red-200">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>The Traditional Pipeline Breakdown</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
            The Problem with Traditional Document Processing
          </h2>

          <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed">
            Imagine a standard ocean shipment containing a Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin, and FDA Certificate. Traditional systems process each document independently:
          </p>

          {/* Interactive Pipeline Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            
            {/* Traditional Document Pipeline Card */}
            <div className="p-6 rounded-2xl bg-red-500/5 border border-red-200/60 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-red-600 tracking-wide uppercase">Traditional Document AI</span>
                <span className="text-[10px] bg-red-100 text-red-700 px-2 py-0.5 rounded font-bold">Linear & Fragile</span>
              </div>
              
              <div className="space-y-2 text-xs">
                {['Commercial Invoice ────► Disconnected JSON', 'Packing List ──────────► Disconnected JSON', 'Bill of Lading ────────► Disconnected JSON', 'FDA Certificate ───────► Disconnected JSON'].map((step, idx) => (
                  <div key={idx} className="p-2.5 bg-white/80 rounded-xl border border-red-100 font-mono text-[#1D1D1F]">
                    {step}
                  </div>
                ))}
              </div>

              <ul className="text-xs text-[#6E6E73] space-y-1.5 pt-2 list-disc list-inside font-medium">
                <li>Relationships exist only in fragile application code.</li>
                <li>Duplicate data extracted repeatedly across files.</li>
                <li>Inconsistencies are impossible to catch automatically.</li>
                <li>Prompts grow exponentially, scaling linearly with files.</li>
              </ul>
            </div>

            {/* Qubere Knowledge Graph Pipeline Card */}
            <div className="p-6 rounded-2xl bg-[#0071E3]/5 border border-[#0071E3]/20 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-[#0071E3] tracking-wide uppercase">Qubere Ephemeral Graph</span>
                <span className="text-[10px] bg-[#0071E3]/10 text-[#0071E3] px-2 py-0.5 rounded font-bold">Connected & Provenanced</span>
              </div>
              
              <div className="p-4 bg-white/80 rounded-xl border border-[#0071E3]/20 space-y-3">
                <div className="text-center font-bold text-xs text-[#1D1D1F] bg-[#0071E3]/10 py-1.5 rounded-lg border border-[#0071E3]/20">
                  Transmission Container
                </div>
                <div className="grid grid-cols-3 gap-1 text-[10px] text-center font-semibold text-[#6E6E73]">
                  <div className="p-1.5 bg-white rounded border border-black/5">Invoice</div>
                  <div className="p-1.5 bg-white rounded border border-black/5">Packing List</div>
                  <div className="p-1.5 bg-white rounded border border-black/5">Bill of Lading</div>
                </div>
                <div className="text-center text-[11px] font-bold text-[#0071E3] py-1 bg-[#0071E3]/5 rounded">
                  ▼ Extracted Facts Unified Into Temporary Graph
                </div>
              </div>

              <ul className="text-xs text-[#6E6E73] space-y-1.5 pt-2 list-disc list-inside font-medium">
                <li>Unified entity context across all 5 shipping documents.</li>
                <li>Instant cross-document discrepancy detection.</li>
                <li>Sub-second graph query context for LLMs.</li>
                <li>Only verified durable facts promoted to permanent memory.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: INTERACTIVE ARCHITECTURE DIAGRAM 1 - TRANSACTION GRAPH BUILDER */}
      <section className="space-y-6">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0071E3]/10 border border-[#0071E3]/20 text-[#0071E3] text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive Visual Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F]">
            Every Shipment Becomes a Knowledge Graph
          </h2>
          <p className="text-xs sm:text-sm text-[#86868B]">
            Click through the operational workflow to see how raw document uploads transform into an ephemeral compliance graph.
          </p>
        </div>

        {/* Step Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-[#E8E8ED]/60 p-1.5 rounded-2xl border border-black/5">
          {graphSteps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveDiagramStep(idx)}
              className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all text-left flex flex-col justify-between ${
                activeDiagramStep === idx
                  ? 'bg-white text-[#0071E3] shadow-sm border border-black/5'
                  : 'text-[#6E6E73] hover:text-[#1D1D1F]'
              }`}
            >
              <span className="text-[10px] font-extrabold opacity-60">STEP 0{idx + 1}</span>
              <span className="truncate">{step.title}</span>
            </button>
          ))}
        </div>

        {/* Diagram Display Box */}
        <div className="apple-card-light p-8 space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-black/5 pb-6">
            <div>
              <span className="text-xs font-bold text-[#0071E3] uppercase tracking-wider">
                Phase 0{activeDiagramStep + 1} Execution
              </span>
              <h3 className="text-xl font-extrabold text-[#1D1D1F] mt-1">
                {graphSteps[activeDiagramStep].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#6E6E73] mt-1 font-medium max-w-xl">
                {graphSteps[activeDiagramStep].desc}
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                disabled={activeDiagramStep === 0}
                onClick={() => setActiveDiagramStep(prev => Math.max(0, prev - 1))}
                className="px-3 py-1.5 rounded-xl border border-black/10 text-xs font-bold text-[#1D1D1F] disabled:opacity-40"
              >
                Previous
              </button>
              <button
                disabled={activeDiagramStep === graphSteps.length - 1}
                onClick={() => setActiveDiagramStep(prev => Math.min(graphSteps.length - 1, prev + 1))}
                className="px-3 py-1.5 rounded-xl bg-[#0071E3] text-white text-xs font-bold disabled:opacity-40"
              >
                Next Step
              </button>
            </div>
          </div>

          {/* Graphical Flow Visualization */}
          <div className="p-6 bg-slate-900 rounded-3xl text-white space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Network className="w-64 h-64 text-blue-400" />
            </div>

            {/* Dynamic Graph Visualizer per Step */}
            {activeDiagramStep === 0 && (
              <div className="space-y-4">
                <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">Document Intake & Transmission Boundary</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-2">
                    <div className="flex items-center gap-2 text-blue-400 text-xs font-bold">
                      <FileText className="w-4 h-4" />
                      <span>Commercial Invoice</span>
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono">SHA256: 8f4a...e12a</div>
                  </div>
                  <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-2">
                    <div className="flex items-center gap-2 text-purple-400 text-xs font-bold">
                      <Box className="w-4 h-4" />
                      <span>Packing List</span>
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono">SHA256: c3b9...90ff</div>
                  </div>
                  <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Bill of Lading</span>
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono">SHA256: 12d8...4a33</div>
                  </div>
                </div>
              </div>
            )}

            {activeDiagramStep === 1 && (
              <div className="space-y-4">
                <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">Fact Extraction with Strict Bounding-Box Provenance</div>
                <div className="p-5 bg-slate-800/90 rounded-2xl border border-slate-700 space-y-3 font-mono text-xs">
                  <div className="text-emerald-400 flex items-center gap-2 font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Fact: Country of Origin = "China" (CN)</span>
                  </div>
                  <div className="pl-6 space-y-1 text-slate-300 text-[11px]">
                    <div>├─ Source Document: Commercial_Invoice_0842.pdf (SHA256: 8f4a...)</div>
                    <div>├─ Location: Page 3, Bounding Box [x: 142, y: 580, w: 85, h: 22]</div>
                    <div>└─ Model Confidence: 99.73% (Cross-verified with Certificate of Origin)</div>
                  </div>
                </div>
              </div>
            )}

            {activeDiagramStep === 2 && (
              <div className="space-y-4">
                <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">Ephemeral Transaction Topology</div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="p-3 bg-blue-500/20 border border-blue-400/30 rounded-xl text-blue-200 text-xs font-bold">
                    Transmission Node
                  </div>
                  <div className="p-3 bg-purple-500/20 border border-purple-400/30 rounded-xl text-purple-200 text-xs font-bold">
                    Supplier Entity
                  </div>
                  <div className="p-3 bg-emerald-500/20 border border-emerald-400/30 rounded-xl text-emerald-200 text-xs font-bold">
                    Product Master
                  </div>
                  <div className="p-3 bg-amber-500/20 border border-amber-400/30 rounded-xl text-amber-200 text-xs font-bold">
                    HTS 8504.40.9580
                  </div>
                </div>
                <div className="text-center text-slate-400 text-xs py-2 font-medium">
                  ↔ Multi-directional graph links enable instantaneous compliance validation & PGA checks
                </div>
              </div>
            )}

            {activeDiagramStep === 3 && (
              <div className="space-y-4">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Promotion into Enterprise Knowledge Graph</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 bg-slate-800 rounded-2xl border border-red-500/30 space-y-2">
                    <div className="text-red-400 font-bold">Decayed & Expired (Transient)</div>
                    <div className="text-slate-400 text-[11px]">Invoice numbers, container seals, booking IDs are purged to keep prompt context clean.</div>
                  </div>
                  <div className="p-4 bg-slate-800 rounded-2xl border border-emerald-500/30 space-y-2">
                    <div className="text-emerald-400 font-bold">Promoted to Enterprise Memory (Durable)</div>
                    <div className="text-slate-400 text-[11px]">Verified Supplier profiles, approved product classification rulings, and port inspection histories.</div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* SECTION 3: DOCUMENTS ARE EVIDENCE, NOT KNOWLEDGE */}
      <section className="apple-card-light p-8 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0071E3]/10 border border-[#0071E3]/20 text-[#0071E3] text-xs font-semibold">
          <Lock className="w-3.5 h-3.5" />
          <span>Evidence Graph Topology</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F]">
          Documents Are Evidence, Not Knowledge
        </h2>

        <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed">
          One of the biggest architectural mistakes in legacy trade tech is treating PDFs as knowledge nodes. In our architecture, the document is merely evidence. Knowledge comes from extracted facts anchored to legal evidence nodes.
        </p>

        {/* Evidence Graph Architecture Card */}
        <div className="p-6 rounded-2xl bg-[#E8E8ED]/40 border border-black/5 space-y-4">
          <div className="text-xs font-bold text-[#1D1D1F] uppercase tracking-wider">
            Graph Provenance Architecture
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="p-3 bg-white rounded-xl border border-black/10 font-bold text-[#1D1D1F] shadow-sm">
              Supplier (Shenzhen Tech Co)
            </div>
            <ArrowRight className="w-4 h-4 text-[#0071E3]" />
            <div className="p-3 bg-white rounded-xl border border-black/10 font-bold text-[#1D1D1F] shadow-sm">
              Ships Product (Power Inverter)
            </div>
            <ArrowRight className="w-4 h-4 text-[#0071E3]" />
            <div className="p-3 bg-white rounded-xl border border-black/10 font-bold text-[#1D1D1F] shadow-sm">
              Origin (China)
            </div>
          </div>

          <div className="p-4 bg-white rounded-xl border border-[#0071E3]/20 space-y-2">
            <div className="text-xs font-bold text-[#0071E3] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Supported By Evidence Anchor:</span>
            </div>
            <div className="text-xs text-[#6E6E73] font-mono">
              Document: Commercial_Invoice.pdf | SHA256: 9e3a...11ab | Page 3 | Bounding Box [45, 120, 200, 30] | Confidence: 99.7%
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TIME DECAY POLICIES FOR KNOWLEDGE */}
      <section className="space-y-6">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-200 text-purple-600 text-xs font-semibold">
            <Clock className="w-3.5 h-3.5" />
            <span>Context Hygiene</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F]">
            Dynamic Time Decay Policies
          </h2>
          <p className="text-xs sm:text-sm text-[#86868B]">
            Knowledge should age differently. An invoice from 5 years ago must not pollute active LLM prompts, while a binding tariff ruling remains valid indefinitely.
          </p>
        </div>

        {/* Decay Policy Table */}
        <div className="apple-card-light overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#E8E8ED]/60 border-b border-black/5 text-[#1D1D1F] font-bold">
                  <th className="p-4">Entity Type</th>
                  <th className="p-4">Typical Decay Behavior</th>
                  <th className="p-4">Classification</th>
                  <th className="p-4">Architectural Rationale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5 font-medium text-[#6E6E73]">
                {decayEntities.map((row, idx) => (
                  <tr key={idx} className="hover:bg-black/[0.02] transition-colors">
                    <td className="p-4 font-bold text-[#1D1D1F]">{row.entity}</td>
                    <td className="p-4">
                      <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                        row.decay.includes('Rapid') 
                          ? 'bg-red-500/10 text-red-600 border border-red-200'
                          : row.decay.includes('Very Slow')
                          ? 'bg-[#0071E3]/10 text-[#0071E3] border border-blue-200'
                          : 'bg-emerald-500/10 text-emerald-600 border border-emerald-200'
                      }`}>
                        {row.decay}
                      </span>
                    </td>
                    <td className="p-4 font-semibold text-[#1D1D1F]">{row.category}</td>
                    <td className="p-4 text-xs">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 5: TECHNOLOGY STACK & SYSTEM ARCHITECTURE */}
      <section className="space-y-6">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0071E3]/10 border border-[#0071E3]/20 text-[#0071E3] text-xs font-semibold">
            <Server className="w-3.5 h-3.5" />
            <span>Infrastructure Engineering</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F]">
            Production Technology Stack
          </h2>
          <p className="text-xs sm:text-sm text-[#86868B]">
            Our production stack intentionally separates immutable evidence storage, structured entities, semantic retrieval, and event orchestration.
          </p>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {techStack.map((item, idx) => (
            <div key={idx} className="apple-card-light p-5 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-[#0071E3]/10 text-[#0071E3] border border-[#0071E3]/20">
                    {item.badge}
                  </span>
                  <span className="text-xs font-bold text-[#86868B]">{item.category}</span>
                </div>
                <h3 className="text-base font-bold text-[#1D1D1F]">{item.component}</h3>
                <p className="text-xs text-[#6E6E73] leading-relaxed">{item.role}</p>
              </div>
              <div className="pt-3 border-t border-black/5 text-[11px] text-[#0071E3] font-bold flex items-center justify-between">
                <span>Production Grade</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0071E3]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: CONCRETE REAL-WORLD EXAMPLE */}
      <section className="apple-card-light p-8 sm:p-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-200 text-emerald-600 text-xs font-semibold">
          <Zap className="w-3.5 h-3.5" />
          <span>Real-World Shipment Processing</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F]">
          Concrete Execution: How an Entry Is Cleared
        </h2>

        <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed font-medium">
          When an importer uploads a shipment folder, the platform constructs an ephemeral graph and evaluates cross-entity intelligence instantly:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-medium text-[#1D1D1F]">
          <div className="p-4 bg-white rounded-2xl border border-black/5 space-y-1.5">
            <div className="font-bold text-[#0071E3]">1. Supplier History Match</div>
            <div className="text-[#6E6E73]">Identifies supplier Shenzhen Tech Co used in 482 previous successful shipments.</div>
          </div>
          <div className="p-4 bg-white rounded-2xl border border-black/5 space-y-1.5">
            <div className="font-bold text-[#0071E3]">2. Product Classification Precedent</div>
            <div className="text-[#6E6E73]">Matches product specs to HTS 8504.40.9580, previously accepted by CBP 137 times.</div>
          </div>
          <div className="p-4 bg-white rounded-2xl border border-black/5 space-y-1.5">
            <div className="font-bold text-[#0071E3]">3. Port Risk Intelligence</div>
            <div className="text-[#6E6E73]">Detects recent destination port inspection increases for power supplies and flags required PGA certs.</div>
          </div>
          <div className="p-4 bg-white rounded-2xl border border-black/5 space-y-1.5">
            <div className="font-bold text-[#0071E3]">4. Automated Post-Filing Memory</div>
            <div className="text-[#6E6E73]">Upon government acceptance, newly verified product classifications are promoted to permanent memory.</div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <footer className="apple-card-light p-8 text-center space-y-4">
        <h3 className="text-2xl font-bold text-[#1D1D1F]">Ready to Upgrade from Document AI to Knowledge AI?</h3>
        <p className="text-xs sm:text-sm text-[#6E6E73] max-w-lg mx-auto">
          Schedule a deep-dive architectural session with the Qubere engineering team to explore our autonomous trade graph.
        </p>
        <div className="pt-2 flex justify-center gap-3">
          <button
            onClick={() => onOpenModal('demo')}
            className="px-6 py-3.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
          >
            <span>Request Technical Demo</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </footer>

    </div>
  );
}
