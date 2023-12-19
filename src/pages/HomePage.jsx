import GlobalTemplate from "../components/templates/GlobalTemplate";
import Hero from "../components/organisms/Hero";
import Partners from "../components/organisms/Partners";
import Skills from "../components/organisms/Skills";
import Works from "../components/organisms/Works";
import Clients from "../components/organisms/Clients";

export default function Home() {
  return (
    <GlobalTemplate>
      <Hero />
      <Partners />
      <Skills />
      <Works />
      <Clients />
    </GlobalTemplate>
  );
}
