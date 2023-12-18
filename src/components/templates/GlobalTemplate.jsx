import Header from "../organisms/Header";

export default function GlobalTemplate({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
