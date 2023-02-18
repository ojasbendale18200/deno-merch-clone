import { Product } from "@/utils/types";
import * as types from "./product.types";

interface productState {
  loading: boolean;
  error: boolean;
  product: Product[];
}

interface productAction {
  type: string;
  payload?: any;
}

const initialState: productState = {
  loading: false,
  error: false,
  product: [],
};

export const reducer = (
  state: productState = initialState,
  { type, payload }: productAction
) => {
  switch (type) {
    case types.PRODUCTS_LOADING: {
      return { ...state, loading: true };
    }

    case types.GET_PRODUCTS:
      return { ...state, loading: false, error: false, product: payload };

      case types.PRODUCTS_ERROR: 
      return {...state,error:true,loading:false}
    default:
      return state;
  }
};
