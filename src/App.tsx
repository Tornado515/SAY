import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { ToolDetailPage } from './pages/ToolDetailPage';
import { CategoryPage } from './pages/CategoryPage';
import { CategoriesPage } from './pages/CategoriesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tool/:slug" element={<ToolDetailPage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
