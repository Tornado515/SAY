import React from 'react';
import { Filter, X } from 'lucide-react';
import { PROJECT_DOMAINS, TECH_STACKS, VIBE_PERSONAS, REQ_TYPES } from '../../data/prompt-engine';

interface FilterSidebarProps {
  filters: {
    domain: string;
    category: string;
    techStack: string;
    vibe: string;
  };
  setFilters: React.Dispatch<React.SetStateAction<{
    domain: string;
    category: string;
    techStack: string;
    vibe: string;
  }>>;
  activeTab: 'coding' | 'requirements';
  isOpen: boolean;
  onClose: () => void;
}

export function FilterSidebar({ filters, setFilters, activeTab, isOpen, onClose }: FilterSidebarProps) {
  const handleChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const allTechStacks = [
    ...TECH_STACKS.frontend,
    ...TECH_STACKS.backend,
    ...TECH_STACKS.database,
    ...TECH_STACKS.testing,
    ...TECH_STACKS.devops
  ];

  return (
    <>
       {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-neutral-900 border-r border-white/10 p-6 transform transition-transform duration-200 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2 text-white font-semibold">
            <Filter size={20} />
            <span>Filters</span>
          </div>
          <button onClick={onClose} className="lg:hidden text-neutral-400 hover:text-white">
            <X size={20} />
          </button>
        </div>

        <div className="space-y-6">
          {/* Domain Filter */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Domain</label>
            <select
              value={filters.domain}
              onChange={(e) => handleChange('domain', e.target.value)}
              className="w-full bg-neutral-800 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
            >
              <option value="">All Domains</option>
              {PROJECT_DOMAINS.map(domain => (
                <option key={domain} value={domain}>{domain}</option>
              ))}
            </select>
          </div>

          {activeTab === 'coding' && (
            <>
              {/* Tech Stack Filter */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Tech Stack</label>
                <select
                  value={filters.techStack}
                  onChange={(e) => handleChange('techStack', e.target.value)}
                  className="w-full bg-neutral-800 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="">All Tech Stacks</option>
                  {allTechStacks.map(tech => (
                    <option key={tech} value={tech}>{tech}</option>
                  ))}
                </select>
              </div>

              {/* Vibe Filter */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Vibe</label>
                <select
                  value={filters.vibe}
                  onChange={(e) => handleChange('vibe', e.target.value)}
                  className="w-full bg-neutral-800 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="">All Vibes</option>
                  {VIBE_PERSONAS.map(vibe => (
                    <option key={vibe.id} value={vibe.name}>{vibe.name}</option>
                  ))}
                </select>
              </div>
            </>
          )}
          
           {activeTab === 'requirements' && (
            <>
               {/* Type Filter */}
               <div className="space-y-2">
                <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Type</label>
                <select
                  value={filters.category} // Reusing category for Type
                  onChange={(e) => handleChange('category', e.target.value)}
                  className="w-full bg-neutral-800 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="">All Types</option>
                  {REQ_TYPES.map(type => (
                    <option key={type.id} value={type.name}>{type.name}</option>
                  ))}
                </select>
              </div>
            </>
           )}

          <button
            onClick={() => setFilters({ domain: '', category: '', techStack: '', vibe: '' })}
            className="w-full py-2 text-sm text-neutral-400 hover:text-white border border-white/10 rounded-lg hover:bg-white/5 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      </aside>
    </>
  );
}
