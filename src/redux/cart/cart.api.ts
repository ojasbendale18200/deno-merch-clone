import { Cart } from "@/utils/types";
import axios, { AxiosResponse } from "axios";

export const getCartAPI = async () => {
  let response: AxiosResponse<Cart[]> = await axios.get(
    "http://localhost:8080/carts"
  );
  return response.data;
};

export const addItemToCartApi = async (productId: number, quantity: number) => {
  let res: AxiosResponse<Cart> = await axios.post(
    `http://localhost:8080/carts`,
    { productId, quantity }
  );
  return res.data;
};
