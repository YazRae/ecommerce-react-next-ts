import Link from "next/link";
import { ReactElement, useEffect } from "react";
import styled from "styled-components";
import LinkMain from "../app/components/Button/LinkMain";
import Layout from "../app/components/Layout";
import Menu from "../app/components/Menu";
import { IconCheckSuccess, OuterContainer } from "../app/components/helpers";
import { useApp } from "../app/context/AppContext";
import { mediaQueries } from "../utils";
interface Props {}

export default function Checkout({}: Props): ReactElement {
  const { clearCart, cart, setOrders, orders } = useApp();

  useEffect(() => {
    if (typeof window !== "undefined" && cart.length) {
      setOrders([...orders, ...cart]);
      clearCart();
    }
  }, []);

  return (
    <Layout
      title="Your Order Is Successful"
      children={
        <OuterContainer>
          <SCheckoutContainer>
            <SCheckoutWrapper>
              <IconCheckSuccess />
              <h2>Your Order Is Successful</h2>
              <div>Thank you for shopping with us</div>
              <SButtonContainer>
                <Link href="/orders" passHref>
                  <SLinkOrders>More Orders</SLinkOrders>
                </Link>
                <LinkMain href="/">Continue Shopping</LinkMain>
              </SButtonContainer>
            </SCheckoutWrapper>
          </SCheckoutContainer>
          <Menu />
        </OuterContainer>
      }
    />
  );
}
const SCheckoutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;
const SCheckoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  & h2 {
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize["xl"]};
    margin-top: ${({ theme }) => theme.spacing["6"]};
    margin-bottom: ${({ theme }) => theme.spacing["4"]};
  }
  & p {
    font-size: ${({ theme }) => theme.fontSize["base"]};
    margin-bottom: ${({ theme }) => theme.spacing["4"]};
    color: gray;
  }
  & #icon-success {
    width: 80px;
    height: 80px;
    /* background-color: red; */
    background-image: url("/order-success.gif");
  }
`;
const SButtonContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing["12"]};
  position: fixed;
  bottom: 100px;
  display: grid;
  padding: 0 1rem;
  grid-template-rows: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing["3"]};
  width: 100%;
  ${() =>
    mediaQueries("md")(`
    position: static;
  grid-template-columns: 1fr 1fr;
  
  `)}
`;
const SLinkOrders = styled.div`
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  padding: 14px 66px;
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`;
