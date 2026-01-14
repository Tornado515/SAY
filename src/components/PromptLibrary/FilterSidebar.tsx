import React from 'react';
import { Filter, X } from 'lucide-react';
import { PROJECT_DOMAINS, TECH_STACKS, VIBE_PERSONAS, REQ_TYPES } from '../../data/prompt-engine';
import { useTranslation } from 'react-i18next';
import { SearchableDropdown } from './SearchableDropdown';

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
  const { t } = useTranslation();

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

  const heightClass = "lg:h-[calc(100vh-64px)]";

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
        fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-white/10 p-6 transform transition-transform duration-200 ease-in-out
        lg:sticky lg:top-16 ${heightClass} lg:bottom-auto lg:overflow-y-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        rtl:lg:left-auto rtl:lg:right-0 rtl:right-auto rtl:left-0 rtl:${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2 text-neutral-900 dark:text-white font-semibold">
            <Filter size={20} />
            <span>{t('promptLibraryPage.filters.title', { defaultValue: 'Filters' })}</span>
          </div>
          <button onClick={onClose} className="lg:hidden text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">
            <X size={20} />
          </button>
        </div>


        <div className="space-y-6">
          {/* Domain Filter */}
          <SearchableDropdown
            label={t('promptLibraryPage.filters.domain', { defaultValue: 'Domain' })}
            options={PROJECT_DOMAINS}
            value={filters.domain}
            onChange={(value) => handleChange('domain', value)}
            placeholder={t('promptLibraryPage.filters.allDomains', { defaultValue: 'All Domains' })}
          />

          {activeTab === 'coding' && (
            <>
              {/* Tech Stack Filter */}
              <SearchableDropdown
                label={t('promptLibraryPage.filters.techStack', { defaultValue: 'Tech Stack' })}
                options={allTechStacks}
                value={filters.techStack}
                onChange={(value) => handleChange('techStack', value)}
                placeholder={t('promptLibraryPage.filters.allTechStacks', { defaultValue: 'All Tech Stacks' })}
              />

              {/* Vibe Filter */}
              <SearchableDropdown
                label={t('promptLibraryPage.filters.vibe', { defaultValue: 'Vibe' })}
                options={VIBE_PERSONAS.map(v => ({ label: v.name, value: v.name }))}
                value={filters.vibe}
                onChange={(value) => handleChange('vibe', value)}
                placeholder={t('promptLibraryPage.filters.allVibes', { defaultValue: 'All Vibes' })}
              />
            </>
          )}

          {activeTab === 'requirements' && (
            <>
              {/* Type Filter */}
              <SearchableDropdown
                label={t('promptLibraryPage.filters.type', { defaultValue: 'Type' })}
                options={REQ_TYPES.map(t => ({ label: t.name, value: t.name }))}
                value={filters.category}
                onChange={(value) => handleChange('category', value)}
                placeholder={t('promptLibraryPage.filters.allTypes', { defaultValue: 'All Types' })}
              />
            </>
          )}

          <button
            onClick={() => setFilters({ domain: '', category: '', techStack: '', vibe: '' })}
            className="w-full py-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border border-neutral-200 dark:border-white/10 rounded-lg hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors"
          >
            {t('promptLibraryPage.filters.reset', { defaultValue: 'Reset Filters' })}
          </button>
        </div>
      </aside>
    </>
  );
}
