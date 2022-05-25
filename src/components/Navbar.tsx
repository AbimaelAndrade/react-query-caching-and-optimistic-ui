import { LogoReactQuery } from "../images/LogoReactQuery";

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100 drop-shadow-lg">
      <div className="navbar-start">
        <h1 className="btn btn-ghost normal-case text-xl">
          <span className="hidden md:inline-flex">
            Caching e UI otimista com{" "}
          </span>
          React Query
        </h1>
      </div>

      <div className="navbar-center hidden lg:flex"></div>

      <div className="navbar-end">
        <a
          href="https://react-query.tanstack.com/"
          target="_blank"
          className="cursor-pointer"
          rel="noreferrer"
        >
          <LogoReactQuery className="w-12 h-12" />
        </a>
      </div>
    </div>
  );
};
