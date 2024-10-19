import { ProductStyle } from "./ProductStyles";

interface ProductProps {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image?: string;
}

const Product = ({ product }: { product: ProductProps }) => {
  return (
    <ProductStyle>
      <img src={product.image} alt={`${product.name} icon`} />
      <div>
        <h2>{product.name}</h2>
        <p>Price: ${product.price}</p>
        <p>Category: {product.category}</p>
      </div>
    </ProductStyle>
  );
};

export default Product;
