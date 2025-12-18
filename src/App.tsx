import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { ToolDetailPage } from './pages/ToolDetailPage';
import { CategoryPage } from './pages/CategoryPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { ToolsPage } from './pages/ToolsPage';
import { ComparisonPage } from './pages/ComparisonPage';
import { GettingStartedPage } from './pages/GettingStartedPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/compare" element={<ComparisonPage />} />
        <Route path="/tool/:slug" element={<ToolDetailPage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/getting-started" element={<GettingStartedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
