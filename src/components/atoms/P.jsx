export default function P({ children, className = "" }) {
  const classname = `text-[17px] leading-[27px] ${className}`;

  return <p className={classname}>{children}</p>;
}
