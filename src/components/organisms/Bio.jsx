import profile from "../../assets/img/profile.png";
import P from "../atoms/P";
import BioCard from "../molecules/BioCard";

export default function Bio() {
  return (
    <section className="bg-[#F9E6F0]">
      <div className="container mx-auto  flex flex-col px-[30px] py-[120px] gap-y-[78px] lg:flex-row lg:px-[250px] lg:py-[120px] lg:gap-x-[70px] lg:justify-center lg:items-center ">
        <BioCard imgSrc={profile} imgAlt={"Pablo Designero"}>
          <b>Pablo Designero</b> <br />
          Designer & Unicorn Trainer
        </BioCard>
        <P>
          <b>Bio:</b> <br />
          Father of 3 humans, 5 unicorns & 2 dogs,I design since I can remember
          it. I often get asked where I get my inspiration from: in everyday's
          lil' details. And sometimes in leftover food I find in my beard.
        </P>
      </div>
    </section>
  );
}
