import ContactCard from "../molecules/ContactCard";
import ContactForm from "../molecules/ContactForm";

export default function Footer() {
  return (
    <footer className="container mx-auto px-[30px] pb-[70px] lg:px-[100px] ">
      <div className="flex flex-col gap-y-20 pt-[70px] border-t-2 border-black/20 lg:flex-row lg:gap-x-[190px] ">
        <ContactCard title="Let’s work together" className="lg:w-[360px]">
          This is a template Figma file, turned into code using Anima. Learn
          more at AnimaApp.com This is a template Figma file, turned into code
          using Anima. Learn more at AnimaApp.com
        </ContactCard>
        <ContactForm className="flex-grow" />
      </div>
    </footer>
  );
}
