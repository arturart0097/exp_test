import {
  FilterWrapper,
  InputStyle,
  SelectStyle,
  Wrap
} from "./ProductFilterStyles";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { RootState } from "../../../../app/provider/store/store";
import { setCategory, setSearchName, setSortOrder } from "../../slice/slice";

export const ProductFilter = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state: RootState) => state.productFilter.selectedCategory
  );
  const inputValue = useSelector(
    (state: RootState) => state.productFilter.searchName
  );
  const [lastSortOrder, setLastSortOrder] = useState<"asc" | "desc" | "normal">("normal");

  const handleCategoryChange = (category: string) => {
    dispatch(setCategory(category));

    if (category === "All") {
      dispatch(setSortOrder("normal"));
      setLastSortOrder("normal");
    }
  };

  const handleSortOrderChange = (order: "asc" | "desc") => {
    const newSortOrder = lastSortOrder === order ? "normal" : order;
    dispatch(setSortOrder(newSortOrder));
    setLastSortOrder(newSortOrder);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchName(event.target.value));
  };

  return (
    <FilterWrapper>
      <Wrap>
        <SelectStyle
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Accessories">Accessories</option>
          <option value="Wearables">Wearables</option>
          <option value="Storage">Storage</option>
        </SelectStyle>

        <InputStyle
          placeholder="Enter product"
          value={inputValue}
          onChange={handleInputChange}
        />
      </Wrap>
      <SelectStyle
        value={lastSortOrder}
        onChange={(e) => handleSortOrderChange(e.target.value as "asc" | "desc")}
      >
        <option value="normal">Any</option>
        <option value="asc">Min</option>
        <option value="desc">Max</option>
      </SelectStyle>
    </FilterWrapper>
  );
};
