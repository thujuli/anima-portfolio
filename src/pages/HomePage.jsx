import GlobalTemplate from "../components/templates/GlobalTemplate";
import Hero from "../components/organisms/Hero";
import Partners from "../components/organisms/Partners";
import Skills from "../components/organisms/Skills";

export default function Home() {
  return (
    <>
      <GlobalTemplate>
        <Hero />
        <Partners />
        <Skills />
      </GlobalTemplate>
    </>
  );
}
