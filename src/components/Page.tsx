import { Layout } from ".";

export const Page = ({ children }: ComponentProps) => {
  return (
    <Layout>
      <Layout.main>{children}</Layout.main>
      <Layout.footer />
    </Layout>
  );
};
