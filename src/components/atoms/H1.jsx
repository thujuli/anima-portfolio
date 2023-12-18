export default function H1({ children, className = "" }) {
  const classname = `font-semibold text-[65px] mb-5 leading-none lg:text-[80px] lg:leading-[90px] lg:mb-10 ${className}`;
  return <h1 className={classname}>{children}</h1>;
}
