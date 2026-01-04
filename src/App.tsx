import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { ToolDetailPage } from './pages/ToolDetailPage';
import { CategoryPage } from './pages/CategoryPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { ToolsPage } from './pages/ToolsPage';
import { ComparisonPage } from './pages/ComparisonPage';
import { GettingStartedPage } from './pages/GettingStartedPage';
import { TechStacksPage } from './pages/TechStacksPage';
import { CreateStackPage } from './pages/CreateStackPage';
import { TechStackDetailPage } from './pages/TechStackDetailPage';
import { HowToVibeCodePage } from './pages/HowToVibeCodePage';
import { PromptLibraryPage } from './pages/PromptLibraryPage';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/compare" element={<ComparisonPage />} />
        <Route path="/tool/:slug" element={<ToolDetailPage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/getting-started" element={<GettingStartedPage />} />
        <Route path="/tech-stacks" element={<TechStacksPage />} />
        <Route path="/create-stack" element={<CreateStackPage />} />
        <Route path="/tech-stacks/:slug" element={<TechStackDetailPage />} />
        <Route path="/how-to-vibe-code" element={<HowToVibeCodePage />} />
        <Route path="/prompt-library" element={<PromptLibraryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
