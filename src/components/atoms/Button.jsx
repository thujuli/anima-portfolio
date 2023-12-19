export default function Button({ type, text, onClick = () => {} }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="py-[25px] px-[82px] bg-c_black w-fit text-white "
    >
      {text}
    </button>
  );
}
