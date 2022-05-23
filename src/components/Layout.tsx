import { LogoReactQuery } from "../images/LogoReactQuery";
import { Either, Navbar } from ".";

export const Layout = ({ children }: ComponentProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {children}
    </div>
  );
};

Layout.main = ({ children }: ComponentProps) => (
  <main className="bg-gray-50 grow">{children}</main>
);

Layout.footer = ({ children }: ComponentProps) => (
  <footer className="footer p-4 bg-neutral text-neutral-content">
    <Either
      renderIf={!!children}
      orRender={
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <a
              href="https://react-query.tanstack.com/"
              target="_blank"
              className="cursor-pointer"
            >
              <LogoReactQuery className="w-8 h-8" />
            </a>
            <p className="normal-case text-md ml-2">
              <span className="hidden md:inline-flex">
                Caching e UI otimista com
              </span>
              React Query
            </p>
          </div>
          <p>Tech talk Omega</p>
        </div>
      }
    >
      {children}
    </Either>
  </footer>
);

export default Layout;
