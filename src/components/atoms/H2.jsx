export default function H2({ children, className = "" }) {
  const classname = `font-semibold text-[32px] leading-[42px] ${className}`;
  return <h2 className={classname}>{children} </h2>;
}
