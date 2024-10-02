import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoriesName } from "./categories.type";


const initialState = CategoriesName.All;

export const categoriesSlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setActiveCategory : (_, aciton : PayloadAction<CategoriesName>) => aciton.payload  
    }
});

export const {setActiveCategory} = categoriesSlice.actions;
export default categoriesSlice.reducer;