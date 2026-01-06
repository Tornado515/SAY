import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5 text-neutral-600 hover:text-neutral-900" />
      )}
    </button>
  );
}
