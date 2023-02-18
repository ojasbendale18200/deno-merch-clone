import React from "react";
import Link from "next/link";
import { Box, Text } from "@chakra-ui/react";
import { MdKeyboardBackspace } from "react-icons/md";

import NextSEO from "../../components/NextSEO";
import ProductDetails from "../../components/ProductDetails";
import {
  getProductsApi,
  getSingleProductApi,
} from "@/redux/product/product.api";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { Product } from "@/utils/types";

type productDetailProps = {
  product: Product;
};

const ProductDetail = ({ product }: productDetailProps) => {
  return (
    <>
      <NextSEO
        title="homepage"
        description="Home page for my webpage"
        ogImage="/og-image.png"
        url={new URL("http://localhost:3000/")}
      />
      <Box
        w="calc(11/12)%"
        mt="16"
        maxW="5xl"
        mx="auto"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        position="relative"
      >
        <Link href="/">
          <Text
            display="flex"
            alignItems="center"
            gap={2}
            textColor="gray.400"
            transition="text-color"
            transitionDuration="200s"
            _hover={{
              textColor: "gray.800",
            }}
          >
            <MdKeyboardBackspace />
            Back to shop
          </Text>
        </Link>
      </Box>
      <ProductDetails product={product} />
    </>
  );
};

export default ProductDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  let res = await fetch("http://localhost:8080/products");
  let data = await res.json();

  return {
    paths: data.map((item: any) => ({ params: { id: String(item.id) } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id: any = context.params?.id;
  let res = await fetch(`http://localhost:8080/products/${id}`);
  let data = await res.json();

  return {
    props: {
      product: data,
    },
  };
};
