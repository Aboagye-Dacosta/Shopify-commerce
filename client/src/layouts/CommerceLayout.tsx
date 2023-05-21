import React from "react";
import { routes, loginRoute, cartRoute } from "../document/routes";
import useAppStore from "../store/appStore";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

type AppProps = {
  children: React.ReactNode;
};

function CommerceLayout({ children }: AppProps) {
  const [navLink, setNavLink] = useAppStore((state) => [
    state.navLink,
    state.setNavLink,
  ]);

  const setNav = (e: React.MouseEvent<HTMLSpanElement>): void => {
    const nav: HTMLFormElement | null =
      document.querySelector(".showMobileMenu");
    setNavLink(e.currentTarget.textContent);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    nav!.checked = false;
  };

  return (
    <div className="flex flex-col items-center justify-start  pt-5 w-full bg-white min-h-screen relative">
      <Navigation
        cartRoute={cartRoute}
        loginRoute={loginRoute}
        routeCallBack={setNav}
        routes={routes}
      />
      <div className="w-full">
        <section className=" md:hidden flex-1 flex justify-start items-start bg-slate-100 py-1 px-3">
          <span className="font-bold">/{navLink}</span>
        </section>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default CommerceLayout;
