import React from 'react';
import { Users, Sparkles, Mail, Lock, FileText, ArrowRight, ExternalLink } from 'lucide-react';

export default function TeamPage({ onOpenModal }) {
  const founders = [
    {
      name: "Rachit Lohani",
      role: "Co-Founder",
      bio: "Former Chief Product & Technology Officer (CPTO) at E2open and Paylocity; executive engineering leadership at Atlassian and Intuit.",
      experience: ["E2open (CPTO)", "Paylocity (CPTO)", "Atlassian", "Intuit"],
      linkedin: "https://www.linkedin.com/in/rachitlohani/"
    },
    {
      name: "Krishna Bandi",
      role: "Co-Founder",
      bio: "30+ years in supply chain and customs filing; former Head of Customs Filing at E2open and engineering/product leader at BlueJay Solutions.",
      experience: ["E2open (Head of Customs Filing)", "BlueJay Solutions (Engineering & Product Leader)", "30+ Yrs Trade Compliance"],
      linkedin: "https://www.linkedin.com/in/krishnabandi/"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">

      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0071E3]/10 border border-[#0071E3]/20 text-[#0071E3] text-xs font-bold shadow-sm">
          <Users className="w-3.5 h-3.5" />
          <span>Leadership & Domain Expertise</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1D1D1F] tracking-tight">
          Why <span className="apple-blue-text-light">Qubere</span>
        </h1>

        <p className="text-sm sm:text-base text-[#6E6E73] leading-relaxed font-medium">
          Combining decades of global supply chain compliance, enterprise customs filing, and high-scale AI architecture.
        </p>
      </div>

      {/* Founder Profiles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {founders.map((founder, idx) => (
          <div key={idx} className="apple-card-light p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-extrabold text-[#1D1D1F]">{founder.name}</h3>
                  <p className="text-xs font-bold text-[#0071E3] mt-0.5">{founder.role}</p>
                </div>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-black/5 hover:bg-[#0071E3]/10 text-[#6E6E73] hover:text-[#0071E3] transition-colors"
                  aria-label={`${founder.name} LinkedIn`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed font-medium">
                {founder.bio}
              </p>
            </div>

            <div className="pt-4 border-t border-black/5 space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#86868B]">Leadership Track Record</div>
              <div className="flex flex-wrap gap-1.5">
                {founder.experience.map((item, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-black/5 text-[11px] font-semibold text-[#1D1D1F]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Institutional Authority Card */}
      <div className="apple-card-light p-8 text-center space-y-4">
        <h3 className="text-xl font-bold text-[#1D1D1F]">Built by Trade & Tech Veterans</h3>
        <p className="text-xs sm:text-sm text-[#6E6E73] max-w-2xl mx-auto leading-relaxed">
          Qubere was founded to bridge the gap between deterministic customs regulations and modern generative AI. Contact us to learn more about our team and vision.
        </p>
        <div className="pt-2 flex justify-center">
          <button
            onClick={() => onOpenModal('deck')}
            className="px-6 py-3.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            <span>Request Pitch Deck</span>
          </button>
        </div>
      </div>

    </div>
  );
}

