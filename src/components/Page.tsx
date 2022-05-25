import { Layout } from ".";

export const Page = ({ children }: ComponentProps) => {
  return (
    <Layout>
      <Layout.Main>
        <div className="container mx-auto px-4 sm:px-8">
          <div className="py-8">{children}</div>
        </div>
      </Layout.Main>
      <Layout.Footer />
    </Layout>
  );
};
