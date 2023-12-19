import P from "../atoms/P";

export default function BioCard({ imgSrc, imgAlt, children }) {
  return (
    <div className="w-[195px] flex-none">
      <img src={imgSrc} alt={imgAlt} className="mb-5" />
      <P>{children}</P>
    </div>
  );
}
