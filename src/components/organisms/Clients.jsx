import H2 from "../atoms/H2";
import H3 from "../atoms/H3";
import client1 from "../../assets/img/client1.png";
import client2 from "../../assets/img/client2.png";
import client3 from "../../assets/img/client3.png";
import star from "../../assets/img/ic-star.svg";
import P from "../atoms/P";
import ClientCard from "../molecules/ClientCard";

export default function Clients() {
  const clients = [
    {
      id: 1,
      testimony:
        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      name: "Gemma Nolen",
      img: client1,
      company: "Google",
      ranting: 5,
    },
    {
      id: 2,
      testimony:
        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      name: "Gemma Nolen",
      img: client2,
      company: "Google",
      ranting: 5,
    },
    {
      id: 3,
      testimony:
        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      name: "Gemma Nolen",
      img: client3,
      company: "Google",
      ranting: 5,
    },
  ];
  return (
    <div className="container mx-auto px-[30px] pt-[60px] pb-[90px] lg:px-[100px] lg:pt-[100px] lg:pb-[150px] ">
      <H2 className="text-center mb-10 lg:mb-[55px] ">Clients</H2>
      <div className="grid gap-y-[60px] lg:grid-cols-3 lg:gap-x-[68px] ">
        {clients.map((client) => (
          <ClientCard
            company={client.company}
            img={client.img}
            name={client.name}
            ranting={client.ranting}
            key={client.id}
          >
            {client.testimony}
          </ClientCard>
        ))}
      </div>
    </div>
  );
}
