import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Zanoza Shop</h1>
        <div className="space-x-4">
          <Link to="/" className="text-gray-600 hover:text-black">Главная</Link>
          <Link to="/catalog" className="text-gray-600 hover:text-black">Каталог</Link>
        </div>
      </nav>
      <main className="p-4 flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
        </Routes>
      </main>
      <footer className="bg-gray-100 p-4 text-center text-sm text-gray-500">© 2025 Zanoza Shop</footer>
    </div>
  );
};

export default App;
