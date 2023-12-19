import productDesign from "../../assets/img/ic-pd.png";
import artDirection from "../../assets/img/ic-ad.png";
import visualDesign from "../../assets/img/ic-vd.png";
import SkillCard from "../molecules/SkillCard";

export default function Skills() {
  const skills = [
    {
      imgSrc: productDesign,
      imgAlt: "Logo Product Design",
      title: "Product design",
      desc: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    },
    {
      imgSrc: artDirection,
      imgAlt: "Logo Art Direction",
      title: "Art direction",
      desc: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    },
    {
      imgSrc: visualDesign,
      imgAlt: "Logo Visual Design",
      title: "Visual design",
      desc: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    },
  ];

  return (
    <section className="container mx-auto grid px-[62px] py-[150px] gap-y-[125px] lg:grid-cols-3 lg:px-[140px] lg:py-[180px] lg:gap-x-[125px] ">
      {skills.map((item) => (
        <SkillCard
          key={item.title}
          imgSrc={item.imgSrc}
          imgAlt={item.imgAlt}
          title={item.title}
        >
          {item.desc}
        </SkillCard>
      ))}
    </section>
  );
}
