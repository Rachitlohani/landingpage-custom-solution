/**
 * @file AgentSimulator.jsx
 * // comment - rachit: multi-agent execution pipeline simulator widget
 */

import React, { useState } from 'react';
import { 
  Play, 
  CheckCircle2, 
  Clock, 
  Cpu, 
  FileText, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  RefreshCw,
  AlertTriangle
} from 'lucide-react';

const SAMPLE_SHIPMENTS = [
  {
    id: "ship-1",
    name: "Lithium-Ion EV Battery Packs",
    route: "Shanghai (CNSHA) → Los Angeles (USLAX)",
    value: "$1,450,000 USD",
    documents: "CI-9842.pdf, PackingList-01.pdf, BillOfLading.pdf",
    agents: [
      { name: "Document Intake Agent", task: "Parsed commercial invoice & extracted 42 line items", time: "120ms", status: "complete" },
      { name: "HS Classification Agent", task: "Matched product specs to HS 8507.60.0000 (Section 301 verified)", time: "85ms", status: "complete" },
      { name: "Origin Agent", task: "Verified regional value content & material supply chain logs", time: "140ms", status: "complete" },
      { name: "Compliance Agent", task: "Checked DOT Lithium Safety Regs & EPA TSCA certification", time: "95ms", status: "complete" },
      { name: "Filing Prep Agent", task: "Generated US CBP ACE Entry Summary (Form 7501 Payload)", time: "60ms", status: "complete" }
    ]
  },
  {
    id: "ship-2",
    name: "Automotive Microcontrollers",
    route: "Hsinchu (TWTPE) → Frankfurt (DEFRA)",
    value: "$890,000 EUR",
    documents: "INV-2026-X.xml, EUR1_Certificate.pdf",
    agents: [
      { name: "Document Intake Agent", task: "Ingested XML stream & cross-checked EUR1 origin form", time: "45ms", status: "complete" },
      { name: "HS Classification Agent", task: "Assigned HS 8542.31.0000 under EU-Taiwan ITA Accord", time: "60ms", status: "complete" },
      { name: "CBAM & Carbon Agent", task: "Evaluated indirect scope emissions data for EU reporting", time: "110ms", status: "complete" },
      { name: "Compliance Agent", task: "Verified German ATLAS Customs Interface clearance requirements", time: "70ms", status: "complete" },
      { name: "Filing Prep Agent", task: "Prepared NCTS Transit & ATLAS Declaration Payload", time: "50ms", status: "complete" }
    ]
  }
];

export default function AgentSimulator() {
  // comment - rachit: simulator state & execution loop
  const [selectedShipment, setSelectedShipment] = useState(SAMPLE_SHIPMENTS[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);

  const startSimulation = () => {
    setIsRunning(true);
    setActiveStep(0);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < selectedShipment.agents.length) {
        setActiveStep(step);
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 700);
  };

  return (
    <div className="w-full apple-card-light p-6 border border-black/5 shadow-lg relative overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-black/5">
        <div>
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-[#0071E3]" />
            <h3 className="text-lg font-extrabold text-[#1D1D1F]">Multi-Agent Workflow Simulator</h3>
          </div>
          <p className="text-xs text-[#86868B] mt-1 font-medium">
            Test how specialized AI agents resolve complex cross-border trade compliance in sub-seconds
          </p>
        </div>

        {/* Shipment Selector */}
        <div className="flex items-center gap-2">
          {SAMPLE_SHIPMENTS.map(ship => (
            <button
              key={ship.id}
              onClick={() => {
                setSelectedShipment(ship);
                setActiveStep(-1);
              }}
              disabled={isRunning}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedShipment.id === ship.id
                  ? 'bg-[#1D1D1F] text-white font-bold shadow-sm'
                  : 'bg-black/5 text-[#6E6E73] hover:text-[#1D1D1F]'
              }`}
            >
              {ship.name}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Shipment Summary Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 rounded-2xl bg-[#FAFAFC] border border-black/5 text-xs">
        <div>
          <span className="text-[#86868B] block uppercase font-bold text-[10px]">Trade Route</span>
          <span className="text-[#1D1D1F] font-bold">{selectedShipment.route}</span>
        </div>
        <div>
          <span className="text-[#86868B] block uppercase font-bold text-[10px]">Declared Cargo Value</span>
          <span className="text-emerald-700 font-extrabold">{selectedShipment.value}</span>
        </div>
        <div>
          <span className="text-[#86868B] block uppercase font-bold text-[10px]">Document Inputs</span>
          <span className="text-[#0071E3] font-mono text-[11px] font-bold">{selectedShipment.documents}</span>
        </div>
      </div>

      {/* Execution Steps */}
      <div className="space-y-3 mb-6">
        {selectedShipment.agents.map((agent, index) => {
          const isDone = activeStep > index || (!isRunning && activeStep === selectedShipment.agents.length - 1);
          const isCurrent = activeStep === index && isRunning;

          return (
            <div
              key={index}
              className={`p-3.5 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-4 ${
                isCurrent
                  ? 'bg-blue-50 border-[#0071E3] shadow-sm'
                  : isDone
                  ? 'bg-white border-black/5'
                  : 'bg-[#FAFAFC] border-black/5 opacity-60'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
                  isDone 
                    ? 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20' 
                    : isCurrent 
                    ? 'bg-[#0071E3]/10 text-[#0071E3] border border-[#0071E3]/30 animate-pulse'
                    : 'bg-black/5 text-[#86868B]'
                }`}>
                  {isDone ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : index + 1}
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-[#1D1D1F] flex items-center gap-2">
                    {agent.name}
                    {isCurrent && (
                      <span className="text-[10px] text-[#0071E3] font-mono bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200 font-bold animate-pulse">
                        Executing...
                      </span>
                    )}
                  </h4>
                  <p className="text-[11px] text-[#6E6E73] mt-0.5 font-medium">{agent.task}</p>
                </div>
              </div>

              <div className="text-right">
                {isDone ? (
                  <span className="text-[11px] font-mono text-emerald-700 font-bold">
                    ⚡ {agent.time}
                  </span>
                ) : isCurrent ? (
                  <span className="text-[11px] text-[#0071E3] font-mono font-bold">Running...</span>
                ) : (
                  <span className="text-[11px] text-[#86868B] font-mono font-medium">Queued</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Simulator Actions */}
      <div className="flex items-center justify-between pt-2">
        <div className="text-xs text-[#6E6E73] flex items-center gap-2 font-medium">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Governance Check: 100% Deterministic Safety Verification</span>
        </div>

        <button
          onClick={startSimulation}
          disabled={isRunning}
          className={`px-5 py-2.5 rounded-full font-bold text-xs flex items-center gap-2 transition-all ${
            isRunning
              ? 'bg-black/10 text-[#86868B] cursor-not-allowed'
              : 'bg-[#0071E3] hover:bg-[#0077ED] text-white shadow-md shadow-blue-500/15'
          }`}
        >
          {isRunning ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span>Executing Autonomous Agents...</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4 fill-white" />
              <span>Run AI Execution Simulation</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
