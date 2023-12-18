import productDesign from "../../assets/img/ic-pd.png";
import artDirection from "../../assets/img/ic-ad.png";
import visualDesign from "../../assets/img/ic-vd.png";
import SkillCard from "../molecules/SkillCard";

export default function Skills() {
  return (
    <div className="container mx-auto grid px-[62px] py-[150px] gap-y-[125px] lg:grid-cols-3 lg:px-[140px] lg:py-[180px] lg:gap-x-[125px] ">
      <SkillCard
        imgSrc={productDesign}
        imgAlt="Logo Product Design"
        title="Product design"
      >
        This is a template Figma file, turned into code using Anima. Learn more
        at AnimaApp.com
      </SkillCard>
      <SkillCard
        imgSrc={artDirection}
        imgAlt="Logo Art Direction"
        title="Art direction"
      >
        This is a template Figma file, turned into code using Anima. Learn more
        at AnimaApp.com
      </SkillCard>
      <SkillCard
        imgSrc={visualDesign}
        imgAlt="Logo Visual design"
        title="Visual design"
      >
        This is a template Figma file, turned into code using Anima. Learn more
        at AnimaApp.com
      </SkillCard>
    </div>
  );
}
