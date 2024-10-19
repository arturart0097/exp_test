import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductInterface } from "../../../shared/types/ProductTypes";

export interface ProductFilterState {
  products: ProductInterface[];
  selectedCategory: string;
  minPrice: number | "";
  maxPrice: number | "";
  sortOrder: "asc" | "desc" | "normal";
  searchName: string | "";
}

const initialState: ProductFilterState = {
  products: [],
  selectedCategory: "All",
  minPrice: "",
  maxPrice: "",
  sortOrder: "normal",
  searchName: "",
};

export const fetchProducts = createAsyncThunk(
  "productFilter/fetchProducts",
  async () => {
    const response = await axios.get("../../../../public/MOCK_PRODUCTS.json");
    return response.data;
  }
);

const productFilterSlice = createSlice({
  name: "productFilter",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<"asc" | "desc" | "normal">) => {
      state.sortOrder = action.payload;
    },
    setSearchName: (state, action: PayloadAction<string | "">) => {
      state.searchName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

// Функція для сортування та фільтрації продуктів. Спрацьовує коли змінюється один з стейтів

export const selectFilteredAndSortedProducts = async (state: {
  productFilter: ProductFilterState;
}): Promise<ProductInterface[]> => {
  const { products, selectedCategory, sortOrder, searchName } = state.productFilter;

  await new Promise((resolve) => setTimeout(resolve, 500));

  return products
    .filter(
      (product) =>
        (selectedCategory === "All" || product.category === selectedCategory) &&
        product.name.toLowerCase().includes(searchName.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "asc") return a.price - b.price;
      if (sortOrder === "desc") return b.price - a.price;
      return 0;
    });
};

export const { setCategory, setSortOrder, setSearchName } =
  productFilterSlice.actions;
export const productFilterReducer = productFilterSlice.reducer;
