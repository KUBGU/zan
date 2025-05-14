import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="bg-white shadow p-4 flex justify-between items-center">
    <h1 className="text-xl font-bold">Zanoza Shop</h1>
    <div className="space-x-4">
      <Link to="/">Главная</Link>
      <Link to="/catalog">Каталог</Link>
      <Link to="/cart">Корзина</Link>
      <Link to="/blog">Блог</Link>
      <Link to="/admin">Админка</Link>
    </div>
  </nav>
);

export default Header;
