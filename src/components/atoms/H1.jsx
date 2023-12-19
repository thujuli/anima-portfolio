export default function H1({ children, className = "" }) {
  const classname = `font-semibold text-[65px] leading-none lg:text-[80px] lg:leading-[90px] ${className}`;
  return <h1 className={classname}>{children}</h1>;
}
