export default function Textarea({ name, cols, rows, placeholder }) {
  return (
    <textarea
      name={name}
      id={name}
      cols={cols}
      rows={rows}
      placeholder={placeholder}
      className="px-[30px] py-[21px] bg-[#F3F3F3] w-full text-[17px] leading-[27px] "
    ></textarea>
  );
}
