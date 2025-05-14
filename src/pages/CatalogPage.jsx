import React from 'react';

const products = [
  {
    id: 1,
    name: 'Куртка из вельвета',
    price: '5990 ₽',
    image: 'https://dlstudio.store/cdn/shop/products/DSC09642_800x.jpg',
  },
  {
    id: 2,
    name: 'Свободные серые брюки',
    price: '4790 ₽',
    image: 'https://dlstudio.store/cdn/shop/products/DSC09519_800x.jpg',
  }
];

const CatalogPage = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Каталог</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="border rounded shadow hover:shadow-lg transition">
          <img src={product.image} alt={product.name} className="w-full h-64 object-cover"/>
          <div className="p-4">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <button className="mt-2 w-full py-2 bg-black text-white rounded">В корзину</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default CatalogPage;
