import H1 from "../atoms/H1";
import P from "../atoms/P";

export default function HeroCard({
  subHead,
  smTitle,
  lgTitle,
  smDesc,
  lgDesc,
}) {
  return (
    <div className="text-center lg:text-start lg:flex lg:flex-col lg:justify-center">
      <h2 className="font-semibold text-xl mb-6 leading-[30px] lg:mb-10">
        {subHead}
      </h2>
      <H1 className="mb-5 lg:mb-10 ">
        <span className="lg:hidden">{smTitle}</span>
        <span className="hidden lg:inline">{lgTitle}</span>
      </H1>
      <P>
        <span className="lg:hidden">{smDesc}</span>
        <span className="hidden lg:inline">{lgDesc}</span>
      </P>
    </div>
  );
}
