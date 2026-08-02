/**
 * @file KnowledgeGraph.jsx
 * // comment - rachit: HTML5 SVG/Canvas force-directed Knowledge Graph component
 * // comment - rachit: node drag physics, edge rendering, and live inspector state
 */

import React, { useState, useEffect, useRef } from 'react';
import { initialNodes, initialLinks } from '../data/graphData';
import { 
  Cpu, 
  BookOpen, 
  Box, 
  Truck, 
  ShieldAlert, 
  Search, 
  RefreshCw, 
  Zap, 
  CheckCircle2, 
  X, 
  Info,
  Layers,
  Sparkles
} from 'lucide-react';

const CATEGORY_COLORS = {
  agent: { bg: '#0071E3', stroke: '#0071E3', glow: 'rgba(0, 113, 227, 0.3)', text: 'AI Agent', icon: Cpu },
  product: { bg: '#10B981', stroke: '#059669', glow: 'rgba(16, 185, 129, 0.3)', text: 'Product / HS Code', icon: Box },
  regulation: { bg: '#F59E0B', stroke: '#D97706', glow: 'rgba(245, 158, 11, 0.3)', text: 'Regulation', icon: BookOpen },
  supplier: { bg: '#8B5CF6', stroke: '#7C3AED', glow: 'rgba(139, 92, 246, 0.3)', text: 'Supplier / Origin', icon: Truck },
  risk: { bg: '#EF4444', stroke: '#DC2626', glow: 'rgba(239, 68, 68, 0.3)', text: 'Risk & PGA Control', icon: ShieldAlert }
};

export default function KnowledgeGraph() {
  // comment - rachit: initial nodes state
  const [nodes, setNodes] = useState(initialNodes);
  const [links, setLinks] = useState(initialLinks);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNode, setSelectedNode] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [draggingNodeId, setDraggingNodeId] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const svgRef = useRef(null);

  // comment - rachit: filter nodes based on category and search query
  const filteredNodes = nodes.filter(node => {
    const matchesCategory = selectedCategory === 'all' || node.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      node.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (node.hsCode && node.hsCode.includes(searchQuery));
    return matchesCategory && matchesSearch;
  });

  const filteredNodeIds = new Set(filteredNodes.map(n => n.id));
  const activeNodeId = hoveredNode || (selectedNode ? selectedNode.id : null);
  
  const connectedNodeIds = new Set();
  if (activeNodeId) {
    connectedNodeIds.add(activeNodeId);
    links.forEach(link => {
      if (link.source === activeNodeId) connectedNodeIds.add(link.target);
      if (link.target === activeNodeId) connectedNodeIds.add(link.source);
    });
  }

  // comment - rachit: handle drag interaction
  const handleMouseDown = (e, node) => {
    e.stopPropagation();
    setDraggingNodeId(node.id);
    const svgRect = svgRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - svgRect.left - node.x,
      y: e.clientY - svgRect.top - node.y
    });
    setSelectedNode(node);
  };

  const handleMouseMove = (e) => {
    if (!draggingNodeId || !svgRef.current) return;
    const svgRect = svgRef.current.getBoundingClientRect();
    const newX = Math.max(40, Math.min(svgRect.width - 40, e.clientX - svgRect.left - dragOffset.x));
    const newY = Math.max(40, Math.min(svgRect.height - 40, e.clientY - svgRect.top - dragOffset.y));

    setNodes(prev => prev.map(n => n.id === draggingNodeId ? { ...n, x: newX, y: newY } : n));
  };

  const handleMouseUp = () => {
    setDraggingNodeId(null);
  };

  const resetPositions = () => {
    setNodes(initialNodes);
    setSelectedNode(null);
    setSearchQuery('');
    setSelectedCategory('all');
  };

  return (
    <div className="w-full apple-card-light overflow-hidden relative shadow-lg">
      {/* Top Controls Bar */}
      <div className="p-4 border-b border-black/5 bg-[#FAFAFC] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-[#0071E3]/10 text-[#0071E3]">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-[#1D1D1F] flex items-center gap-2">
              Autonomous Trade Knowledge Graph
              <span className="px-2 py-0.5 text-xs rounded-full bg-[#0071E3]/10 text-[#0071E3] font-semibold border border-[#0071E3]/20">
                Live Interactive Demo
              </span>
            </h3>
            <p className="text-xs text-[#86868B]">
              Drag nodes, filter trade relationships, and inspect active decision rules
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-1.5 bg-[#E8E8ED]/60 p-1 rounded-full border border-black/5">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
              selectedCategory === 'all'
                ? 'bg-[#1D1D1F] text-white shadow-sm'
                : 'text-[#6E6E73] hover:text-[#1D1D1F]'
            }`}
          >
            All ({nodes.length})
          </button>
          {Object.entries(CATEGORY_COLORS).map(([catKey, catConfig]) => {
            const Icon = catConfig.icon;
            const count = nodes.filter(n => n.category === catKey).length;
            const isSelected = selectedCategory === catKey;
            return (
              <button
                key={catKey}
                onClick={() => setSelectedCategory(catKey)}
                className={`px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  isSelected
                    ? 'bg-white text-[#1D1D1F] shadow-sm border border-black/10'
                    : 'text-[#6E6E73] hover:text-[#1D1D1F]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" style={{ color: catConfig.stroke }} />
                <span>{catConfig.text}</span>
                <span className="text-[10px] opacity-60">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Search & Reset */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#86868B]" />
            <input
              type="text"
              placeholder="Search HS codes, agents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-3 py-1.5 text-xs rounded-full bg-white border border-black/10 text-[#1D1D1F] placeholder-[#86868B] focus:outline-none focus:border-[#0071E3] w-44 shadow-sm"
            />
          </div>
          <button
            onClick={resetPositions}
            title="Reset Graph Layout"
            className="p-2 rounded-full bg-white hover:bg-black/5 text-[#1D1D1F] transition-colors border border-black/10 shadow-sm"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* SVG Canvas Area */}
      <div 
        className="w-full h-[520px] bg-[#FFFFFF] relative cursor-grab active:cursor-grabbing select-none overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <svg ref={svgRef} className="w-full h-full">
          <defs>
            <marker id="arrow-light" viewBox="0 0 10 10" refX="22" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#0071E3" />
            </marker>
          </defs>

          {/* Render Links / Edges */}
          {links.map((link, idx) => {
            const sourceNode = nodes.find(n => n.id === link.source);
            const targetNode = nodes.find(n => n.id === link.target);
            if (!sourceNode || !targetNode) return null;

            const isSourceVisible = filteredNodeIds.has(sourceNode.id);
            const isTargetVisible = filteredNodeIds.has(targetNode.id);

            if (!isSourceVisible || !isTargetVisible) return null;

            const isHighlighted = activeNodeId && (link.source === activeNodeId || link.target === activeNodeId);
            const isDimmed = activeNodeId && !isHighlighted;

            return (
              <g key={`link-${idx}`} className="transition-opacity duration-300">
                <line
                  x1={sourceNode.x}
                  y1={sourceNode.y}
                  x2={targetNode.x}
                  y2={targetNode.y}
                  stroke={isHighlighted ? "#0071E3" : "#D2D2D7"}
                  strokeWidth={isHighlighted ? 2.5 : 1.2}
                  strokeDasharray={isHighlighted ? "6 3" : "none"}
                  opacity={isDimmed ? 0.15 : isHighlighted ? 1 : 0.6}
                  markerEnd="url(#arrow-light)"
                />
                {isHighlighted && (
                  <text
                    x={(sourceNode.x + targetNode.x) / 2}
                    y={(sourceNode.y + targetNode.y) / 2 - 6}
                    fill="#0071E3"
                    fontSize="10"
                    fontWeight="700"
                    textAnchor="middle"
                  >
                    {link.label}
                  </text>
                )}
              </g>
            );
          })}

          {/* Render Nodes */}
          {nodes.map(node => {
            const isVisible = filteredNodeIds.has(node.id);
            if (!isVisible) return null;

            const cat = CATEGORY_COLORS[node.category];
            const isSelected = selectedNode?.id === node.id;
            const isHovered = hoveredNode === node.id;
            const isConnected = activeNodeId && connectedNodeIds.has(node.id);
            const isDimmed = activeNodeId && !isConnected;
            const Icon = cat.icon;

            return (
              <g
                key={node.id}
                transform={`translate(${node.x}, ${node.y})`}
                onMouseDown={(e) => handleMouseDown(e, node)}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                className="cursor-pointer transition-transform duration-150"
                style={{ opacity: isDimmed ? 0.2 : 1 }}
              >
                {(isSelected || isHovered || isConnected) && (
                  <circle
                    r={node.category === 'agent' ? 32 : 26}
                    fill="none"
                    stroke={cat.stroke}
                    strokeWidth="2"
                    className="animate-ping opacity-40 pointer-events-none"
                  />
                )}

                <circle
                  r={node.category === 'agent' ? 24 : 20}
                  fill="#FFFFFF"
                  stroke={isSelected ? '#0071E3' : cat.stroke}
                  strokeWidth={isSelected ? 3 : 2}
                  className="shadow-md transition-colors"
                />

                <foreignObject
                  x={node.category === 'agent' ? -12 : -10}
                  y={node.category === 'agent' ? -12 : -10}
                  width={node.category === 'agent' ? 24 : 20}
                  height={node.category === 'agent' ? 24 : 20}
                  className="pointer-events-none"
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <Icon className="w-4 h-4" style={{ color: cat.stroke }} />
                  </div>
                </foreignObject>

                <text
                  y={node.category === 'agent' ? 38 : 34}
                  fill={isSelected ? "#0071E3" : "#1D1D1F"}
                  fontSize="11"
                  fontWeight="700"
                  textAnchor="middle"
                  className="pointer-events-none select-none drop-shadow-sm"
                >
                  {node.label}
                </text>
                {node.hsCode && (
                  <text
                    y={node.category === 'agent' ? 50 : 46}
                    fill="#86868B"
                    fontSize="9"
                    fontFamily="monospace"
                    textAnchor="middle"
                    className="pointer-events-none select-none font-semibold"
                  >
                    HS {node.hsCode}
                  </text>
                )}
              </g>
            );
          })}
        </svg>

        {/* Selected Node Details Drawer */}
        {selectedNode && (
          <div className="absolute top-4 right-4 bottom-4 w-80 apple-card-light p-5 shadow-2xl flex flex-col justify-between z-20 animate-in slide-in-from-right-5 duration-200 bg-white/95">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-black/5">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: CATEGORY_COLORS[selectedNode.category].stroke }}
                  />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#86868B]">
                    {CATEGORY_COLORS[selectedNode.category].text}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedNode(null)}
                  className="p-1 rounded-full text-[#86868B] hover:text-[#1D1D1F] hover:bg-black/5"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-4">
                <h4 className="text-lg font-extrabold text-[#1D1D1F]">{selectedNode.label}</h4>
                {selectedNode.hsCode && (
                  <div className="inline-block mt-1 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 font-mono text-xs rounded-md font-bold">
                    HS Code: {selectedNode.hsCode}
                  </div>
                )}
                <p className="mt-3 text-xs text-[#6E6E73] leading-relaxed font-medium">
                  {selectedNode.details}
                </p>
              </div>

              <div className="mt-5 space-y-2">
                {selectedNode.metrics && (
                  <div className="p-2.5 rounded-xl bg-[#0071E3]/10 border border-[#0071E3]/20 text-xs">
                    <span className="text-[#86868B] block text-[10px] uppercase font-bold">Performance Metric</span>
                    <span className="text-[#0071E3] font-extrabold">{selectedNode.metrics}</span>
                  </div>
                )}
                {selectedNode.dutyRate && (
                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs">
                    <span className="text-[#86868B] block text-[10px] uppercase font-bold">Tariff Rate</span>
                    <span className="text-amber-800 font-extrabold">{selectedNode.dutyRate}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-3 border-t border-black/5 flex items-center justify-between text-xs text-[#86868B]">
              <span className="flex items-center gap-1 text-emerald-600 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Governed Node
              </span>
              <span className="font-mono text-[10px] font-medium">Node ID: {selectedNode.id}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
