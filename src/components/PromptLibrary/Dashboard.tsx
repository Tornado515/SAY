import { useState, useMemo, useEffect } from 'react';
import { FilterSidebar } from './FilterSidebar';
import { PromptCard } from './PromptCard';
import { generateFullLibrary } from '../../data/prompt-engine';
import type { CodingPromptEntry, RequirementPromptEntry } from '../../data/prompt-engine';
import { Search, Menu } from 'lucide-react';

export function Dashboard() {
  const [library, setLibrary] = useState<{ codingPrompts: CodingPromptEntry[], requirementPrompts: RequirementPromptEntry[] }>({ codingPrompts: [], requirementPrompts: [] });
  const [activeTab, setActiveTab] = useState<'coding' | 'requirements'>('coding');
  const [filters, setFilters] = useState({
    domain: '',
    category: '',
    techStack: '',
    vibe: ''
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Generate library on mount
    const lib = generateFullLibrary();
    setLibrary(lib);
  }, []);

  const filteredPrompts = useMemo(() => {
    if (activeTab === 'coding') {
      return library.codingPrompts.filter(p => {
        const matchesDomain = !filters.domain || p.domain === filters.domain;
        const matchesTech = !filters.techStack || p.techStack === filters.techStack;
        const matchesVibe = !filters.vibe || p.vibe === filters.vibe;
        const matchesSearch = !searchQuery || 
          p.prompt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.subCategory.toLowerCase().includes(searchQuery.toLowerCase());
        
        return matchesDomain && matchesTech && matchesVibe && matchesSearch;
      });
    } else {
      return library.requirementPrompts.filter(p => {
        const matchesDomain = !filters.domain || p.domain === filters.domain;
        const matchesType = !filters.category || p.type === filters.category;
         const matchesSearch = !searchQuery || 
          p.prompt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.type.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesDomain && matchesType && matchesSearch;
      });
    }
  }, [library, activeTab, filters, searchQuery]);

  return (
    <div className="flex min-h-[calc(100vh-64px)] bg-neutral-950">
      <FilterSidebar 
        filters={filters} 
        setFilters={setFilters} 
        activeTab={activeTab}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <main className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="border-b border-white/10 bg-neutral-900/50 backdrop-blur-xl sticky top-0 z-30">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setIsSidebarOpen(true)}
                  className="lg:hidden text-neutral-400 hover:text-white"
                >
                  <Menu size={24} />
                </button>
                <h1 className="text-2xl font-bold text-white">Prompt Library</h1>
              </div>
              <div className="relative w-full max-w-md hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" size={18} />
                <input
                  type="text"
                  placeholder="Search prompts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-neutral-800 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="flex gap-6 border-b border-white/10">
              <button
                onClick={() => setActiveTab('coding')}
                className={`pb-3 text-sm font-medium transition-colors relative ${
                  activeTab === 'coding' ? 'text-indigo-400' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Coding Prompts
                {activeTab === 'coding' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('requirements')}
                className={`pb-3 text-sm font-medium transition-colors relative ${
                  activeTab === 'requirements' ? 'text-indigo-400' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Project Specs
                {activeTab === 'requirements' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500" />
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          <div className="mb-4 text-neutral-400 text-sm">
            Showing {filteredPrompts.length} results
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredPrompts.slice(0, 50).map(prompt => (
              <PromptCard 
                key={prompt.id} 
                prompt={prompt} 
                type={activeTab} 
              />
            ))}
          </div>
          {filteredPrompts.length > 50 && (
             <div className="mt-8 text-center text-neutral-500 text-sm">
                Showing first 50 results. Refine filters to see more.
             </div>
          )}
        </div>
      </main>
    </div>
  );
}
