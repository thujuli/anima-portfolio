import H2 from "../atoms/H2";
import WorkCard from "../molecules/WorkCard";
import freeBird from "../../assets/img/ic-fb.png";
import purpleHaze from "../../assets/img/ic-ph.png";
import youReallyGotMe from "../../assets/img/ic-yrgm.png";
import americanGirl from "../../assets/img/ic-ag.png";
import wholeLottaLove from "../../assets/img/ic-wll.png";
import underPressure from "../../assets/img/ic-up.png";

export default function Works() {
  const works = [
    {
      imgSrc: freeBird,
      imgAlt: "Logo Free Bird",
      author: "Lynyrd Skynyrd",
      name: "Free Bird",
    },
    {
      imgSrc: purpleHaze,
      imgAlt: "Logo Purple Haze",
      author: "Jimi Hendrix",
      name: "Purple Haze",
    },
    {
      imgSrc: youReallyGotMe,
      imgAlt: "Logo You Really Got Me",
      author: "The Kinks",
      name: "You Really Got Me",
    },
    {
      imgSrc: americanGirl,
      imgAlt: "Logo American Girl",
      author: "Tom Petty",
      name: "American Girl",
    },
    {
      imgSrc: wholeLottaLove,
      imgAlt: "Logo Whole Lotta Love",
      author: "Led Zeppelin",
      name: "Whole Lotta Love",
    },
    {
      imgSrc: underPressure,
      imgAlt: "Logo Under Pressure ",
      author: "Queen",
      name: "Under Pressure ",
    },
  ];

  return (
    <section className="container mx-auto px-[30px] py-10 lg:py-5 lg:px-[100px] ">
      <H2 className="text-center mb-[60px]">
        <span className="lg:hidden">Latest work</span>
        <span className="hidden lg:inline">My latest work</span>
      </H2>
      <div className="grid gap-y-[60px] lg:grid-cols-3 lg:gap-x-[68px] ">
        {works.map((work) => (
          <WorkCard
            key={work.name}
            imgAlt={work.imgAlt}
            imgSrc={work.imgSrc}
            author={work.author}
          >
            {work.name}
          </WorkCard>
        ))}
      </div>
    </section>
  );
}
