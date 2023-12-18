import illustrationHero from "../../assets/img/illustration-hero.png";
import H1 from "../atoms/H1";
import P from "../atoms/P";

export default function Hero() {
  return (
    <>
      <div className="container mx-auto flex flex-col px-[30px] pt-[50px] pb-[60px] gap-y-[60px] lg:flex-row lg:p-[100px] lg:gap-x-7">
        <div className="text-center lg:text-start lg:flex lg:flex-col lg:justify-center">
          <h2 className="font-semibold text-xl mb-6 leading-[30px] lg:mb-10">
            Branding | Image making
          </h2>
          <H1 className="lg:hidden">Visual Designer</H1>
          <H1 className="hidden lg:block">My awesome portfolio</H1>
          <P className="lg:hidden">
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com
          </P>
          <P className="hidden lg:block">
            And I made it myself! Yes. In Figma with Anima
          </P>
        </div>
        <img
          src={illustrationHero}
          alt="Illustration Hero"
          className="w-full lg:max-w-[495px]"
        />
      </div>
    </>
  );
}
