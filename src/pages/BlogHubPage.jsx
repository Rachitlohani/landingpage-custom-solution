import React, { useState } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  Network, 
  ShieldCheck, 
  FileText, 
  ChevronRight, 
  Tag, 
  Search, 
  Rss,
  Calendar,
  User,
  ArrowRight
} from 'lucide-react';

export default function BlogHubPage({ setActiveTab, onOpenModal }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Blog posts metadata catalog
  const blogPosts = [
    {
      id: 'trade-knowledge-graph',
      title: 'Building an AI-Native Trade Knowledge Graph: Why Document AI Isn\'t Enough',
      excerpt: 'Today\'s trade compliance systems think in terms of documents. Our system thinks in terms of knowledge. Here is why that distinction fundamentally changes how an autonomous trade platform is built.',
      author: 'Qubere Engineering Team',
      date: 'August 2026',
      readTime: '8 min read',
      category: 'Architecture',
      featured: true,
      badgeColor: 'bg-[#0071E3]/10 text-[#0071E3] border-[#0071E3]/20',
      icon: Network
    },
    {
      id: 'architecture',
      title: 'Qubere Logical Architecture & Governed Multi-Agent System Stack',
      excerpt: 'Deep dive into the 6-layer agentic architecture powering autonomous customs compliance: Experience API, Zero-Trust Boundary, Durable Control Plane, Intelligence Services, Evidence Storage, and Governed Human Review.',
      author: 'Qubere Architecture Team',
      date: 'August 2026',
      readTime: '12 min read',
      category: 'Architecture',
      featured: true,
      badgeColor: 'bg-blue-500/10 text-blue-600 border-blue-200',
      icon: Network
    },
    {
      id: 'thesis',
      title: 'The Intelligent Operating Layer for Global Commerce: Our Investment Thesis',
      excerpt: 'Customs compliance is a $30B+ knowledge problem. Explore why legacy software fails, how agentic customs transforms trade, and our market opportunity roadmap.',
      author: 'Founding Partners',
      date: 'August 2026',
      readTime: '10 min read',
      category: 'Founding Vision',
      featured: true,
      badgeColor: 'bg-purple-500/10 text-purple-600 border-purple-200',
      icon: Sparkles
    },
    {
      id: 'evidence-backed-ai',
      title: 'Why Customs AI Must Be Evidence-Backed Before It Is Autonomous',
      excerpt: 'General-purpose LLMs predict likely tokens, but in customs compliance, ungrounded AI leads to costly misclassifications and CBP penalties. Here is how evidence-backed grounding protects importers.',
      author: 'Rachit Lohani & Krishna Bandi',
      date: 'August 2026',
      readTime: '6 min read',
      category: 'Founding Vision',
      featured: false,
      badgeColor: 'bg-purple-500/10 text-purple-600 border-purple-200',
      icon: Sparkles
    },
    {
      id: 'ai-customs-compliance',
      title: 'Automating US Customs Compliance: From Commercial Invoices to Entry Filings',
      excerpt: 'A comprehensive deep-dive into how AI ingests messy shipping documents, proposes HS codes, estimates duties, and screens partner government agencies (FDA, EPA).',
      author: 'Qubere Product Team',
      date: 'July 2026',
      readTime: '7 min read',
      category: 'Guides',
      featured: false,
      badgeColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-200',
      icon: ShieldCheck
    },
    {
      id: 'us-import-entry-readiness',
      title: 'US Import Entry Readiness Checklist & Verification Breakdown',
      excerpt: 'What enterprise trade compliance officers must validate before submitting entry summaries to CBP, and where legacy document data typically breaks down.',
      author: 'Compliance Practice Lead',
      date: 'July 2026',
      readTime: '5 min read',
      category: 'Product Announcements',
      featured: false,
      badgeColor: 'bg-orange-500/10 text-orange-600 border-orange-200',
      icon: FileText
    }
  ];

  const categories = ['All', 'Architecture', 'Founding Vision', 'Guides', 'Product Announcements'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(p => p.featured);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      
      {/* HEADER SECTION */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0071E3]/10 border border-[#0071E3]/20 text-[#0071E3] text-xs font-bold shadow-sm">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Qubere Engineering & Research Blog</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-[#1D1D1F] tracking-tight leading-tight">
          Insights on AI, Compliance <br />
          <span className="apple-blue-text-light">& Global Trade Intelligence.</span>
        </h1>

        <p className="text-sm sm:text-base text-[#6E6E73] font-medium leading-relaxed max-w-2xl mx-auto">
          Deep dives into trade knowledge graphs, evidence-backed AI grounding, autonomous customs clearance, and product announcements from the Qubere engineering team.
        </p>

        {/* Search & Category Filter */}
        <div className="pt-6 space-y-4 max-w-2xl mx-auto">
          {/* Search Bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-[#86868B] absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="Search articles, whitepapers & writeups..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-black/10 text-xs sm:text-sm text-[#1D1D1F] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0071E3]/30"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#1D1D1F] text-white shadow-sm'
                    : 'bg-white text-[#6E6E73] hover:text-[#1D1D1F] border border-black/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED POSTS CAROUSEL / GRID */}
      {selectedCategory === 'All' && !searchQuery && (
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#1D1D1F] tracking-tight">
              Featured Articles
            </h2>
            <span className="text-xs text-[#86868B] font-semibold">Latest Whitepapers</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredPosts.map((post) => {
              const Icon = post.icon;
              return (
                <div
                  key={post.id}
                  onClick={() => setActiveTab(post.id)}
                  className="apple-card-light p-8 cursor-pointer group hover:border-[#0071E3]/40 transition-all flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full border ${post.badgeColor}`}>
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2 text-xs text-[#86868B] font-medium">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    <div className="w-10 h-10 rounded-2xl bg-[#0071E3]/10 text-[#0071E3] flex items-center justify-center group-hover:bg-[#0071E3] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-xl font-bold text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-black/5 flex items-center justify-between text-xs font-bold text-[#0071E3]">
                    <div className="flex items-center gap-1.5 text-[#6E6E73] text-[11px] font-medium">
                      <User className="w-3.5 h-3.5 text-[#0071E3]" />
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Read Whitepaper</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ALL POSTS CATALOG */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-black/5 pb-4">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#1D1D1F] tracking-tight">
            {selectedCategory === 'All' ? 'All Articles & Writeups' : `${selectedCategory} Articles`}
          </h2>
          <span className="text-xs text-[#86868B] font-semibold">
            Showing {filteredPosts.length} post{filteredPosts.length === 1 ? '' : 's'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPosts.map((post) => {
            const Icon = post.icon;
            return (
              <div
                key={post.id}
                onClick={() => setActiveTab(post.id)}
                className="apple-card-light p-6 cursor-pointer group hover:border-[#0071E3]/40 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border ${post.badgeColor}`}>
                      {post.category}
                    </span>
                    <span className="text-[11px] text-[#86868B] font-medium">{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#6E6E73] leading-relaxed line-clamp-2 font-medium">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-black/5 flex items-center justify-between text-xs font-bold text-[#0071E3]">
                  <span className="text-[11px] text-[#86868B] font-normal">{post.author}</span>
                  <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read Article</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SUBSCRIBE / RSS FOOTER CARD */}
      <section className="apple-card-light p-8 text-center space-y-4 max-w-3xl mx-auto">
        <div className="w-10 h-10 rounded-2xl bg-[#0071E3]/10 text-[#0071E3] flex items-center justify-center mx-auto">
          <Rss className="w-5 h-5" />
        </div>
        <h3 className="text-xl font-bold text-[#1D1D1F]">Stay Updated on Autonomous Trade AI</h3>
        <p className="text-xs sm:text-sm text-[#6E6E73] max-w-lg mx-auto font-medium">
          Receive technical whitepapers, trade knowledge graph research, and regulatory AI breakdowns directly to your inbox.
        </p>
        <div className="pt-2 flex justify-center max-w-md mx-auto gap-2">
          <input
            type="email"
            placeholder="Enter your work email..."
            className="flex-1 px-4 py-2.5 rounded-xl bg-white border border-black/10 text-xs text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#0071E3]/30"
          />
          <button
            onClick={() => onOpenModal('demo')}
            className="px-5 py-2.5 rounded-xl bg-[#0071E3] hover:bg-[#0077ED] text-white font-bold text-xs shadow-md transition-all whitespace-nowrap"
          >
            Subscribe
          </button>
        </div>
      </section>

    </div>
  );
}
