import google from "../../assets/img/logo-google.svg";
import be from "../../assets/img/logo-behance.svg";
import dribbble from "../../assets/img/logo-dribbble.svg";
import apple from "../../assets/img/logo-apple.svg";
import awww from "../../assets/img/logo-awwwards.svg";

export default function Partners() {
  return (
    <div className="container mx-auto ">
      <div className="flex flex-row mx-[66px] py-[60px] gap-y-[60px] gap-x-[60px] flex-wrap justify-center border-y-2 border-black/20  lg:justify-between lg:gap-x-0">
        <img src={google} alt="Google" />
        <img src={be} alt="Behance" />
        <img src={dribbble} alt="Dribbble" />
        <img src={apple} alt="Apple" />
        <img src={awww} alt="Awwwards" />
      </div>
    </div>
  );
}
