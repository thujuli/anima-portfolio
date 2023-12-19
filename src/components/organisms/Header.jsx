import logo from "../../assets/img/logo.svg";
import menu from "../../assets/img/menu.svg";
import { Link } from "react-router-dom";

export default function Header() {
  const menus = [
    { name: "About", path: "/about" },
    { name: "Work", path: "" },
    { name: "Contact", path: "" },
  ];

  return (
    <>
      <nav className="container flex flex-row justify-between items-center mx-auto px-[50px] h-20 ">
        <img src={logo} alt="Logo" />
        <img src={menu} alt="Menu" className="lg:hidden" />
        <ul className="hidden flex-row gap-x-[50px] lg:flex">
          {menus.map((menu) => (
            <li key={menu.name} className="text-[17px] leading-7">
              <Link to={menu.path}>{menu.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
