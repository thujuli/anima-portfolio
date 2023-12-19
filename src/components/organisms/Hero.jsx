import illustrationHero from "../../assets/img/illustration-hero.png";
import HeroCard from "../molecules/HeroCard";

export default function Hero() {
  return (
    <>
      <section className="container mx-auto flex flex-col px-[30px] pt-[50px] pb-[60px] gap-y-[60px] lg:flex-row lg:p-[100px] lg:gap-x-7">
        <HeroCard
          subHead="Branding | Image making"
          smTitle="Visual Designer"
          lgTitle="My awesome portfolio"
          smDesc="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
          lgDesc="And I made it myself! Yes. In Figma with Anima"
        />
        <img
          src={illustrationHero}
          alt="Illustration Hero"
          className="w-full lg:max-w-[495px]"
        />
      </section>
    </>
  );
}
