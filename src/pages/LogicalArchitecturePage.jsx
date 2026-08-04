import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Workflow, 
  Sparkles, 
  X, 
  CheckCircle2, 
  ChevronRight,
  ArrowDown,
  Lock,
  Layers,
  Cpu,
  Database,
  Server,
  FileCheck,
  UserCheck,
  Network
} from 'lucide-react';

export default function LogicalArchitecturePage({ onOpenModal }) {
  const [selectedComponent, setSelectedComponent] = useState(null);

  // Component metadata for modal popups
  const architectureComponents = {
    // Layer 1: Experience & API
    ops_workspace: {
      id: 'ops_workspace',
      layer: 'EXPERIENCE & API',
      title: 'Operations Workspace',
      subtitle: 'Cases, documents, declarations',
      badge: 'User Experience',
      badgeColor: 'bg-blue-500/10 text-blue-600 border-blue-200',
      summary: 'Central unified UI for compliance officers to view active import cases, original trade document uploads, and proposed tariff filings.',
      description: 'Traditional software hides document context behind nested menus. Qubere’s Operations Workspace presents line-item extraction, origin traces, and proposed declarations side-by-side with raw commercial invoices and bills of lading.',
      keyFeatures: [
        'Multi-document side-by-side verification',
        'Real-time extraction confidence indicators',
        'Direct exception routing to trade specialists',
        'Full case audit trail visualization'
      ],
      aiNativeAdvantage: 'AI does not operate silently in the background; it presents fully cited proposals directly alongside source evidence for instantaneous human validation.'
    },
    reviewer_queue: {
      id: 'reviewer_queue',
      layer: 'EXPERIENCE & API',
      title: 'Reviewer Queue',
      subtitle: 'Evidence, approvals, overrides',
      badge: 'Human Governance',
      badgeColor: 'bg-purple-500/10 text-purple-600 border-purple-200',
      summary: 'Priority inbox for trade compliance experts to inspect low-confidence AI proposals, regulatory flags, and manual override requests.',
      description: 'Instead of forcing human operators to audit 100% of routine declarations, Qubere’s Reviewer Queue routes only edge cases, low-confidence classifications, or high-duty line items requiring explicit human sign-off.',
      keyFeatures: [
        'Confidence-based automated queue sorting',
        'One-click evidence citation inspection',
        'Structured override capture for continuous learning',
        'SLA tracking for urgent customs holds'
      ],
      aiNativeAdvantage: 'Ensures strict compliance with CBP Reasonable Care (19 U.S.C. § 1484) by enforcing governed human sign-off before submission.'
    },
    control_tower: {
      id: 'control_tower',
      layer: 'EXPERIENCE & API',
      title: 'Admin & Control Tower',
      subtitle: 'Policies, quality, performance',
      badge: 'Enterprise Control',
      badgeColor: 'bg-slate-500/10 text-slate-700 border-slate-200',
      summary: 'Executive dashboard for managing enterprise compliance policies, monitoring agent accuracy metrics, and configuring segregation of duties.',
      description: 'Provides compliance officers and IT administrators complete visibility into system performance, accuracy drift, model costs, and regulatory policy enforcement across global operating units.',
      keyFeatures: [
        'Global accuracy and confidence telemetry',
        'Policy threshold configuration per country/jurisdiction',
        'Agent latency and token budget management',
        'Role-based access control & segregation of duties'
      ],
      aiNativeAdvantage: 'Gives enterprise leaders real-time visibility into AI performance and model drift rather than treating AI as an opaque black box.'
    },
    enterprise_apis: {
      id: 'enterprise_apis',
      layer: 'EXPERIENCE & API',
      title: 'Enterprise APIs / SDK',
      subtitle: 'Typed REST, events, webhooks',
      badge: 'Integration Layer',
      badgeColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-200',
      summary: 'Programmatic endpoints for seamless integration with ERPs, TMS, WMS, and custom customs broker software.',
      description: 'Developer-first API suite allowing enterprise systems to trigger automated document-to-filing readiness checks asynchronously, receiving structured payloads and webhook notifications upon completion.',
      keyFeatures: [
        'Typed OpenAPI & GraphQL schemas',
        'Asynchronous event bus webhooks',
        'SDKs for Python, Node.js, and Java',
        'Idempotent payload processing'
      ],
      aiNativeAdvantage: 'Allows Qubere to act as an upfront decision layer ahead of existing legacy systems (SAP, Oracle, E2open, Descartes) without costly rip-and-replace infrastructure.'
    },

    // Layer 2: API Gateway & Boundary
    api_gateway: {
      id: 'api_gateway',
      layer: 'SECURITY & BOUNDARY',
      title: 'API Gateway + Tenant Boundary',
      subtitle: 'SSO/OIDC · RBAC + ABAC · request validation · rate limits · idempotency · regional routing',
      badge: 'Zero-Trust Boundary',
      badgeColor: 'bg-slate-900 text-white border-slate-700',
      summary: 'Hard cryptographic tenant isolation and security perimeter guarding all incoming and outgoing intelligence requests.',
      description: 'Strict multi-tenant security architecture ensuring enterprise data, proprietary product master files, and custom classification rules are fully isolated across tenants with regional data residency guarantees.',
      keyFeatures: [
        'Enterprise SSO (SAML 2.0 / OIDC)',
        'Fine-grained RBAC and Attribute-Based Access Control',
        'Tenant-isolated cryptographic keys',
        'Regional data sovereignty routing (US, EU, APAC)'
      ],
      aiNativeAdvantage: 'Guarantees enterprise customer data is never leaked across tenants or used to train public foundation models.'
    },

    // Layer 3: Control Plane
    durable_workflow: {
      id: 'durable_workflow',
      layer: 'CONTROL PLANE',
      title: 'Durable Workflow Engine',
      subtitle: 'State, retries, timers, compensation and explicit task transitions',
      badge: 'Stateful Orchestration',
      badgeColor: 'bg-blue-500/10 text-blue-600 border-blue-200',
      summary: 'Stateful, fault-tolerant execution engine ensuring long-running customs validation tasks survive infrastructure restarts and external API outages.',
      description: 'LLMs are inherently stateless and unreliable for orchestrating multi-step legal processes. Qubere couples AI intelligence with a durable workflow engine (built on Temporal execution patterns) to guarantee state persistence, deterministic retries, and explicit task step transitions.',
      keyFeatures: [
        'Fault-tolerant execution state persistence',
        'Automatic exponential retries and timeouts',
        'SLA timers for pending broker reviews',
        'Compensation workflows for rollback on failure'
      ],
      aiNativeAdvantage: 'Prevents orphaned AI executions. State is held durably in workflow code while agents propose individual steps.'
    },
    policy_autonomy: {
      id: 'policy_autonomy',
      layer: 'CONTROL PLANE',
      title: 'Policy & Autonomy Engine',
      subtitle: 'Tool permissions, thresholds, approvals and segregation of duties',
      badge: 'Deterministic Guardrails',
      badgeColor: 'bg-purple-500/10 text-purple-600 border-purple-200',
      summary: 'Governing engine that defines what actions agents are authorized to perform based on confidence scores, values, and business rules.',
      description: 'Agents do not have unconditional authority. The Policy Engine evaluates agent output against deterministic confidence thresholds and corporate policies. If a proposed tariff code carries duty implications over a set dollar threshold, the Policy Engine mandates human authorization.',
      keyFeatures: [
        'Dynamic confidence threshold enforcement',
        'Duty value escalation matrix',
        'Strict segregation of duties enforcement',
        'Granular tool execution permissions'
      ],
      aiNativeAdvantage: 'Models propose decisions; the Policy Engine deterministically decides if an agent can execute or must escalate.'
    },
    agent_registry: {
      id: 'agent_registry',
      layer: 'CONTROL PLANE',
      title: 'Agent Registry + Model Gateway',
      subtitle: 'Typed tools, prompt/model versions, routing, budgets and output guards',
      badge: 'Model Abstraction',
      badgeColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-200',
      summary: 'Central directory for registering specialized agents, routing requests to optimal foundation models, and enforcing output schemas.',
      description: 'Decouples business logic from individual model providers (Claude, GPT-4, Gemini). Manages prompt versions, model token budgets, fallback routing, and strict JSON output validation schemas.',
      keyFeatures: [
        'Multi-model provider abstraction & fallbacks',
        'Strict JSON Schema output validation',
        'Token usage and latency budget monitoring',
        'Prompt versioning and regression testing harness'
      ],
      aiNativeAdvantage: 'Protects the enterprise from model lock-in while enforcing hard schema contracts on all LLM outputs.'
    },
    human_task_service: {
      id: 'human_task_service',
      layer: 'CONTROL PLANE',
      title: 'Human Task Service',
      subtitle: 'Assignment, evidence packages, SLA, approval and override capture',
      badge: 'Human-in-the-Loop',
      badgeColor: 'bg-orange-500/10 text-orange-600 border-orange-200',
      summary: 'Stateful service managing human review assignments, evidence packaging, and capturing specialist overrides.',
      description: 'When an agent escalates a low-confidence decision, the Human Task Service packages the relevant document extracts, historical precedents, and legal ruling citations into an actionable review bundle.',
      keyFeatures: [
        'Smart reviewer workload assignment',
        'Pre-packaged evidence bundles for fast auditing',
        'Structured rationale capture on override',
        'Escalation timers for impending entry deadlines'
      ],
      aiNativeAdvantage: 'Transforms tedious manual research into a sub-minute review process where human experts simply verify pre-gathered evidence.'
    },

    // Layer 4: Domain & Intelligence Services
    document_intelligence: {
      id: 'document_intelligence',
      layer: 'DOMAIN & INTELLIGENCE SERVICES',
      title: 'Document Intelligence',
      subtitle: 'Intake, OCR, extraction, versioning, reconciliation',
      badge: 'Unstructured Intake',
      badgeColor: 'bg-blue-500/10 text-blue-600 border-blue-200',
      summary: 'Ingests messy trade documents (commercial invoices, packing lists, BLs) and extracts structured product line items with version tracking.',
      description: 'Multi-modal intake pipeline capable of parsing scanned PDFs, low-quality images, and multi-language commercial invoices. Cross-reconciles quantities, values, and product descriptions across shipping documents to spot discrepancies early.',
      keyFeatures: [
        'Multi-modal document OCR and layout parsing',
        'Multi-language commercial invoice extraction',
        'Document cross-reconciliation (Invoice vs Packing List)',
        'Immutable document versioning'
      ],
      aiNativeAdvantage: 'Replaces manual data entry with high-precision extraction tied directly to bounding box coordinates on the original document.'
    },
    trade_data_master: {
      id: 'trade_data_master',
      layer: 'DOMAIN & INTELLIGENCE SERVICES',
      title: 'Trade Data & Master',
      subtitle: 'Cases, shipments, parties, products and line items',
      badge: 'Domain Master',
      badgeColor: 'bg-slate-500/10 text-slate-700 border-slate-200',
      summary: 'Domain data service maintaining canonical representations of products, bill of materials (BOM), supplier entities, and shipment cases.',
      description: 'Normalizes disparate supplier product codes and descriptions into unified enterprise master product profiles, tracking historical classifications and country of origin certificates.',
      keyFeatures: [
        'Canonical product SKU master management',
        'BOM component breakdown indexing',
        'Supplier entity & facility mapping',
        'Historical declaration lineage tracking'
      ],
      aiNativeAdvantage: 'Provides clean, structured context to agents so classification decisions are based on enriched master data rather than raw text alone.'
    },
    knowledge_retrieval: {
      id: 'knowledge_retrieval',
      layer: 'DOMAIN & INTELLIGENCE SERVICES',
      title: 'Knowledge & Retrieval',
      subtitle: 'Versioned sources, hybrid search, citations, graph',
      badge: 'RAG & Graph Hub',
      badgeColor: 'bg-purple-500/10 text-purple-600 border-purple-200',
      summary: 'Hybrid search engine combining vector embeddings, legal text search, and knowledge graph queries across customs regulations and rulings.',
      description: 'Grounds AI models in authoritative legal sources. Indexes HTSUS tariff schedules, CROSS rulings, General Rules of Interpretation (GRIs), and Section 301/232 exclusions into a versioned, queryable knowledge graph.',
      keyFeatures: [
        'Hybrid vector + BM25 keyword search',
        'CROSS ruling & WCO explanatory notes graph index',
        'Versioned tariff schedule snapshotting',
        'Verifiable citation generator'
      ],
      aiNativeAdvantage: 'Eliminates model hallucination by enforcing that every proposed HS code is backed by specific legal citations and rulings.'
    },
    decision_services: {
      id: 'decision_services',
      layer: 'DOMAIN & INTELLIGENCE SERVICES',
      title: 'Decision Services',
      subtitle: 'Classification, origin, valuation recommendations',
      badge: 'Core Intelligence',
      badgeColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-200',
      summary: 'Specialized domain intelligence services generating tariff classification, country of origin, and valuation recommendations.',
      description: 'Runs discrete agentic reasoning pipelines for Harmonized System (HS) code classification, USMCA/FTA origin determination, and customs valuation rules.',
      keyFeatures: [
        '6-to-10 digit HTSUS classification reasoning',
        'Rules of Origin & Tariff Shift calculation',
        'Customs valuation method evaluation',
        'Reasoning chain generation with evidence scores'
      ],
      aiNativeAdvantage: 'Decouples reasoning into modular microservices instead of relying on a single monolith prompt.'
    },
    compliance_risk: {
      id: 'compliance_risk',
      layer: 'DOMAIN & INTELLIGENCE SERVICES',
      title: 'Compliance & Risk',
      subtitle: 'Rules, screening, readiness, exceptions and scoring',
      badge: 'Deterministic Rules',
      badgeColor: 'bg-red-500/10 text-red-600 border-red-200',
      summary: 'Deterministic compliance engine evaluating proposals against hard legal schemas, denied party lists, and PGA requirements.',
      description: 'Validates proposed import lines against Partner Government Agency (PGA) flag rules (FDA, EPA, FCC, USDA), sanction lists, and country-specific entry constraints before marking an entry ready.',
      keyFeatures: [
        'Partner Government Agency (PGA) mandatory flag checks',
        'Denied party & sanctions list screening',
        'Section 301 / 232 tariff surcharge calculation',
        'Filing readiness confidence scoring'
      ],
      aiNativeAdvantage: 'Acts as a strict deterministic check that AI recommendations can never bypass.'
    },
    filing_response: {
      id: 'filing_response',
      layer: 'DOMAIN & INTELLIGENCE SERVICES',
      title: 'Filing & Response',
      subtitle: 'Country mapping, schemas, submission and responses',
      badge: 'Filing Bridge',
      badgeColor: 'bg-amber-500/10 text-amber-700 border-amber-200',
      summary: 'Translates validated import packages into country-specific customs filing schemas (CBP ACE 7501, ATLAS, Single Window).',
      description: 'Formats entry data into precise electronic data interchange (EDI/XML) payloads required by customs brokers and border authorities, tracking filing acknowledgments and response messages.',
      keyFeatures: [
        'CBP ABI / ACE Form 7501 schema generation',
        'Multi-country customs message transformation',
        'Automated broker EDI transmission package creation',
        'Real-time entry clearance response handling'
      ],
      aiNativeAdvantage: 'Ensures 100% syntactically valid payloads are generated directly from evidence-backed decisions.'
    },

    // Layer 5: Shared Trust Fabric
    shared_trust_fabric: {
      id: 'shared_trust_fabric',
      layer: 'TRUST & AUDIT LAYER',
      title: 'Shared Trust Fabric',
      subtitle: 'Evidence + decision ledger · event bus · notification service · OpenTelemetry traces/metrics/logs · AI evaluations · secrets and key management',
      badge: 'Immutable Ledger & Telemetry',
      badgeColor: 'bg-blue-600 text-white border-blue-700',
      summary: 'Unified trust and observability backbone recording every model inference, document snippet, rule check, and human approval into an immutable audit ledger.',
      description: 'In regulated enterprise trade, auditability is everything. The Shared Trust Fabric logs complete decision provenance—what model version was used, which exact document line items were extracted, which legal rulings were cited, and who approved the filing.',
      keyFeatures: [
        'Immutable cryptographic decision ledger',
        'Full OpenTelemetry tracing across all AI agent calls',
        'Automated AI evaluation and regression benchmarking',
        'Enterprise secrets and KMS key rotation'
      ],
      aiNativeAdvantage: 'Provides total legal defensibility during customs audits by preserving an unalterable history of how every import decision was reached.'
    },

    // Layer 6: Data & External Systems
    transactional_store: {
      id: 'transactional_store',
      layer: 'DATA & EXTERNAL SYSTEMS',
      title: 'Transactional Store',
      subtitle: 'Tenant-isolated relational data',
      badge: 'Relational DB',
      badgeColor: 'bg-slate-500/10 text-slate-700 border-slate-200',
      summary: 'High-performance tenant-isolated relational database storing cases, declarations, audit logs, and system state.',
      description: 'Transactional storage with hard tenant isolation policies preventing any data co-mingling across enterprise accounts.',
      keyFeatures: ['PostgreSQL tenant-isolated schemas', 'ACID compliant transaction logging', 'Automated encryption at rest'],
      aiNativeAdvantage: 'Holds authoritative system state that AI models can read but never mutate directly.'
    },
    object_evidence_store: {
      id: 'object_evidence_store',
      layer: 'DATA & EXTERNAL SYSTEMS',
      title: 'Object + Evidence Store',
      subtitle: 'Originals, versions, WORM archive',
      badge: 'WORM Storage',
      badgeColor: 'bg-[#0071E3]/10 text-[#0071E3] border-[#0071E3]/20',
      summary: 'Write-Once-Read-Many (WORM) storage for original PDF documents, invoices, customs receipts, and immutable evidence packages.',
      description: 'Ensures original documents submitted by suppliers remain tamper-proof and legally verifiable for customs audits up to 5+ years.',
      keyFeatures: ['S3/GCS WORM object locking', 'SHA-256 document hashing', 'Version-controlled original assets'],
      aiNativeAdvantage: 'Retains 100% untampered document provenance for every AI extraction.'
    },
    search_vector_graph: {
      id: 'search_vector_graph',
      layer: 'DATA & EXTERNAL SYSTEMS',
      title: 'Search / Vector / Graph',
      subtitle: 'Derived indexes; rebuildable',
      badge: 'AI Indexing',
      badgeColor: 'bg-purple-500/10 text-purple-600 border-purple-200',
      summary: 'Derived indexing layer housing dense vector embeddings, full-text search indexes, and graph relational topologies.',
      description: 'Stores semantic vector representations of product descriptions, legal rulings, and HTS codes to power fast hybrid RAG lookups.',
      keyFeatures: ['pgvector / HNSW vector indexing', 'Neo4j / NetworkX graph relations', 'Rebuildable from primary stores'],
      aiNativeAdvantage: 'Enables sub-second hybrid retrieval across millions of customs ruling documents.'
    },
    enterprise_systems: {
      id: 'enterprise_systems',
      layer: 'DATA & EXTERNAL SYSTEMS',
      title: 'Enterprise Systems',
      subtitle: 'ERP, PLM/PIM, WMS/TMS, email',
      badge: 'Legacy Systems',
      badgeColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-200',
      summary: 'Upstream enterprise systems feeding product catalog data, purchase orders, and warehouse receipts into Qubere.',
      description: 'Connectors for SAP S/4HANA, Oracle SCM, Infor, E2open, and enterprise email streams for automated intake.',
      keyFeatures: ['SAP & Oracle bi-directional connectors', 'Webhooks for TMS shipment triggers', 'Automated email inbox polling'],
      aiNativeAdvantage: 'Connects seamlessly without requiring changes to core enterprise IT infrastructure.'
    },
    authorities_gateways: {
      id: 'authorities_gateways',
      layer: 'DATA & EXTERNAL SYSTEMS',
      title: 'Authorities',
      subtitle: 'Filing gateways and responses',
      badge: 'Customs Ports',
      badgeColor: 'bg-rose-500/10 text-rose-600 border-rose-200',
      summary: 'Government gateways and customs clearance networks receiving entry summaries and returning customs responses.',
      description: 'Direct interface with U.S. Customs ACE, European ATLAS, UK CDS, and global single window ports via accredited brokers.',
      keyFeatures: ['CBP ACE / ABI portal integration', 'Automated CBP Form 7501 response polling', 'Broker EDI gateway dispatch'],
      aiNativeAdvantage: 'Filing readiness payload is fully pre-validated before reaching official government portals.'
    },

    // Layer 7: Hard Boundary Guardrail
    hard_boundary: {
      id: 'hard_boundary',
      layer: 'TRUST BOUNDARY',
      title: 'Hard Trust Boundary Guardrail',
      subtitle: 'Models cannot directly submit declarations, change policy, or write authoritative master data.',
      badge: 'Safety Circuit Breaker',
      badgeColor: 'bg-rose-600 text-white border-rose-700',
      summary: 'Architectural circuit breaker enforcing that probabilistic AI models can NEVER directly execute legal filings or alter master data without validation.',
      description: 'The fundamental architectural principle of Qubere: probabilistic AI models propose decisions, but deterministic rule engines validate them, corporate policies govern them, and authorized human specialists approve them before anything is filed.',
      keyFeatures: [
        'Zero direct DB write access for AI models',
        'Isolated execution sandboxes for prompt tools',
        'Mandatory policy validation before broker submission',
        'Cryptographic enforcement of segregation of duties'
      ],
      aiNativeAdvantage: 'The core reason investors and enterprise customers trust Qubere: we engineer AI with strict architectural boundaries, eliminating catastrophic autonomous errors.'
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      
      {/* Header Section */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1D1D1F] tracking-tight leading-tight">
          Qubere.ai logical architecture
        </h1>

        <p className="text-base sm:text-lg text-[#6E6E73] leading-relaxed font-normal">
          Durable workflows hold state; agents propose; deterministic services validate; policy and people authorize.
        </p>
      </section>

      {/* PURE NATIVE HTML/CSS CLICKABLE DIAGRAM MATCHING EXACT SPECIFICATION */}
      <section className="apple-card-light p-6 sm:p-10 space-y-8 bg-[#FAF9F6] border border-black/10 rounded-3xl shadow-sm">
        
        <div className="border-b border-black/10 pb-4">
          <h2 className="text-2xl font-black text-[#1D1D1F] tracking-tight">Qubere.ai logical architecture</h2>
          <p className="text-xs text-[#6E6E73] font-medium mt-0.5">Durable workflows hold state; agents propose; deterministic services validate; policy and people authorize.</p>
        </div>

        {/* DIAGRAM CANVAS */}
        <div className="space-y-6 text-left">
          
          {/* LAYER 1: EXPERIENCE & API */}
          <div className="space-y-2">
            <div className="text-[11px] font-extrabold tracking-wider text-[#6E6E73] uppercase">EXPERIENCE & API</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              
              <button 
                onClick={() => setSelectedComponent(architectureComponents.ops_workspace)}
                className="p-4 rounded-xl bg-white border border-black/15 shadow-sm text-left hover:border-[#0071E3] hover:ring-2 hover:ring-[#0071E3]/20 transition-all group cursor-pointer"
              >
                <div className="text-sm font-bold text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors">Operations workspace</div>
                <div className="text-xs text-[#6E6E73] mt-1 font-medium">Cases, documents, declarations</div>
              </button>

              <button 
                onClick={() => setSelectedComponent(architectureComponents.reviewer_queue)}
                className="p-4 rounded-xl bg-white border border-black/15 shadow-sm text-left hover:border-[#0071E3] hover:ring-2 hover:ring-[#0071E3]/20 transition-all group cursor-pointer"
              >
                <div className="text-sm font-bold text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors">Reviewer queue</div>
                <div className="text-xs text-[#6E6E73] mt-1 font-medium">Evidence, approvals, overrides</div>
              </button>

              <button 
                onClick={() => setSelectedComponent(architectureComponents.control_tower)}
                className="p-4 rounded-xl bg-white border border-black/15 shadow-sm text-left hover:border-[#0071E3] hover:ring-2 hover:ring-[#0071E3]/20 transition-all group cursor-pointer"
              >
                <div className="text-sm font-bold text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors">Admin & control tower</div>
                <div className="text-xs text-[#6E6E73] mt-1 font-medium">Policies, quality, performance</div>
              </button>

              <button 
                onClick={() => setSelectedComponent(architectureComponents.enterprise_apis)}
                className="p-4 rounded-xl bg-white border border-black/15 shadow-sm text-left hover:border-[#0071E3] hover:ring-2 hover:ring-[#0071E3]/20 transition-all group cursor-pointer"
              >
                <div className="text-sm font-bold text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors">Enterprise APIs / SDK</div>
                <div className="text-xs text-[#6E6E73] mt-1 font-medium">Typed REST, events, webhooks</div>
              </button>

            </div>
          </div>

          {/* LAYER 2: API GATEWAY & TENANT BOUNDARY (DARK BAR) */}
          <button 
            onClick={() => setSelectedComponent(architectureComponents.api_gateway)}
            className="w-full p-3.5 rounded-xl bg-[#0F172A] text-white border border-slate-800 shadow-md text-left hover:bg-[#1E293B] hover:ring-2 hover:ring-[#0071E3] transition-all cursor-pointer group"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="text-sm font-extrabold tracking-tight group-hover:text-blue-300 transition-colors">
                API gateway + tenant boundary
              </div>
              <div className="text-xs text-slate-300 font-medium">
                SSO/OIDC · RBAC + ABAC · request validation · rate limits · idempotency · regional routing
              </div>
            </div>
          </button>

          {/* LAYER 3: CONTROL PLANE */}
          <div className="space-y-2">
            <div className="text-[11px] font-extrabold tracking-wider text-[#6E6E73] uppercase">CONTROL PLANE</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              
              <button 
                onClick={() => setSelectedComponent(architectureComponents.durable_workflow)}
                className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 shadow-sm text-left hover:border-blue-500 hover:ring-2 hover:ring-blue-500/20 transition-all group cursor-pointer"
              >
                <div className="text-sm font-bold text-blue-900 group-hover:text-[#0071E3] transition-colors">Durable workflow engine</div>
                <div className="text-xs text-blue-800/80 mt-1 font-medium">State, retries, timers, compensation and explicit task transitions</div>
              </button>

              <button 
                onClick={() => setSelectedComponent(architectureComponents.policy_autonomy)}
                className="p-4 rounded-xl bg-purple-50/60 border border-purple-200 shadow-sm text-left hover:border-purple-500 hover:ring-2 hover:ring-purple-500/20 transition-all group cursor-pointer"
              >
                <div className="text-sm font-bold text-purple-900 group-hover:text-purple-600 transition-colors">Policy & autonomy engine</div>
                <div className="text-xs text-purple-800/80 mt-1 font-medium">Tool permissions, thresholds, approvals and segregation of duties</div>
              </button>

              <button 
                onClick={() => setSelectedComponent(architectureComponents.agent_registry)}
                className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 shadow-sm text-left hover:border-emerald-500 hover:ring-2 hover:ring-emerald-500/20 transition-all group cursor-pointer"
              >
                <div className="text-sm font-bold text-emerald-900 group-hover:text-emerald-600 transition-colors">Agent registry + model gateway</div>
                <div className="text-xs text-emerald-800/80 mt-1 font-medium">Typed tools, prompt/model versions, routing, budgets and output guards</div>
              </button>

              <button 
                onClick={() => setSelectedComponent(architectureComponents.human_task_service)}
                className="p-4 rounded-xl bg-orange-50/60 border border-orange-200 shadow-sm text-left hover:border-orange-500 hover:ring-2 hover:ring-orange-500/20 transition-all group cursor-pointer"
              >
                <div className="text-sm font-bold text-orange-900 group-hover:text-orange-600 transition-colors">Human task service</div>
                <div className="text-xs text-orange-800/80 mt-1 font-medium">Assignment, evidence packages, SLA, approval and override capture</div>
              </button>

            </div>
          </div>

          {/* LAYER 4: DOMAIN & INTELLIGENCE SERVICES */}
          <div className="space-y-2">
            <div className="text-[11px] font-extrabold tracking-wider text-[#6E6E73] uppercase">DOMAIN & INTELLIGENCE SERVICES</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
              
              <button 
                onClick={() => setSelectedComponent(architectureComponents.document_intelligence)}
                className="p-3.5 rounded-xl bg-white border border-black/15 shadow-sm text-left hover:border-[#0071E3] hover:ring-2 hover:ring-[#0071E3]/20 transition-all group cursor-pointer"
              >
                <div className="text-xs font-bold text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors leading-tight">Document intelligence</div>
                <div className="text-[11px] text-[#6E6E73] mt-1 font-medium leading-tight">Intake, OCR, extraction, versioning, reconciliation</div>
              </button>

              <button 
                onClick={() => setSelectedComponent(architectureComponents.trade_data_master)}
                className="p-3.5 rounded-xl bg-white border border-black/15 shadow-sm text-left hover:border-[#0071E3] hover:ring-2 hover:ring-[#0071E3]/20 transition-all group cursor-pointer"
              >
                <div className="text-xs font-bold text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors leading-tight">Trade data & master</div>
                <div className="text-[11px] text-[#6E6E73] mt-1 font-medium leading-tight">Cases, shipments, parties, products and line items</div>
              </button>

              <button 
                onClick={() => setSelectedComponent(architectureComponents.knowledge_retrieval)}
                className="p-3.5 rounded-xl bg-white border border-black/15 shadow-sm text-left hover:border-[#0071E3] hover:ring-2 hover:ring-[#0071E3]/20 transition-all group cursor-pointer"
              >
                <div className="text-xs font-bold text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors leading-tight">Knowledge & retrieval</div>
                <div className="text-[11px] text-[#6E6E73] mt-1 font-medium leading-tight">Versioned sources, hybrid search, citations, graph</div>
              </button>

              <button 
                onClick={() => setSelectedComponent(architectureComponents.decision_services)}
                className="p-3.5 rounded-xl bg-white border border-black/15 shadow-sm text-left hover:border-[#0071E3] hover:ring-2 hover:ring-[#0071E3]/20 transition-all group cursor-pointer"
              >
                <div className="text-xs font-bold text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors leading-tight">Decision services</div>
                <div className="text-[11px] text-[#6E6E73] mt-1 font-medium leading-tight">Classification, origin, valuation recommendations</div>
              </button>

              <button 
                onClick={() => setSelectedComponent(architectureComponents.compliance_risk)}
                className="p-3.5 rounded-xl bg-white border border-black/15 shadow-sm text-left hover:border-[#0071E3] hover:ring-2 hover:ring-[#0071E3]/20 transition-all group cursor-pointer"
              >
                <div className="text-xs font-bold text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors leading-tight">Compliance & risk</div>
                <div className="text-[11px] text-[#6E6E73] mt-1 font-medium leading-tight">Rules, screening, readiness, exceptions and scoring</div>
              </button>

              <button 
                onClick={() => setSelectedComponent(architectureComponents.filing_response)}
                className="p-3.5 rounded-xl bg-white border border-black/15 shadow-sm text-left hover:border-[#0071E3] hover:ring-2 hover:ring-[#0071E3]/20 transition-all group cursor-pointer"
              >
                <div className="text-xs font-bold text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors leading-tight">Filing & response</div>
                <div className="text-[11px] text-[#6E6E73] mt-1 font-medium leading-tight">Country mapping, schemas, submission and responses</div>
              </button>

            </div>
          </div>

          {/* LAYER 5: SHARED TRUST FABRIC (LIGHT BLUE BAR) */}
          <button 
            onClick={() => setSelectedComponent(architectureComponents.shared_trust_fabric)}
            className="w-full p-3.5 rounded-xl bg-blue-100/70 border border-blue-300 text-blue-950 shadow-sm text-left hover:bg-blue-200/70 hover:ring-2 hover:ring-[#0071E3] transition-all cursor-pointer group"
          >
            <div className="text-xs sm:text-sm font-extrabold text-blue-950 group-hover:text-[#0071E3] transition-colors">Shared trust fabric</div>
            <div className="text-[11px] sm:text-xs text-blue-900/80 mt-0.5 font-medium">
              Evidence + decision ledger · event bus · notification service · OpenTelemetry traces/metrics/logs · AI evaluations · secrets and key management
            </div>
          </button>

          {/* LAYER 6: DATA & EXTERNAL SYSTEMS */}
          <div className="space-y-2">
            <div className="text-[11px] font-extrabold tracking-wider text-[#6E6E73] uppercase">DATA & EXTERNAL SYSTEMS</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              
              <button 
                onClick={() => setSelectedComponent(architectureComponents.transactional_store)}
                className="p-3.5 rounded-xl bg-white border border-black/15 shadow-sm text-left hover:border-[#0071E3] hover:ring-2 hover:ring-[#0071E3]/20 transition-all group cursor-pointer"
              >
                <div className="text-xs font-bold text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors leading-tight">Transactional store</div>
                <div className="text-[11px] text-[#6E6E73] mt-1 font-medium leading-tight">Tenant-isolated relational data</div>
              </button>

              <button 
                onClick={() => setSelectedComponent(architectureComponents.object_evidence_store)}
                className="p-3.5 rounded-xl bg-white border border-black/15 shadow-sm text-left hover:border-[#0071E3] hover:ring-2 hover:ring-[#0071E3]/20 transition-all group cursor-pointer"
              >
                <div className="text-xs font-bold text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors leading-tight">Object + evidence store</div>
                <div className="text-[11px] text-[#6E6E73] mt-1 font-medium leading-tight">Originals, versions, WORM archive</div>
              </button>

              <button 
                onClick={() => setSelectedComponent(architectureComponents.search_vector_graph)}
                className="p-3.5 rounded-xl bg-white border border-black/15 shadow-sm text-left hover:border-[#0071E3] hover:ring-2 hover:ring-[#0071E3]/20 transition-all group cursor-pointer"
              >
                <div className="text-xs font-bold text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors leading-tight">Search / vector / graph</div>
                <div className="text-[11px] text-[#6E6E73] mt-1 font-medium leading-tight">Derived indexes; rebuildable</div>
              </button>

              <button 
                onClick={() => setSelectedComponent(architectureComponents.enterprise_systems)}
                className="p-3.5 rounded-xl bg-white border border-black/15 shadow-sm text-left hover:border-[#0071E3] hover:ring-2 hover:ring-[#0071E3]/20 transition-all group cursor-pointer"
              >
                <div className="text-xs font-bold text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors leading-tight">Enterprise systems</div>
                <div className="text-[11px] text-[#6E6E73] mt-1 font-medium leading-tight">ERP, PLM/PIM, WMS/TMS, email</div>
              </button>

              <button 
                onClick={() => setSelectedComponent(architectureComponents.authorities_gateways)}
                className="p-3.5 rounded-xl bg-white border border-black/15 shadow-sm text-left hover:border-[#0071E3] hover:ring-2 hover:ring-[#0071E3]/20 transition-all group cursor-pointer"
              >
                <div className="text-xs font-bold text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors leading-tight">Authorities</div>
                <div className="text-[11px] text-[#6E6E73] mt-1 font-medium leading-tight">Filing gateways and responses</div>
              </button>

            </div>
          </div>

          {/* LAYER 7: HARD BOUNDARY (PINK/RED BAR) */}
          <button 
            onClick={() => setSelectedComponent(architectureComponents.hard_boundary)}
            className="w-full p-3 rounded-xl bg-rose-100/80 border border-rose-300 text-rose-950 shadow-sm text-center hover:bg-rose-200/90 hover:ring-2 hover:ring-rose-500 transition-all cursor-pointer group"
          >
            <div className="text-xs sm:text-sm font-extrabold text-rose-950 group-hover:text-rose-700 transition-colors">
              Hard boundary: models cannot directly submit declarations, change policy, or write authoritative master data.
            </div>
          </button>

        </div>

        <div className="text-center text-xs text-[#86868B] font-medium pt-2 italic">
          Figure 1. Logical architecture and hard trust boundary.
        </div>

      </section>

      {/* ESSAY / THOUGHT LEADERSHIP BLOG: WHY WE ARE DIFFERENT & WHAT AI-NATIVE LOOKS LIKE */}
      <article className="apple-card-light p-8 sm:p-12 space-y-8 text-[#1D1D1F]">
        <div className="border-b border-black/10 pb-6 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 text-xs font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Architecture Whitepaper</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1D1D1F] tracking-tight">
            Why Qubere Is Different: Building Truly AI-Native Enterprise Services
          </h2>
          <p className="text-xs sm:text-sm text-[#6E6E73] font-medium">
            By Rachit Lohani & Krishna Bandi • Engineering Whitepaper for Investors & Enterprise Leaders
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed space-y-6 font-normal">
          
          <h3 className="text-xl font-bold text-[#1D1D1F]">1. The Flaw of "AI Wrapper" Architectures in Regulated Trade</h3>
          <p>
            Most legacy trade compliance vendors approach artificial intelligence by taking existing 20-year-old monolithic software and wrapping an LLM API call around a form field. When an import line item needs classification, they send a raw prompt to a model and display the answer in a text box.
          </p>
          <p>
            In regulated international trade, this approach is fundamentally broken. LLMs are probabilistic engines designed for fluid text generation, whereas customs compliance (CBP 19 U.S.C., HTSUS, General Rules of Interpretation) is strictly deterministic and legally binding. An ungrounded wrapper will inevitably hallucinate tariff codes, miss Section 301 surcharges, or fail Partner Government Agency (FDA/EPA) flags—leaving the importer liable for massive customs penalties.
          </p>

          <h3 className="text-xl font-bold text-[#1D1D1F]">2. What Does "AI-Native" Architecture Actually Mean?</h3>
          <p>
            Being <strong>AI-native</strong> does not mean giving an AI model full autonomous control to write directly to your database or file entries with customs authorities. True AI-native architecture decouples stateful execution, deterministic validation, and model intelligence into distinct service layers:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="p-5 rounded-2xl bg-white border border-black/10 space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#0071E3] text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Stateful Workflows Hold State</span>
              </div>
              <p className="text-xs text-[#6E6E73] leading-relaxed">
                Workflow states, timers, retries, and document versions are managed durably outside the AI model. Infrastructure crashes never lose case state.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-black/10 space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#0071E3] text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Specialized Agents Propose</span>
              </div>
              <p className="text-xs text-[#6E6E73] leading-relaxed">
                Discrete micro-agents analyze specific sub-tasks (OCR extraction, 6-digit classification, USMCA origin rules) using scoped tools and versioned prompts.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-black/10 space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#0071E3] text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Deterministic Services Validate</span>
              </div>
              <p className="text-xs text-[#6E6E73] leading-relaxed">
                Hard rule engines cross-examine AI proposals against statutory tariff schedules, PGA schemas, and sanctions lists. AI cannot bypass rules.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-black/10 space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#0071E3] text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Policy & People Authorize</span>
              </div>
              <p className="text-xs text-[#6E6E73] leading-relaxed">
                Autonomy thresholds automatically route edge cases or high-value entry lines to licensed customs specialists with full evidence citations.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-[#1D1D1F]">3. The Hard Trust Boundary: Why Investors & Enterprise Clients Trust Qubere</h3>
          <p>
            Notice the red bar at the bottom of our logical architecture diagram: <strong>"Hard boundary: models cannot directly submit declarations, change policy, or write authoritative master data."</strong>
          </p>
          <p>
            This circuit breaker is hardcoded into our system architecture. By enforcing that AI models act purely as an evidence-backed proposal layer while deterministic engines and authorized humans act as the gateway, Qubere delivers sub-second automation speeds without taking on compliance risk.
          </p>
        </div>

        {/* CTA */}
        <div className="pt-6 border-t border-black/10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-[#1D1D1F]">Want to review our technical architecture with our engineering team?</h4>
            <p className="text-xs text-[#6E6E73]">Schedule a 1-on-1 technical deep dive or request our investor pitch deck.</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenModal('deck')}
              className="px-5 py-2.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-bold text-xs shadow-md transition-all"
            >
              Request Pitch Deck
            </button>
            <button
              onClick={() => onOpenModal('demo')}
              className="px-5 py-2.5 rounded-full bg-white hover:bg-[#FAFAFC] text-[#1D1D1F] font-semibold text-xs border border-black/10 transition-all"
            >
              Schedule Tech Deep Dive
            </button>
          </div>
        </div>
      </article>

      {/* POPUP MODAL DIALOG WHEN A DIAGRAM COMPONENT IS CLICKED */}
      {selectedComponent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-black/10 max-h-[90vh] overflow-y-auto relative">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedComponent(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-black/5 hover:bg-black/10 text-[#1D1D1F] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pr-8">
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${selectedComponent.badgeColor}`}>
                  {selectedComponent.layer}
                </span>
                <span className="text-xs font-mono font-semibold text-[#86868B]">Module Inspection</span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#1D1D1F]">{selectedComponent.title}</h3>
              <p className="text-xs font-mono text-[#0071E3]">{selectedComponent.subtitle}</p>
            </div>

            {/* Summary Box */}
            <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-black/5 space-y-1">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#86868B]">Module Objective</div>
              <p className="text-xs sm:text-sm text-[#1D1D1F] leading-relaxed font-medium">
                {selectedComponent.summary}
              </p>
            </div>

            {/* Deep Technical Breakdown */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-[#1D1D1F]">Detailed Engineering Function</h4>
              <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed">
                {selectedComponent.description}
              </p>
            </div>

            {/* Key Capabilities */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-[#1D1D1F]">Key Architectural Capabilities</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedComponent.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#1D1D1F]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why AI-Native Advantage */}
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-1">
              <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>The AI-Native Advantage</span>
              </div>
              <p className="text-xs text-emerald-950 leading-relaxed font-medium">
                {selectedComponent.aiNativeAdvantage}
              </p>
            </div>

            {/* Footer Close CTA */}
            <div className="pt-4 border-t border-black/10 flex justify-end">
              <button
                onClick={() => setSelectedComponent(null)}
                className="px-6 py-2.5 rounded-full bg-[#1D1D1F] hover:bg-black text-white font-bold text-xs transition-all"
              >
                Close Inspection
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
