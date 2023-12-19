import P from "../atoms/P";
import H3 from "../atoms/H3";

export default function WorkCard({ imgSrc, imgAlt, author, children }) {
  return (
    <div className="col-span-1">
      <img src={imgSrc} alt={imgAlt} className="mb-[25px] " />
      <H3 className="mb-[10px]">{children}</H3>
      <P>{author}</P>
    </div>
  );
}
