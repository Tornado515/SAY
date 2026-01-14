import { useState } from 'react';
import { Sparkles, Play, CheckCircle, Info, X, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface AuditResult {
  score: number;
  level: "Critical" | "Weak" | "Moderate" | "Good" | "Elite";
  breakdown: {
    label: string;
    status: boolean;
    reason: string;
  }[];
  detectedKeywords: string[];
  feedback: string[];
}

export function PromptTester() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState<AuditResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAudit = async () => {
    if (!prompt.trim()) return;

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      // In development, use relative path to hit the Vite proxy (which goes to localhost:3001)
      // In production, use the VITE_API_URL environment variable (must be set in Vercel/CI)
      const apiUrl = import.meta.env.DEV
        ? ''
        : (import.meta.env.VITE_API_URL || '');

      if (!import.meta.env.DEV && !apiUrl) {
        console.warn("WARNING: VITE_API_URL is missing in production build. Requests may fail.");
      }

      const response = await fetch(`${apiUrl}/api/auditPrompt`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to audit prompt');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      setError(t('vibeCodingPage.promptTester.error', { defaultValue: 'Failed to analyze prompt. Please try again.' }));
    } finally {
      setIsLoading(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 95) return 'text-purple-400';
    if (score >= 80) return 'text-green-400';
    if (score >= 40) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreBg = (score: number) => {
    if (score >= 95) return 'bg-purple-500/10 border-purple-500/20';
    if (score >= 80) return 'bg-green-500/10 border-green-500/20';
    if (score >= 40) return 'bg-yellow-500/10 border-yellow-500/20';
    return 'bg-red-500/10 border-red-500/20';
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-12">
      {!isOpen ? (
        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-full hover:border-indigo-500/50 transition-all duration-300 shadow-lg dark:shadow-none"
          >
            <div className="absolute inset-0 bg-indigo-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <Sparkles className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
            <span className="text-lg font-medium text-neutral-900 dark:text-white">{t('vibeCodingPage.promptTester.button', { defaultValue: 'Test Your Prompt' })}</span>
          </motion.button>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="p-6 border-b border-neutral-200 dark:border-white/5 flex justify-between items-center bg-neutral-50 dark:bg-neutral-900/50">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{t('vibeCodingPage.promptTester.title', { defaultValue: 'Prompt Auditor (AI Powered)' })}</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-neutral-200 dark:hover:bg-white/5 rounded-lg transition-colors text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            <div className="space-y-4">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder={t('vibeCodingPage.promptTester.placeholder', { defaultValue: "Paste your prompt here to check its engineering quality..." })}
                className="w-full h-40 bg-neutral-50 dark:bg-black/30 border border-neutral-200 dark:border-white/10 rounded-xl p-4 text-neutral-900 dark:text-neutral-200 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 resize-none font-mono text-sm"
              />
              <div className="flex justify-end items-center gap-4">
                {error && <span className="text-red-500 dark:text-red-400 text-sm">{error}</span>}
                <button
                  onClick={handleAudit}
                  disabled={!prompt.trim() || isLoading}
                  className="flex items-center gap-2 px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Play className="w-4 h-4" />
                  )}
                  {isLoading ? t('vibeCodingPage.promptTester.auditing', { defaultValue: 'Auditing...' }) : t('vibeCodingPage.promptTester.runAudit', { defaultValue: 'Run Audit' })}
                </button>
              </div>
            </div>

            <AnimatePresence>
              {result && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-8 border-t border-neutral-200 dark:border-white/10 pt-8"
                >
                  {/* Score Section */}
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className={`col-span-1 p-6 rounded-2xl border flex flex-col items-center justify-center text-center ${getScoreBg(result.score)}`}>
                      <span className="text-neutral-500 dark:text-neutral-400 text-sm font-medium uppercase tracking-wider mb-2">{t('vibeCodingPage.promptTester.vibeScore', { defaultValue: 'Vibe Score' })}</span>
                      <div className={`text-6xl font-bold mb-2 ${getScoreColor(result.score)}`}>
                        {result.score}
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-white/50 dark:bg-black/20 ${getScoreColor(result.score)}`}>
                        {t(`vibeCodingPage.promptTester.levels.${result.level}`, { defaultValue: result.level })}
                      </div>
                    </div>

                    <div className="col-span-2 space-y-6">
                      {/* Breakdown */}
                      <div>
                        <h4 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-3 uppercase tracking-wider">{t('vibeCodingPage.promptTester.analysisBreakdown', { defaultValue: 'Analysis Breakdown' })}</h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {Array.isArray(result.breakdown) ? result.breakdown.map((item, i) => (
                            <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/5">
                              {item.status ? (
                                <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 shrink-0" />
                              ) : (
                                <X className="w-5 h-5 text-red-500 dark:text-red-400 shrink-0" />
                              )}
                              <div>
                                <div className="text-sm font-medium text-neutral-900 dark:text-white">{item.label}</div>
                                <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">{item.reason}</div>
                              </div>
                            </div>
                          )) : (
                            <div className="col-span-2 text-neutral-500 text-sm italic">
                              {t('vibeCodingPage.promptTester.unavailable', { defaultValue: 'Breakdown analysis unavailable.' })}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Detected Keywords */}
                      <div>
                        <h4 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-3 uppercase tracking-wider">{t('vibeCodingPage.promptTester.detectedKeywords', { defaultValue: 'Detected Keywords' })}</h4>
                        <div className="flex flex-wrap gap-2">
                          {result.detectedKeywords.length > 0 ? (
                            result.detectedKeywords.map((keyword, i) => (
                              <span key={i} className="px-2.5 py-1 rounded-md bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-neutral-300 text-xs font-mono">
                                {keyword}
                              </span>
                            ))
                          ) : (
                            <span className="text-neutral-500 text-sm italic">{t('vibeCodingPage.promptTester.noKeywords', { defaultValue: 'No technical keywords detected.' })}</span>
                          )}
                        </div>
                      </div>

                      {/* Feedback */}
                      <div>
                        <h4 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-3 uppercase tracking-wider">{t('vibeCodingPage.promptTester.feedback', { defaultValue: 'Feedback' })}</h4>
                        <ul className="space-y-3">
                          {result.feedback.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                              <Info className="w-4 h-4 text-indigo-500 dark:text-indigo-400 mt-0.5 shrink-0" />
                              <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-neutral-900 dark:text-white font-semibold">$1</strong>') }} />
                            </li>
                          ))}
                          {result.feedback.length === 0 && (
                            <li className="flex items-start gap-3 text-sm text-green-500 dark:text-green-400">
                              <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                              <span>{t('vibeCodingPage.promptTester.perfect', { defaultValue: 'Perfect prompt! No improvements needed.' })}</span>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </div>
  );
}
