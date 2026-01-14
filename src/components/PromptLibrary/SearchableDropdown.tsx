import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Option {
  label: string;
  value: string;
}

interface GroupedOption {
  label: string;
  options: Option[];
}

interface SearchableDropdownProps {
  label?: string;
  options: (string | Option | GroupedOption)[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchableDropdown({ label, options, value, onChange, placeholder }: SearchableDropdownProps) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Normalize options to Option[] or GroupedOption[]
  const normalizedOptions: (Option | GroupedOption)[] = options.map(opt => {
    if (typeof opt === 'string') return { label: opt, value: opt };
    return opt as Option | GroupedOption;
  });

  // Flatten options for searching and finding selected option
  const getAllOptions = (opts: (Option | GroupedOption)[]): Option[] => {
    return opts.flatMap(opt => {
      if ('options' in opt) {
        return opt.options;
      }
      return [opt];
    });
  };

  const allOptions = getAllOptions(normalizedOptions);
  const selectedOption = allOptions.find(opt => opt.value === value);

  // Filter options based on search query
  const getFilteredOptions = () => {
    if (!searchQuery) return normalizedOptions;

    const lowerQuery = searchQuery.toLowerCase();

    return normalizedOptions.reduce<(Option | GroupedOption)[]>((acc, opt) => {
      if ('options' in opt) {
        // It's a group
        const filteredGroupOptions = opt.options.filter(o => o.label.toLowerCase().includes(lowerQuery));
        if (filteredGroupOptions.length > 0) {
          acc.push({ ...opt, options: filteredGroupOptions });
        }
      } else {
        // It's a single option
        if (opt.label.toLowerCase().includes(lowerQuery)) {
          acc.push(opt);
        }
      }
      return acc;
    }, []);
  };

  const filteredOptions = getFilteredOptions();

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="space-y-2" ref={dropdownRef}>
      {label && (
        <label className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
          {label}
        </label>
      )}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-white/10 rounded-lg px-3 py-2 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-colors"
        >
          <span className={!selectedOption ? 'text-neutral-500' : ''}>
            {selectedOption ? selectedOption.label : placeholder || t('common.select', { defaultValue: 'Select...' })}
          </span>
          <ChevronDown size={16} className={`text-neutral-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute z-50 w-full mt-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-lg shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-100">
            <div className="p-2 border-b border-neutral-200 dark:border-white/5">
              <div className="relative">
                <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-neutral-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('common.search', { defaultValue: 'Search...' })}
                  className="w-full bg-neutral-100 dark:bg-neutral-800 rounded-md pl-8 pr-3 py-1.5 text-xs text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  autoFocus
                />
              </div>
            </div>
            <div className="max-h-60 overflow-y-auto p-1">
              <button
                onClick={() => {
                  onChange('');
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center justify-between ${
                  value === '' 
                    ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400' 
                    : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-white/5'
                }`}
              >
                <span>{placeholder || t('common.all', { defaultValue: 'All' })}</span>
                {value === '' && <Check size={14} />}
              </button>
              
              {filteredOptions.map((opt, index) => {
                if ('options' in opt) {
                  // Render Group
                  return (
                    <div key={index} className="mt-2 first:mt-0">
                      <div className="px-3 py-1 text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                        {opt.label}
                      </div>
                      {opt.options.map(subOpt => (
                        <button
                          key={subOpt.value}
                          onClick={() => {
                            onChange(subOpt.value);
                            setIsOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center justify-between ${
                            value === subOpt.value
                              ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400'
                              : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-white/5'
                          }`}
                        >
                          <span className="pl-2">{subOpt.label}</span>
                          {value === subOpt.value && <Check size={14} />}
                        </button>
                      ))}
                    </div>
                  );
                } else {
                  // Render Single Option
                  return (
                    <button
                      key={opt.value}
                      onClick={() => {
                        onChange(opt.value);
                        setIsOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center justify-between ${
                        value === opt.value
                          ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400'
                          : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-white/5'
                      }`}
                    >
                      <span>{opt.label}</span>
                      {value === opt.value && <Check size={14} />}
                    </button>
                  );
                }
              })}

              {filteredOptions.length === 0 && (
                <div className="px-3 py-4 text-center text-xs text-neutral-500 dark:text-neutral-400">
                  {t('common.noResults', { defaultValue: 'No results found' })}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
