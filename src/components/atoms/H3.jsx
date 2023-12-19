export default function H3({ children, className = "" }) {
  const classname = `font-semibold text-xl leading-[30px] ${className}`;
  return <h3 className={classname}>{children}</h3>;
}
