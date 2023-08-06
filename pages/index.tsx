"use client";

import { GetStaticProps } from "next";
import { ReactElement } from "react";
import styled from "styled-components";
import { CategoryList } from "../app/components/Category";
import Layout from "../app/components/Layout";
import Menu from "../app/components/Menu";
import { ProductSection } from "../app/components/Products";
import SearchBar from "../app/components/SearchBar/SearchBar";
import { OuterContainer } from "../app/components/helpers";
import { ITopCategories, ITopProducts } from "../types";
import { getData } from "../utils";

type HomeProps = IStaticProps;
interface IStaticProps {
  top_categories: ITopCategories[];
  top_products: ITopProducts[];
}
export default function Home({
  top_categories,
  top_products,
}: HomeProps): ReactElement {
  return (
    <Layout
      title="Online Shopping Site"
      children={
        <OuterContainer>
          <SearchBar />
          <SSpacer />
          <SSectionHeading>Top Categories</SSectionHeading>
          <CategoryList categories={top_categories} />
          {top_products.map((product) => {
            return <ProductSection key={product.category_name} {...product} />;
          })}
          <div style={{ marginBottom: "6rem" }}></div>
          <Menu />
        </OuterContainer>
      }
    />
  );
}

export const getStaticProps: GetStaticProps<IStaticProps> = async () => {
  const data = getData();
  return { props: data };
};
export const SSectionHeading = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing["5"]};
`;
const SSpacer = styled.span`
  margin-top: ${({ theme }) => theme.spacing["6"]};
`;
