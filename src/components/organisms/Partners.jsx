import google from "../../assets/img/logo-google.svg";
import be from "../../assets/img/logo-behance.svg";
import dribbble from "../../assets/img/logo-dribbble.svg";
import apple from "../../assets/img/logo-apple.svg";
import awww from "../../assets/img/logo-awwwards.svg";

export default function Partners() {
  const partners = [
    {
      imgSrc: google,
      imgAlt: "Google",
    },
    {
      imgSrc: be,
      imgAlt: "Behance",
    },
    {
      imgSrc: dribbble,
      imgAlt: "Dribbble",
    },
    {
      imgSrc: apple,
      imgAlt: "Apple",
    },
    {
      imgSrc: awww,
      imgAlt: "Awwwards",
    },
  ];

  return (
    <section className="container mx-auto ">
      <div className="flex flex-row mx-[66px] py-[60px] gap-y-[60px] gap-x-[60px] flex-wrap justify-center border-y-2 border-black/20  lg:justify-between lg:gap-x-0">
        {partners.map((partner) => (
          <img src={partner.imgSrc} alt={partner.imgAlt} key={partner.imgAlt} />
        ))}
      </div>
    </section>
  );
}
