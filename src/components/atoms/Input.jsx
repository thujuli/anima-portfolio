export default function Input({ type, name, placeholder }) {
  return (
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      className="px-[30px] py-[21px] bg-[#F3F3F3] w-full text-[17px] leading-[27px] "
    />
  );
}
