import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

export default function GlobalTemplate({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
