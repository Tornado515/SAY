import { useState } from 'react';
import { Copy, Check, Terminal, FileText, Maximize2, Minimize2 } from 'lucide-react';
import type { CodingPromptEntry, RequirementPromptEntry } from '../../data/prompt-engine';
import { useTranslation } from 'react-i18next';

interface PromptCardProps {
  prompt: CodingPromptEntry | RequirementPromptEntry;
  type: 'coding' | 'requirements';
}

export function PromptCard({ prompt, type }: PromptCardProps) {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isCoding = type === 'coding';
  const codingPrompt = prompt as CodingPromptEntry;
  const reqPrompt = prompt as RequirementPromptEntry;

  return (
    <div className={`bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-xl p-6 hover:border-indigo-500/50 transition-colors group relative flex flex-col shadow-sm dark:shadow-none ${isExpanded ? 'row-span-2' : ''}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className={`p-2 rounded-lg ${isCoding ? 'bg-indigo-500/10 text-indigo-400' : 'bg-purple-500/10 text-purple-400'}`}>
            {isCoding ? <Terminal size={18} /> : <FileText size={18} />}
          </div>
          <div>
            <h3 className="text-neutral-900 dark:text-white font-medium text-sm">
              {isCoding ? codingPrompt.subCategory : reqPrompt.type}
            </h3>
            <p className="text-purple-600 dark:text-purple-400 text-xs">
              {prompt.domain}
            </p>
            {isCoding && codingPrompt.component && (
              <p className="text-red-500 dark:text-red-400 text-[10px] mt-0.5">
                {codingPrompt.component}
              </p>
            )}
            
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-white/5"
            title={isExpanded ? t('common.collapse', { defaultValue: 'Collapse' }) : t('common.expand', { defaultValue: 'Expand' })}
          >
            {isExpanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>
          <button
            onClick={handleCopy}
            className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-white/5"
            title={t('promptLibraryPage.card.copy', { defaultValue: 'Copy to clipboard' })}
          >
            {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
          </button>
        </div>
      </div>

      <div className={`flex-grow bg-neutral-50 dark:bg-black/30 rounded-lg p-4 mb-4 overflow-hidden relative transition-all duration-300 ${isExpanded ? '' : 'max-h-[240px]'}`}>
        <pre className={`text-neutral-700 dark:text-neutral-300 text-sm font-mono whitespace-pre-wrap break-words ${isExpanded ? '' : 'line-clamp-[10]'}`} dir="ltr">
          {prompt.prompt}
        </pre>
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-neutral-50 dark:from-black/30 to-transparent pointer-events-none" />
        )}
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        {isCoding ? (
          <>
            <span className="px-2 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs border border-blue-500/20">
              {codingPrompt.techStack}
            </span>
            <span className="px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs border border-emerald-500/20">
              {codingPrompt.vibe}
            </span>
          </>
        ) : (
          <span className="px-2 py-1 rounded-md bg-orange-500/10 text-orange-400 text-xs border border-orange-500/20">
            {reqPrompt.scale}
          </span>
        )}
      </div>
    </div>
  );
}
