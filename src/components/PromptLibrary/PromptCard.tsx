import { useState } from 'react';
import { Copy, Check, Terminal, FileText } from 'lucide-react';
import type { CodingPromptEntry, RequirementPromptEntry } from '../../data/prompt-engine';

interface PromptCardProps {
  prompt: CodingPromptEntry | RequirementPromptEntry;
  type: 'coding' | 'requirements';
}

export function PromptCard({ prompt, type }: PromptCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isCoding = type === 'coding';
  const codingPrompt = prompt as CodingPromptEntry;
  const reqPrompt = prompt as RequirementPromptEntry;

  return (
    <div className="bg-neutral-900 border border-white/10 rounded-xl p-6 hover:border-indigo-500/50 transition-colors group relative flex flex-col h-full">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className={`p-2 rounded-lg ${isCoding ? 'bg-indigo-500/10 text-indigo-400' : 'bg-purple-500/10 text-purple-400'}`}>
            {isCoding ? <Terminal size={18} /> : <FileText size={18} />}
          </div>
          <div>
            <h3 className="text-white font-medium text-sm">
              {isCoding ? codingPrompt.subCategory : reqPrompt.type}
            </h3>
            <p className="text-neutral-400 text-xs">
              {prompt.domain}
            </p>
          </div>
        </div>
        <button
          onClick={handleCopy}
          className="text-neutral-500 hover:text-white transition-colors p-2 rounded-md hover:bg-white/5"
          title="Copy to clipboard"
        >
          {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
        </button>
      </div>

      <div className="flex-grow bg-black/30 rounded-lg p-4 mb-4 overflow-hidden relative">
        <pre className="text-neutral-300 text-sm font-mono whitespace-pre-wrap break-words line-clamp-[10]">
          {prompt.prompt}
        </pre>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
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
