interface Route {
  path: string;
  label: string;
}

export const routes: Route[] = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/shop",
    label: "Shop",
  },
  {
    path: "/about",
    label: "About Us",
  },
  {
    path: "/blog",
    label: "Blog",
  },
  {
    path: "/contact",
    label: "Contact Us",
  },
];

export const loginRoute = {
  path: "/login",
  label: "Login",
};

export const cartRoute = {
  path: "/cart",
  label: "Cart",
};
