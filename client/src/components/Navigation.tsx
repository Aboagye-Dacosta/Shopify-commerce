import { RiSearchLine, BsBag, RxHamburgerMenu, IoClose } from "react-icons/all";
import { Link } from "react-router-dom";
import { appStrings } from "../document/strings";
import React from "react";

type Route = { path: string; label: string };

type NavigationProps = {
  routes: Route[];
  loginRoute: Route;
  cartRoute: Route;
  routeCallBack: React.MouseEventHandler<HTMLAnchorElement>;
};

function Navigation({
  routes,
  loginRoute,
  cartRoute,
  routeCallBack,
}: NavigationProps) {
  return (
    <div className="flex items-center justify-between w-full  py-2">
      <section className="flex items-center justify-between ">
        <input
          type="checkbox"
          className="showMobileMenu z-50 w-5 h-5 peer absolute opacity-0"
        />
        <div className="fixed w-0 h-0 peer-checked:w-full peer-checked:h-full peer-checked:scale-100 transition-all duration-200 bg-slate-800 text-white top-0 left-0 z-40 peer-checked:px-4  peer-checked:py-9 overflow-hidden">
          <div className="rounded-full w-6 h-6 hover:bg-red-500 self-start relative ">
            <IoClose className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[1.5rem]" />
          </div>
          <div className=" flex flex-col items-center justify-center w-full h-full">
            {routes.map((route, index) => (
              <Link
                to={route.path}
                key={index}
                className="py-5 text-center nav-link inline-block text-[1.5rem]"
                onClick={routeCallBack}
              >
                {route.label}
              </Link>
            ))}
          </div>
        </div>
        <RxHamburgerMenu className="text-[1.2rem] mr-2  md:hidden " />
        <h1 className="text-[1.3rem] md:text-[1.5rem] font-bold mr-4 whitespace-nowrap text-red-400 z-50">
          {appStrings.appTitle}
        </h1>
        <div className="hidden md:flex place-items-baseline">
          {routes.map((route, index) => (
            <Link to={route.path} key={index} className="mx-4">
              <div className="text-center nav-link">{route.label}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="flex items-center justify-center w-max relative peer-checked:text-white">
        <Link to={loginRoute.path} className="hidden md:block px-1 mr-5">
          <span>{loginRoute.label}</span>
        </Link>
        <RiSearchLine className="mr-2 text-blue-700" />
        <Link to={cartRoute.path} className="px-2 py-2 relative z-50">
          <BsBag className="[&]:hover:peer-[opacity:1] text-[1.5rem]" />
          <span className="absolute right-1 top-1 rounded-full flex items-center justify-center bg-red-500 w-4 h-4 text-white text-[.5rem]">
            0
          </span>
          <span className="peer absolute opacity-0">{cartRoute.label}</span>
        </Link>
      </section>
    </div>
  );
}

export default Navigation;
