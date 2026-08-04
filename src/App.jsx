/**
 * @file App.jsx
 * @author Rachit Lohani
 * @description Main application controller and routing entry point for Agentic Customs launch site.
 * Designed with Apple minimalist light aesthetics. Assisted by AI for component layout and state orchestration.
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Modal from './components/Modal';

import LandingPage from './pages/LandingPage';
import ThesisPage from './pages/ThesisPage';
import TeamPage from './pages/TeamPage';
import AiCustomsCompliancePage from './pages/AiCustomsCompliancePage';
import UsImportEntryReadinessPage from './pages/UsImportEntryReadinessPage';
import EvidenceBackedAiArticlePage from './pages/EvidenceBackedAiArticlePage';
import KnowledgeGraph from './components/KnowledgeGraph';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('deck');

  const handleOpenModal = (mode = 'deck') => {
    setModalMode(mode);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] flex flex-col justify-between selection:bg-blue-500/20 selection:text-[#0071E3]">
      
      <div>
        {/* Apple light style header navbar */}
        <Navbar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          onOpenModal={handleOpenModal} 
        />

        {/* View switching based on activeTab state */}
        <main className="pt-6">
          {activeTab === 'home' && (
            <LandingPage 
              setActiveTab={setActiveTab} 
              onOpenModal={handleOpenModal} 
            />
          )}

          {activeTab === 'ai-customs-compliance' && (
            <AiCustomsCompliancePage onOpenModal={handleOpenModal} />
          )}

          {activeTab === 'us-import-entry-readiness' && (
            <UsImportEntryReadinessPage onOpenModal={handleOpenModal} />
          )}

          {activeTab === 'evidence-backed-ai' && (
            <EvidenceBackedAiArticlePage onOpenModal={handleOpenModal} />
          )}

          {activeTab === 'graph' && (
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-6">
              <div className="text-center space-y-2 mb-8">
                <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1D1D1F] tracking-tight">
                  Interactive Knowledge Graph
                </h1>
                <p className="text-xs sm:text-sm text-[#86868B] max-w-xl mx-auto">
                  Drag nodes, explore connected regulations, suppliers, and autonomous agent decision loops.
                </p>
              </div>
              <KnowledgeGraph />
            </div>
          )}

          {activeTab === 'thesis' && (
            <ThesisPage onOpenModal={handleOpenModal} />
          )}

          {activeTab === 'team' && (
            <TeamPage onOpenModal={handleOpenModal} />
          )}
        </main>
      </div>

      {/* Global Footer */}
      <Footer 
        setActiveTab={setActiveTab} 
        onOpenModal={handleOpenModal} 
      />

      {/* Pitch deck request & Demo scheduling modal */}
      <Modal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        mode={modalMode} 
      />
    </div>
  );
}
