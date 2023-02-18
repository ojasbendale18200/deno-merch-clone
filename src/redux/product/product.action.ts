import { AppDispatch } from "../store";
import { getProductsApi } from "./product.api";
import * as types from "./product.types";

export const getProducts = (): any => async (dispatch: AppDispatch) => {
  dispatch({ type: types.PRODUCTS_LOADING });

  try {
    let data = await getProductsApi();
    dispatch({ type: types.GET_PRODUCTS, payload: data });
  } catch (error) {
    dispatch({ type: types.PRODUCTS_ERROR });
  }
};
