import React from "react";
import { Link } from "react-router-dom";
import { routes, loginRoute, cartRoute } from "../document/routes";
import useAppStore from "../store/appStore";
import Navigation from "../components/Navigation";
import GridDisplay from "../components/GridDisplay";

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
    <div className="flex flex-col items-center justify-start px-5 md:px-10 py-5 w-screen bg-white min-h-screen relative">
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

        <GridDisplay cols={4} className="bg-black px-5 py-5 text-white">
          <div>
            <h1>Hex-Commerce</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium fuga cum rem in obcaecati blanditiis animi voluptate
              amet voluptatibus incidunt magnam, fugiat, facilis a minima
              consequatur quaerat. Perspiciatis, laborum natus!
            </p>
          </div>
          <div>
            <span>Quick links</span>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </li>
            </ul>
          </div>
          <div>
            <span>Contact</span>
            <ul>
              <li>+2272839238328</li>
              <li>someone@mail.com</li>
              <li>company ,Austan streets-44</li>
              <li>German host</li>
            </ul>
          </div>
          <div>
            <span>Subscript to our Email</span>
            <span>For Latest new and Updates</span>
            <form action="">
              <label htmlFor="email_subscription">
                <input type="email" name="email" id="" />
                <button type="submit">Subscribe</button>
              </label>
            </form>
          </div>
        </GridDisplay>
      </div>
    </div>
  );
}

export default CommerceLayout;
