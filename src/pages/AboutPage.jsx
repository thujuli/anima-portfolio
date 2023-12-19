import About from "../components/organisms/About";
import Bio from "../components/organisms/Bio";
import GlobalTemplate from "../components/templates/GlobalTemplate";

export default function AboutPage() {
  return (
    <GlobalTemplate>
      <Bio />
      <About />
    </GlobalTemplate>
  );
}
