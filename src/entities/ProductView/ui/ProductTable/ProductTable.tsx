import { ProductInterface } from "../../../../shared/types/ProductTypes";
import { Product } from "../../../../widgets/Product";
import { StyledLink, WrapperProduct } from "./ProductTableStyles";

type ProductProps = {
  products: ProductInterface[];
};

export default function ProductTable({ products }: ProductProps) {
  return (
    <WrapperProduct>
      {products.map((product) => (
        <StyledLink key={product.id} to={`/info/${product.id}`}>
          <Product product={product} />
        </StyledLink>
      ))}
    </WrapperProduct>
  );
}
