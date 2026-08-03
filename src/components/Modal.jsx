import React, { useState } from 'react';
import { X, CheckCircle2, Send, Lock, Sparkles, FileText, Calendar } from 'lucide-react';

const FORM_NAME = 'access-request';

export default function Modal({ isOpen, onClose, mode = 'deck' }) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    note: ''
  });

  if (!isOpen) return null;

  const requestType = mode === 'deck' ? 'Investor Pitch Deck' : 'Product Demo';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError('');

    // Posts to the static skeleton at public/__forms.html so the submission
    // reaches Netlify's form handler, which emails the notification recipient.
    const body = new URLSearchParams(new FormData(e.target)).toString();

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body
      });

      if (!response.ok) throw new Error(`Request failed (${response.status})`);
      setSubmitted(true);
    } catch {
      setError('We could not send your request just now. Please try again in a moment.');
    } finally {
      setSending(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setError('');
    setFormData({ name: '', email: '', company: '', role: '', note: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-lg apple-card-light p-6 md:p-8 shadow-2xl relative bg-white border border-black/10">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full text-[#86868B] hover:text-[#1D1D1F] hover:bg-black/5 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#1D1D1F]">Access Requested</h3>
            <p className="text-xs text-[#6E6E73] max-w-sm mx-auto leading-relaxed font-medium">
              Thank you for reaching out. Our founders team will send the confidential {mode === 'deck' ? 'Investor Pitch Deck' : 'Enterprise Demo Invitation'} directly to <span className="text-[#0071E3] font-bold">{formData.email}</span> within 24 hours.
            </p>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 rounded-full bg-[#0071E3] text-white text-xs font-bold hover:bg-[#0077ED] transition-colors shadow-md shadow-blue-500/15"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-2xl bg-[#0071E3]/10 border border-[#0071E3]/20 text-[#0071E3]">
                {mode === 'deck' ? <FileText className="w-5 h-5" /> : <Calendar className="w-5 h-5" />}
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-[#1D1D1F]">
                  {mode === 'deck' ? 'Request Investor Pitch Deck' : 'Schedule Product Demo'}
                </h3>
                <p className="text-xs text-[#86868B] font-medium">
                  {mode === 'deck' 
                    ? 'Get confidential access to our growth metrics, architecture, and investment thesis' 
                    : 'See Agentic Customs execute live customs filings in an interactive pilot demo'}
                </p>
              </div>
            </div>

            <form
              name={FORM_NAME}
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-3.5 mt-6"
            >
              <input type="hidden" name="form-name" value={FORM_NAME} />
              <input type="hidden" name="request_type" value={requestType} />
              <input type="hidden" name="subject" value={`New ${requestType} request from ${formData.company || formData.name || 'website visitor'}`} />
              <p className="hidden">
                <label>
                  Don&apos;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>

              <div>
                <label className="block text-xs font-bold text-[#1D1D1F] mb-1">Full Name *</label>
                <input
                  required
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#FAFAFC] border border-black/10 text-[#1D1D1F] placeholder-[#86868B] focus:outline-none focus:border-[#0071E3]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1D1D1F] mb-1">Work Email *</label>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="name@company.com or name@fund.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#FAFAFC] border border-black/10 text-[#1D1D1F] placeholder-[#86868B] focus:outline-none focus:border-[#0071E3]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#1D1D1F] mb-1">Organization *</label>
                  <input
                    required
                    type="text"
                    name="company"
                    autoComplete="organization"
                    placeholder="Company / Fund Name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#FAFAFC] border border-black/10 text-[#1D1D1F] placeholder-[#86868B] focus:outline-none focus:border-[#0071E3]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1D1D1F] mb-1">Role / Focus</label>
                  <input
                    type="text"
                    name="role"
                    placeholder="e.g. GP, VP Trade, CTO"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#FAFAFC] border border-black/10 text-[#1D1D1F] placeholder-[#86868B] focus:outline-none focus:border-[#0071E3]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1D1D1F] mb-1">Message / Note</label>
                <textarea
                  rows="2"
                  name="note"
                  placeholder="Any specific focus area or interest..."
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#FAFAFC] border border-black/10 text-[#1D1D1F] placeholder-[#86868B] focus:outline-none focus:border-[#0071E3]"
                />
              </div>

              {error && (
                <p className="text-[11px] font-semibold text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="w-full py-3 rounded-full bg-[#0071E3] hover:bg-[#0077ED] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-xs shadow-md shadow-blue-500/15 flex items-center justify-center gap-2 transition-all mt-4"
              >
                <span>{sending ? 'Sending…' : 'Submit Request'}</span>
                <Send className="w-3.5 h-3.5" />
              </button>

              <p className="text-[10px] text-center text-[#86868B] flex items-center justify-center gap-1 mt-2 font-medium">
                <Lock className="w-3 h-3 text-[#86868B]" />
                <span>Strictly confidential. Enterprise NDA protected.</span>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
