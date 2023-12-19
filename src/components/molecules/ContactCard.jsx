import H2 from "../atoms/H2";
import P from "../atoms/P";
import discord from "../../assets/img/ic-discord.svg";
import facebook from "../../assets/img/ic-facebook.svg";
import dribbble from "../../assets/img/ic-dribbble.svg";
import instagram from "../../assets/img/ic-instagram.svg";
import behance from "../../assets/img/ic-behance.svg";

export default function ContactCard({ children, title, className = "" }) {
  const icons = [
    {
      imgSrc: discord,
      imgAlt: "Discord",
    },
    {
      imgSrc: facebook,
      imgAlt: "Facebook",
    },
    {
      imgSrc: dribbble,
      imgAlt: "Dribbble",
    },
    {
      imgSrc: instagram,
      imgAlt: "Instagram",
    },
    {
      imgSrc: behance,
      imgAlt: "Behance",
    },
  ];

  return (
    <div className={className}>
      <H2 className="mb-10">{title}</H2>
      <P className="mb-[60px] ">{children}</P>
      <div className="flex flex-row gap-x-[13px] ">
        {icons.map((icon) => (
          <img
            src={icon.imgSrc}
            alt={icon.imgAlt}
            key={icon.imgAlt}
            className="w-9 h-9 "
          />
        ))}
      </div>
    </div>
  );
}
