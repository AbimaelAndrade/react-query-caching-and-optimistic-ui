import { Layout } from "..";

export const Template = ({ children }: ComponentProps) => {
  return (
    <Layout>
      <Layout.main>
        <div className="container mx-auto px-4 sm:px-8">
          <div className="py-8">{children}</div>
        </div>
      </Layout.main>
      <Layout.footer />
    </Layout>
  );
};
