import P from "../atoms/P";

export default function SkillCard({ imgSrc, imgAlt, title, children }) {
  return (
    <div className="text-center col-span-1">
      <img src={imgSrc} alt={imgAlt} className="w-[130px] mx-auto mb-14" />
      <h2 className="font-semibold text-[27px] leading-[42px] mb-[19px] ">
        {title}
      </h2>
      <P>{children}</P>
    </div>
  );
}
