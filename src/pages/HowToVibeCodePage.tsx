import { Sparkles, Zap, MessageSquare, Code2, Brain, Wind, GitBranch } from 'lucide-react';
import { Layout } from '../components/Layout';

export function HowToVibeCodePage() {
  return (
    <Layout>
      <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-indigo-500/30">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-neutral-950/0 to-neutral-950/0" />
          <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>The Future of Coding is Here</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-indigo-400">
                How to Vibe Code
              </h1>
              <p className="text-xl text-neutral-400 leading-relaxed">
                Stop fighting syntax. Start shaping logic. Vibe coding is about entering a flow state where your intent translates directly into software through the power of AI.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 pb-24 sm:px-6 lg:px-8">
          
          {/* What is Vibe Coding? */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">What is Vibe Coding?</h2>
              <p className="text-neutral-400 text-lg">
                It's not just using AI tools; it's a mindset shift. Instead of being a bricklayer, you become the architect. You focus on the *what* and *why*, letting the AI handle the *how*.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: Brain, text: "Focus on high-level logic and architecture" },
                  { icon: Zap, text: "Rapid iteration and prototyping" },
                  { icon: Wind, text: "Maintain creative flow without syntax interruptions" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-neutral-300">
                    <div className="p-2 rounded-lg bg-neutral-900 border border-white/10">
                      <item.icon className="w-5 h-5 text-indigo-400" />
                    </div>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative p-8 bg-neutral-900 border border-white/10 rounded-xl">
                <pre className="font-mono text-sm text-indigo-300 overflow-x-auto">
                  <code>{`// Old Way
function calculateTotal(items) {
  return items.reduce((acc, item) => {
    return acc + item.price * item.qty;
  }, 0);
}

// Vibe Coding Way
// "Create a function to calculate cart total 
// handling discounts and tax automatically"`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* The Art of Prompting */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">The Art of Prompting</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Your prompt is your code. Writing a good prompt is the most important skill in vibe coding.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Be Specific",
                  icon: Code2,
                  description: "Don't say 'fix it'. Say 'fix the null pointer exception in the user auth flow when logging out'.",
                  color: "from-blue-500/20 to-cyan-500/20"
                },
                {
                  title: "Provide Context",
                  icon: MessageSquare,
                  description: "Paste relevant code snippets or explain the surrounding architecture. The AI needs to know where it fits.",
                  color: "from-purple-500/20 to-pink-500/20"
                },
                {
                  title: "Iterate",
                  icon: Wind,
                  description: "Treat the AI as a junior dev. Review the code, ask for adjustments, and refine until it's perfect.",
                  color: "from-amber-500/20 to-orange-500/20"
                }
              ].map((card, i) => (
                <div key={i} className="relative p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-white/10 transition-colors">
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 hover:opacity-100 transition-opacity rounded-2xl`} />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center mb-4">
                      <card.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
                    <p className="text-neutral-400">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Advanced Techniques */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Advanced Techniques</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-indigo-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <Brain className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Role-Based Prompting</h3>
                </div>
                <p className="text-neutral-400 mb-6">
                  Assign a persona to the AI to guide its mindset and output style.
                </p>
                <div className="bg-black/30 rounded-lg p-4 font-mono text-sm text-indigo-300">
                  "Act as a senior security engineer. Review this authentication logic for OWASP risks."
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-purple-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Few-Shot Prompting</h3>
                </div>
                <p className="text-neutral-400 mb-6">
                  Provide examples of the desired input and output to teach the AI a pattern.
                </p>
                <div className="bg-black/30 rounded-lg p-4 font-mono text-sm text-purple-300">
                  "Convert these dates to ISO format:
                  <br/>Jan 1, 2024 -&gt; 2024-01-01
                  <br/>Dec 31, 2023 -&gt; 2023-12-31
                  <br/>[Your Date] -&gt; ?"
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-pink-500/30 transition-colors md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-pink-500/10 text-pink-400">
                    <GitBranch className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Chain-of-Thought</h3>
                </div>
                <p className="text-neutral-400 mb-6">
                  Force the AI to break down complex problems into steps before solving them.
                </p>
                <div className="bg-black/30 rounded-lg p-4 font-mono text-sm text-pink-300">
                  "Don't just write the code. First, explain your plan step-by-step. Then, write the implementation. Finally, write a test case to verify it."
                </div>
              </div>
            </div>
          </div>

          {/* Context is King */}
          <div className="mb-32 relative overflow-hidden rounded-3xl bg-neutral-900 border border-white/10 p-8 md:p-12">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-8">Context is King</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <p className="text-lg text-neutral-300">
                    The AI doesn't know your codebase unless you show it. Providing the right context is the difference between a generic answer and a working solution.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-neutral-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5" />
                      <span><strong>File Dumps:</strong> Don't be afraid to paste entire files. The more context, the better.</span>
                    </li>
                    <li className="flex items-start gap-3 text-neutral-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5" />
                      <span><strong>Pre-Prompts:</strong> Start a session by explaining the tech stack and project goals.</span>
                    </li>
                    <li className="flex items-start gap-3 text-neutral-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5" />
                      <span><strong>Relevant Snippets:</strong> If you're fixing a bug, paste the error AND the related code.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-black/50 rounded-xl border border-white/10 p-6">
                  <div className="flex items-center gap-2 mb-4 text-neutral-500 text-sm">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-2">context_example.txt</span>
                  </div>
                  <pre className="font-mono text-xs text-neutral-400 overflow-x-auto">
                    <code>{`Project: E-commerce Platform
Stack: Next.js, TypeScript, Tailwind, Supabase

Current Task: Implement the shopping cart logic.

Here is the current CartContext.tsx file:
[...paste file content...]

Here is the Product type definition:
[...paste type definition...]

Please add a function to update item quantity.`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* The Iteration Loop */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">The Iteration Loop</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-red-500/10 flex items-center justify-center mb-6 text-red-400">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Generate</h3>
                <p className="text-neutral-400">Start with a clear, specific prompt to get the initial code.</p>
              </div>
              <div className="p-6 relative">
                <div className="hidden md:block absolute top-1/2 -left-4 w-8 h-0.5 bg-neutral-800"></div>
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-neutral-800"></div>
                <div className="w-16 h-16 mx-auto rounded-full bg-yellow-500/10 flex items-center justify-center mb-6 text-yellow-400">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Review & Debug</h3>
                <p className="text-neutral-400">Paste errors back to the AI. "I got this error: [error]. Fix it."</p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-green-500/10 flex items-center justify-center mb-6 text-green-400">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Refine</h3>
                <p className="text-neutral-400">Ask for optimizations. "Make it cleaner." "Add comments." "Optimize for speed."</p>
              </div>
            </div>
          </div>

          {/* Good vs Bad Examples */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Prompt Engineering 101</h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20">
                  <div className="flex items-center gap-2 mb-4 text-red-400 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    Bad Prompt
                  </div>
                  <p className="text-neutral-300 italic">"Make a login page."</p>
                  <p className="mt-4 text-sm text-neutral-500">Too vague. The AI will guess the stack, styling, and requirements.</p>
                </div>
                <div className="p-6 rounded-xl bg-green-500/5 border border-green-500/20">
                  <div className="flex items-center gap-2 mb-4 text-green-400 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    Vibe Prompt
                  </div>
                  <p className="text-neutral-300 italic">"Create a login page using React and Tailwind. Include email/password fields, a 'Remember Me' checkbox, and a 'Forgot Password' link. Style it with a dark, glassmorphism aesthetic."</p>
                  <p className="mt-4 text-sm text-neutral-500">Specific stack, features, and design requirements.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}
