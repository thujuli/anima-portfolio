import H3 from "../atoms/H3";
import P from "../atoms/P";
import star from "../../assets/img/ic-star.svg";

export default function ClientCard({ children, img, ranting, name, company }) {
  return (
    <div className="bg-[#FFFCF5] border-2 border-[#FFD285] p-[30px] ">
      <H3 className="mb-20">{children}</H3>
      <div className="flex flex-row gap-x-5 ">
        <img
          src={img}
          alt="Client 1"
          className="w-[50px] h-[50px] rounded-full flex-none"
        />
        <div className="flex-grow flex-wrap">
          <div className="flex flex-row gap-x-[5px] mb-[10px] ">
            {Array.from({ length: ranting }, (_, i) => (
              <img src={star} alt="Star" key={i} />
            ))}
          </div>
          <P>{`${name}, ${company}`}</P>
        </div>
      </div>
    </div>
  );
}
