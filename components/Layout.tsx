import { ReactElement, ReactNode } from "react";
import Head from "next/head";

interface Props {
  title: string;
  children: ReactNode;
}

export default function Layout({ title, children }: Props): ReactElement {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </>
  );
}
