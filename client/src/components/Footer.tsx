import { Link } from "react-router-dom";
import { appStrings, appContacts } from "../document/strings";
import { routes } from "../document/routes";

function Footer() {
  return (
    <div className="bg-black px-5 py-10 text-white grid gri-cols-1 md:grid-cols-2 lg:grid-cols-4  items-center">
      <div>
        <h1 className="text-[2rem] font-bold font-noto">
          {appStrings.appTitle}
        </h1>
        <p className="text-[.7rem]">{appStrings.appDescription}</p>
      </div>
      <div className="flex flex-col items-center justify-start">
        <span className="py-2 text-[1.2rem] font-semibold font-noto">
          Quick links
        </span>
        <ul
          role="list"
          className="marker:text-blue-700 list-disc text-slate-300"
        >
          {routes.map((route) => (
            <li className="text-left">
              <Link to={route.path}>{route.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center  w-full my-2 md:my-0">
        <span className="py-2 text-[1.2rem] font-semibold font-noto">
          Contact
        </span>
        <ul className="text-left flex items-center justify-center flex-col text-slate-300">
          {appContacts.map((contact) => (
            <li>{contact}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-[1rem] font-semibold font-noto">
          Subscript to our Email
        </span>
        <span className="text-[1.3rem] py-2 ">For Latest new and Updates</span>
        <form action="">
          <label
            htmlFor="email_subscription"
            className="flex items-center justify-center bg-gray-500 rounded-lg px-2 w-full"
          >
            <input
              type="email"
              name="email"
              id=""
              className="bg-transparent text-white py-2 focus:outline-0 focus:ring-0"
              placeholder="enter your email here"
            />
            <button type="submit" className="bg-red-600 px-3 py-1 rounded-2xl">
              Subscribe
            </button>
          </label>
        </form>
      </div>
    </div>
  );
}

export default Footer;
