import AboutText from "../molecules/AboutText";

export default function About() {
  return (
    <section className="container mx-auto flex flex-col px-[30px] py-[120px] gap-y-[60px] lg:px-[200px] lg:py-[120px] ">
      <h2 className="font-medium text-2xl leading-9 tracking-[1px]">
        When I was 5, I got adbucted by a unicorn family. When they returned me
        to earth, I joined a designer school. But, fo' real, what I learned with
        my kidnaptive family really gave an edge to my creative language.
      </h2>
      <AboutText />
    </section>
  );
}
