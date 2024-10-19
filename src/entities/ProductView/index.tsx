import { useEffect, useState } from "react";
import ProductTable from "./ui/ProductTable/ProductTable";
import { ProductFilter } from "./ui/ProductFilter/ProductFilter";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectFilteredAndSortedProducts } from "./slice/slice";
import { Loader } from "../../widgets/Loader";
import { AppDispatch, RootState } from "../../app/provider/store/store";
import { ProductInterface } from "../../shared/types/ProductTypes";
import useDebounce from "../../shared/lib/hook/useDebounce";

export const ProductView = () => {
  const dispatch: AppDispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<ProductInterface[]>([]);

  const productFilterState = useSelector((state: RootState) => state.productFilter);
  const inputValue = productFilterState.searchName;
  const debouncedInputValue = useDebounce(inputValue, 1000);

  useEffect(() => {
    const fetchFilteredProducts = async () => {
      setLoading(true);
      const products = await selectFilteredAndSortedProducts({
        productFilter: { ...productFilterState, searchName: debouncedInputValue },
      });
      setFilteredProducts(products);
      setLoading(false);
    };

    fetchFilteredProducts();
  }, [debouncedInputValue, productFilterState]);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      await dispatch(fetchProducts());
      setLoading(false);
    };

    loadProducts();
  }, [dispatch]);

  return (
    <div className="wrapper">
      <h1>Product List</h1>
      <ProductFilter />
      {loading ? <Loader /> : <ProductTable products={filteredProducts} />}
    </div>
  );
};
