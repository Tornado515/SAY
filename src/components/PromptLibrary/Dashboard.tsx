import { useState, useMemo, useEffect } from 'react';
import { FilterSidebar } from './FilterSidebar';
import { PromptCard } from './PromptCard';
import { generateFullLibrary } from '../../data/prompt-engine';
import type { CodingPromptEntry, RequirementPromptEntry } from '../../data/prompt-engine';
import { Search, Menu } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Dashboard() {
  const { t } = useTranslation();
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

  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 50;

  useEffect(() => {
    // Generate library on mount
    const lib = generateFullLibrary();
    setLibrary(lib);
  }, []);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters, activeTab, searchQuery]);

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

  const totalPages = Math.ceil(filteredPrompts.length / ITEMS_PER_PAGE);
  const currentPrompts = filteredPrompts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex min-h-[calc(100vh-64px)] bg-neutral-50 dark:bg-neutral-950">
      <FilterSidebar
        filters={filters}
        setFilters={setFilters}
        activeTab={activeTab}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <main className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="border-b border-neutral-200 dark:border-white/10 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-xl sticky top-0 z-30">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsSidebarOpen(true)}
                  className="lg:hidden text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                >
                  <Menu size={24} />
                </button>
                <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">{t('promptLibraryPage.title', { defaultValue: 'Prompt Library' })}</h1>
              </div>
              <div className="relative w-full max-w-md hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 rtl:right-3 rtl:left-auto" size={18} />
                <input
                  type="text"
                  placeholder={t('promptLibraryPage.searchPlaceholder', { defaultValue: 'Search prompts...' })}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-indigo-500 rtl:pr-10 rtl:pl-4"
                />
              </div>
            </div>

            <div className="flex gap-6 border-b border-neutral-200 dark:border-white/10">
              <button
                onClick={() => setActiveTab('coding')}
                className={`pb-3 text-sm font-medium transition-colors relative ${activeTab === 'coding' ? 'text-indigo-600 dark:text-indigo-400' : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
              >
                {t('promptLibraryPage.tabs.coding', { defaultValue: 'Coding Prompts' })}
                {activeTab === 'coding' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('requirements')}
                className={`pb-3 text-sm font-medium transition-colors relative ${activeTab === 'requirements' ? 'text-indigo-600 dark:text-indigo-400' : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
              >
                {t('promptLibraryPage.tabs.specs', { defaultValue: 'Project Specs' })}
                {activeTab === 'requirements' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500" />
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          <div className="mb-4 text-neutral-600 dark:text-neutral-400 text-sm flex justify-between items-center">
            <span>
              {t('promptLibraryPage.showingResults', {
                count: filteredPrompts.length,
                defaultValue: `Showing ${Math.min((currentPage - 1) * ITEMS_PER_PAGE + 1, filteredPrompts.length)} - ${Math.min(currentPage * ITEMS_PER_PAGE, filteredPrompts.length)} of ${filteredPrompts.length} results`
              })}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {currentPrompts.map(prompt => (
              <PromptCard
                key={prompt.id}
                prompt={prompt}
                type={activeTab}
              />
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-8 flex justify-center items-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg border border-neutral-200 dark:border-white/10 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {t('common.previous', { defaultValue: 'Previous' })}
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  // Logic to show a window of pages around current page
                  let pageNum = currentPage;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }

                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${currentPage === pageNum
                        ? 'bg-indigo-600 text-white'
                        : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-white/5'
                        }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg border border-neutral-200 dark:border-white/10 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {t('common.next', { defaultValue: 'Next' })}
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
