import { Product } from "@/utils/types";
import axios, { AxiosResponse } from "axios";

export const getProductsApi = async () => {
  let res: AxiosResponse<Product[]> = await axios.get(
    "http://localhost:8080/products"
  );
  return res.data;
};

export const getSingleProductApi = async (id: string) => {
  let res: AxiosResponse<Product> = await axios.get(
    `http://localhost:8080/products/${id}}`
  );
  return res.data;
};
