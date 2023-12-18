import logo from "../../assets/img/logo.svg";
import menu from "../../assets/img/menu.svg";

export default function Header() {
  const menuName = ["About", "Work", "Contact"];

  return (
    <>
      <nav className="container flex flex-row justify-between items-center mx-auto px-[50px] h-20 ">
        <img src={logo} alt="Logo" />
        <img src={menu} alt="Menu" className="lg:hidden" />
        <ul className="hidden flex-row gap-x-[50px] lg:flex">
          {menuName.map((name) => (
            <li key={name} className="text-[17px] leading-7">
              <a href="#">{name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
