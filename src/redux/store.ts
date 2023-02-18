import {
  combineReducers,
  legacy_createStore,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { reducer as cartReducer } from "./cart/cart.reducer";
import { reducer as productReducer } from "./product/product.reducer";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
});

export const store = legacy_createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

type DisppatchFn = () => AppDispatch;
export const useAppDispatch: DisppatchFn = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
