export const initialNodes = [
  {
    id: "agent-1",
    label: "Document Intake Agent",
    category: "agent",
    status: "Active",
    details: "Monitors ERP, EDI & email for commercial invoices, packing lists, and bills of lading. Extracts unstructured attributes.",
    x: 400,
    y: 250,
    metrics: "99.2% extraction accuracy"
  },
  {
    id: "agent-2",
    label: "HS Classification Agent",
    category: "agent",
    status: "Active",
    details: "Retrieves WCO Harmonized System explanatory notes, binding rulings, and multi-lingual product specs to assign HS 6-10 digit codes.",
    x: 600,
    y: 180,
    metrics: "Sub-second multi-jurisdiction lookup"
  },
  {
    id: "agent-3",
    label: "Origin Determination Agent",
    category: "agent",
    status: "Active",
    details: "Analyzes Bills of Materials (BOM) and regional value content (RVC) to verify Free Trade Agreement eligibility (e.g. USMCA, CPTPP).",
    x: 620,
    y: 350,
    metrics: "Automated BOM trace"
  },
  {
    id: "agent-4",
    label: "Compliance & Risk Agent",
    category: "agent",
    status: "Active",
    details: "Performs real-time screening against UFLPA, BIS Entity List, OFAC Sanctions, and Partner Government Agency (PGA) clearance requirements.",
    x: 820,
    y: 240,
    metrics: "Zero-latency compliance check"
  },
  {
    id: "agent-5",
    label: "Filing Preparation Agent",
    category: "agent",
    status: "Active",
    details: "Transforms validated shipment & classification data into country-specific customs clearance XML/EDI payloads.",
    x: 950,
    y: 360,
    metrics: "Ready for ACE, ATLAS, CHIEF, NCTS"
  },
  // Products
  {
    id: "prod-1",
    label: "Lithium-Ion Battery Modules",
    hsCode: "8507.60.0000",
    category: "product",
    details: "High-density energy storage battery packs manufactured for EV assembly.",
    x: 220,
    y: 150,
    dutyRate: "3.4% Base + Section 301 (25%)"
  },
  {
    id: "prod-2",
    label: "Automotive Microcontrollers",
    hsCode: "8542.31.0000",
    category: "product",
    details: "32-bit automotive-grade IC processors for power management.",
    x: 200,
    y: 380,
    dutyRate: "0% (ITA Agreement)"
  },
  {
    id: "prod-3",
    label: "Monocrystalline Solar Wafers",
    hsCode: "8541.43.0010",
    category: "product",
    details: "Photovoltaic solar cell components subject to anti-dumping review.",
    x: 180,
    y: 520,
    dutyRate: "Section 201 Safeguard Tariff"
  },
  // Regulations
  {
    id: "reg-1",
    label: "US Section 301 Tariff List",
    category: "regulation",
    details: "Ad valorem duty adjustments applying to goods originating in specified foreign territories.",
    x: 420,
    y: 80,
    impact: "High Cost Impact"
  },
  {
    id: "reg-2",
    label: "USMCA Rule of Origin",
    category: "regulation",
    details: "Requires 75% Regional Value Content for duty-free automotive trade across North America.",
    x: 450,
    y: 480,
    impact: "Duty Exemption Opportunity"
  },
  {
    id: "reg-3",
    label: "EU Carbon Border (CBAM)",
    category: "regulation",
    details: "Mandatory reporting of embedded direct & indirect carbon emissions for imported metals and energy goods.",
    x: 750,
    y: 90,
    impact: "Mandatory Reporting"
  },
  // Suppliers & Logistics
  {
    id: "sup-1",
    label: "CATL Fujian Logistics Hub",
    category: "supplier",
    details: "Tier-1 Cell Manufacturer with verified origin documentation and ISO 14001 certification.",
    x: 120,
    y: 280,
    tier: "Tier 1 Direct Supplier"
  },
  {
    id: "sup-2",
    label: "TSMC Hsinchu Tech Park",
    category: "supplier",
    details: "Semiconductor foundry providing certified certificate of manufacture and silicon origin logs.",
    x: 320,
    y: 580,
    tier: "Tier 1 Component Foundry"
  },
  // Risk & PGA
  {
    id: "risk-1",
    label: "UFLPA Traceability Audit",
    category: "risk",
    details: "Requires supply chain provenance mapping down to raw quartzite/mineral extraction level.",
    x: 650,
    y: 580,
    severity: "High Audit Exposure"
  },
  {
    id: "risk-2",
    label: "EPA TSCA Import Certification",
    category: "risk",
    details: "Form 7704-1 chemical substance compliance check mandatory before port entry.",
    x: 880,
    y: 500,
    severity: "Port Hold Risk"
  }
];

export const initialLinks = [
  { source: "sup-1", target: "prod-1", label: "Supplies" },
  { source: "prod-1", target: "agent-1", label: "Invoices" },
  { source: "agent-1", target: "agent-2", label: "Parsed Specs" },
  { source: "reg-1", target: "agent-2", label: "Tariff Rules" },
  { source: "prod-1", target: "reg-1", label: "Subject to" },
  { source: "agent-2", target: "agent-3", label: "HS 8507.60" },
  { source: "sup-2", target: "prod-2", label: "Manufactures" },
  { source: "prod-2", target: "agent-1", label: "EDI Stream" },
  { source: "reg-2", target: "agent-3", label: "Origin Rules" },
  { source: "agent-3", target: "agent-4", label: "Verified BOM" },
  { source: "risk-1", target: "agent-4", label: "Provenance Check" },
  { source: "risk-2", target: "agent-4", label: "PGA Rules" },
  { source: "agent-4", target: "agent-5", label: "Approved Clearance" },
  { source: "reg-3", target: "agent-4", label: "CBAM Audit" }
];
