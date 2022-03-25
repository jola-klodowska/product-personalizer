import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products] = useState(productsData);

  return (
    <section>
      {products.map(product => <Product
        key={product.id}
        id={product.id}
        name={product.name}
        title={product.title}
        basePrice={product.basePrice}
        colors={product.colors}
        sizes={product.sizes}
      />)}
    </section>
  );
};

export default Products;